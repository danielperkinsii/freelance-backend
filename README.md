# Freelance CRM
https://freelancecrm.herokuapp.com/

Freelance CRM is a minimalist CRM built with Freelancers in mind. The idea behind this project is that freelancers have relatively simple needs when it comes to using a CRM so this one has a nice UI and simplistic functionality.

### Functionality includes:
#### Contact Information: 
Uses can create contacts with a picture, first and last name, phone number, email address, business, and whether or not they are a business lead.

#### Image Upload: 
Users have file browse, drag and drop, and hot-link capabilities for contact image uploading.

#### Contact Management: 
Users can Add, Edit, and Delete a contact.

#### Business Leads:
Users can check a box on their data input form and their contact will show up as a business lead.

#### Projects: 
Users can create a project for a certain contact that is linked to that contact. Project information includes the contact relevant to the project, project title, project description, and due date.

#### Twitter Timeline: 
Users can add their twitter feed to their dashboard to keep up with social media interaction.

### Stack
React Js, Node.js, Sequelize

### File Structure
```
Front End

    freelance-frontend
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        └── components
            ├── BusinessLeadsList.jsx
            ├── ContactList.jsx
            ├── Header.jsx
            ├── ProjectList.jsx
            ├── Sidebar.jsx
            ├── TweetList.jsx
            └── modals
                ├── EditForm.jsx
                ├── NewContact.jsx
                ├── NewProject.jsx
                └── ProjectEditForm.jsx
```

``` 
Back End

  freelance-backend
  ├── controllers
  │   ├── contact.js
  │   └── project.js
  ├── databases
  │   └── databaseConnector.js
  ├── database.sqlite3
  ├── models
  │   ├── contact.js
  │   └── project.js
  └── server.js
```


## User Stories
### Dave, a Freelance Programmer and recent GA grad.
As Dave, I want to organize my projects to keep them on schedule so that I can deliver it to my client on time.
### Dave just got a lead on linked in for a local restaurant that want's a webapp that orders online.
As Dave, I want to track this lead with specifics (how did I find this lead, contact info, date of connection, and follow up date), so that I can increase my chances of getting another contract.

### Betsy, a freelance writer who writes copy for a local business website and edits for authors that are trying to get published.
As Betsy, I want to separate my projects by type so that I can optimize my workflow by working on like tasks at the same time.
### Betsy is slow on work and want's to see if any former customers need help.
As Betsy, I want a list of contacts that contain info (name, number, email, and former projects) so that I can capitalize on repeat customers.

### Harry, a freelance licenced electrician takes on small jobs on the side from his fulltime career.
As Harry, my trade is in high demand, so I want to keep an organized inventory of materials, so I have everything I need when coming to a new job.
### Harry's side hustle has really picked up and he is now wondering if he can make it his fulltime gig.
As Harry, I want to analyze my past quarterly revenue and project my future revenue to decide if I should make the leap to fulltime self employment.

# MVP
## new tech
### integrate with an email marketing platform (mailchimp api)
## new tech plan b
### oauth (needed for most mailchimp functionality)

## features
### github repo
### deploy on github pages
### user Auth 
### crud in contacts, projects, tasks inside projects, and leads
### REST
### style with bootstrap
### NERDS stack: Node, Express, React, Database SQL


# STRETCH
## new tech
### oauth (needed for most mailchimp functionality)
### deploy on aws

## features
### make contacts searchable
### cashflow diagram on dashboard
### cashflow page
