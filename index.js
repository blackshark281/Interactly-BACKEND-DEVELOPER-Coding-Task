const express = require("express");
const mysql = require("mysql");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

// Create a MySQL connection   (from config.js file)
const db = require("./config");

// Parse incoming requests data
app.use(bodyParser.json());

// Create a new contact in either CRM or database
app.post("/createContact", (req, res) => {
  const { first_name, last_name, email, mobile_number, data_store } = req.body;

  if (data_store === "DATABASE") {
    // Create a new contact in the MySQL database
    const sql = `INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES ('${first_name}', '${last_name}', '${email}', '${mobile_number}')`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  } else {
    res.status(400).send("Invalid data store!");
  }
});

app.get("/getContact", async (req, res) => {
  const { contact_id, data_store } = req.body;

  if (!contact_id || !data_store) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  db.query(
    "SELECT * FROM contacts WHERE contact_id = ?",
    [req.body.contact_id],
    (err, results, fields) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    }
  );
});

app.put("/updateContact/:contact_id", async (req, res) => {
  const { contact_id } = req.params;

  const { new_email, new_mobile_number, data_store } = req.body;

  // Check if required parameters are provided
  if (!new_email || !new_mobile_number || !data_store) {
    return res.status(400).json({
      message: "Please provide new_email, new_mobile_number, and data_store",
    });
  }

  db.query(
    "UPDATE contacts SET email = ? , mobile_number = ? WHERE contact_id = ?",
    [new_email, new_mobile_number, contact_id],
    (err, result, fields) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deleteContact/:id", (req, res) => {
  const contact_id = req.params.id;

  const { data_store } = req.body;

  // Check if required parameters are provided
  if (!contact_id || !data_store) {
    return res.status(400).json({
      message: "Please provide contact_id and data_store",
    });
  }

  const sql = `DELETE FROM contacts WHERE contact_id = ${contact_id}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error deleting row from database: ", err);
      res.status(500).send("Internal server error");
      return;
    }

    console.log(`Deleted row with id ${contact_id}`);
    res.status(200).send(`Deleted row with id ${contact_id}`);
  });
});

app.listen(3000);
