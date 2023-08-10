# [VetApp](https://vetappwecare.netlify.app/)

<br>

## Description

A veterinary App for easier communication with your Vet.

## User Stories

<br>

- **404**: A user can see the 404 page when they try to reach a page that does not exist
- **Signup**: A user can sign up to the webpage
- **Login**: A user can login to the webpage with the account created on the signup
- **Logout**: A user can logout from the webpage so no one can modify their information
- **Pet**: A user can add a pet
- **Pets**: A user can see all of his pets, edit and delete them
- **Request**: A user can write a request to the vet and see all of his requests
- **Feedback**: A user can see the feedback sent by the vet
- **Complaint**: A user can send a complaint to the vet
- **Store**: A user can browse the store and buy medication

## Backlog

- Expand the store
- Implement languages
- Signin with Google etc...

## Routes

### Public Routes

- /login
- /signup

### Private Routes

- /
- /new-form
- /your-forms
- /your-pets
- /your-feedbacks
- /your-feedbacks/:fbId
- /editPet/:id
- /detailPet/:id
- /new-pet
- /complaints
- /store
- /store/:medId
- /store/:medId/checkout

### Admin Routes

- /admin
- /admin/all-pets
- /admin/all-forms
- /admin/all-feedbacks
- /admin/all-complaints
- /admin/all-forms/:formId
- /admin/medication

## Pages

### User Pages

- Signup Page
- Login Page
- Home Page
- New Form Page
- Your Forms Page
- New Pet Page
- Your Pet Page
- Pet Details Page
- Edit Pet Page
- Feedback Page
- Feedback Details Page
- Complaints Page
- Store Page
- Medication Details Page
- Checkout Page

### Admin Pages

- Admin Panel Page
- Admin Pets Page
- Admin Feedback Page
- Admin Requests Page
- Admin Medication Page
- Admin Complaints Page

## Components

- Chatbot
- Checkout Form
- isAdmin
- IsAnon
- IsPrivate
- NavBar

## Context

- Auth Context

## Links

### Git

[Repository Link](https://github.com/Jswears/veterinary-backend)

[Deploy Link](https://vetappwecare.netlify.app/)

### Collaborators

[Joaquin Swears Salinas](https://github.com/Jswears)

[Nicola Pasa](https://github.com/nicolapasa)

[Andrej Delinac](https://github.com/Jerdnaa)

### Slides

[Google Slides Link](https://docs.google.com/presentation/d/1Pp5_5jcbKehMuCGfFlufBLhlJhVwrf2JqDoZzylqyGQ/edit?usp=sharing)
