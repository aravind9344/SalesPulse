SalesPulse CRM

SalesPulse CRM is a simple lead management application built for the Digital Heroes Full Stack Development qualification task.

The goal of this project was to build a small CRM that a sales team can actually use instead of just creating a lead form. It allows teams to capture leads, manage the sales pipeline, assign leads to members, keep notes, and track every activity performed on a lead.


---

Features

Public lead capture form

Secure login using JWT

Admin and Member roles

Lead assignment

Sales pipeline management

Estimated deal value

Notes with timestamps

Activity history

Search leads

Filter by status

Pagination

PostgreSQL database



---

Tech Stack

Frontend

Next.js

React

TypeScript

CSS Modules


Backend

Next.js API Routes

Prisma ORM

PostgreSQL

JWT Authentication

bcrypt



---

Running the project

Install dependencies

npm install

Create a .env file

DATABASE_URL="your_database_url"
  
JWT_SECRET="your_secret_key"

Run database migrations

npx prisma migrate dev

Seed the database

npm run seed

Start the project

npm run dev


---

Demo Accounts

Admin

Email

admin@test.com

Password

admin123

Member

Email

member@test.com

Password

member123


---

Project Structure

app/
  
api/
  
dashboard/
  
login/
  

  
lib/
  

  
prisma/
  

  
public/


---

API Endpoints

Authentication

POST /api/auth/login
  
GET  /api/auth/me
  
POST /api/auth/logout

Leads

GET    /api/leads
  
POST   /api/leads
  
GET    /api/leads/:id
  
PATCH  /api/leads/:id
  
DELETE /api/leads/:id

Notes

POST /api/leads/:id/notes

Users

GET /api/users


---

How the CRM works

1. A visitor submits the public lead form.


2. The lead is stored in PostgreSQL with the status NEW.


3. An administrator can assign the lead to a team member.


4. Team members update the lead as it moves through the pipeline.


5. Every important action is recorded in the activity log.


6. Notes can be added to keep track of conversations with the customer.




---

Future Improvements

If I continue developing this project, I would like to add:

Dashboard analytics

Email notifications

File attachments

CSV export

Calendar integration

Team performance reports



---

Deployment

Frontend:

(Add your deployed URL)

Repository:

(Add your GitHub repository)


---

About

This project was developed as part of the Digital Heroes Full Stack Development Qualification Task.

Required footer included:

Built for Digital Heroes Training Task
