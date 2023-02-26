# Interactly-BACKEND-DEVELOPER-Coding-Task

I have performed all the operations only on SQL database and not performed on CRM

The given tasks were :-

Introduction
You are required to develop a CRUD (Create – Read – Update – Delete) application in NodeJs using
ExpressJS framework in this round. Basically, you will use FreshSales CRM API to create a Contact in
FreshSales CRM, Retrieve Contact, Update Contact, Delete Contact.
BONUS POINTS: Create a MySQL database and table called ‘contacts’ and then perform similar Write,
Read, Update and Delete operations.

Required Resources/ Documentation

1. FreshSales API documentation https://developer.freshsales.io/api/#create_contact (Create a
sample account with some dummy data for FREE here and get the API Key from the settings)
2. NodeJS server https://nodejs.org/en/docs/guides/getting-started-guide/
3. ExpressJS https://expressjs.com/


Task (Data format for all the endpoints should be in JSON)

1. Create one endpoint [ POST /createContact ] to create new contact in CRM or Database. The possible
values for the contact are first_name, last_name, email, mobile_number.
So accept them as POST parameters in the REST API call along with data_store parameter whose
possible values are either ‘CRM’ or “DATABASE’. Based on ‘data_store’ value create the contact in
either ‘CRM’ or ‘DATABASE’.
API: POST createContact(first_name, last_name, email, mobile_number,
data_store)

2. Create one endpoint [GET /getContact] to retrieve the contact for a given contact_id (that was
obtained from previous CRM response or Database column ‘ID’)
So accept contact_id as POST parameters in the REST API call along with data_store
parameter whose possible values are either ‘CRM’ or “DATABASE’. Based on ‘data_store’ value get the
contact from either ‘CRM’ or ‘DATABASE’.
API: POST getContact(contact_id, data_store)

3. Create one endpoint [POST /updateContact] for given a contact_id update its email and
mobile_number.
So accept contact_id as POST parameters in the REST API call along with data_store
parameter whose possible values are either ‘CRM’ or “DATABASE’. Based on ‘data_store’ value update
the contact in either ‘CRM’ or ‘DATABASE’.
POST updateContact(contact_id, new_email, new_mobile_number, data_store)

4. Create one endpoint [POST /deleteContact] for a given contact_id
So accept contact_id as POST parameters in the REST API call along with data_store
parameter whose possible values are either ‘CRM’ or “DATABASE’. Based on ‘data_store’ value delete
the contact from either ‘CRM’ or ‘DATABASE’.
POST deleteContact(contact_id, data_store)
