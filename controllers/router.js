

//___________________
// Requirements
//___________________
const express = require('express')
const router = express.Router()
const Contact = require('../models/contact.js')
const bodyParser = require('body-parser')




//___________________
// Routes
//___________________

router.get('/', (req, res) => {
    return Contact.findAll().then((contacts) => res.send(contacts))
    .catch((err) => {
        console.log('There was an error querying contacts', JSON.stringify(err))
        return res.send(err)
    })
})

router.post('/api/contacts/', (req, res) => {
    return Contact.create(req.body).then((contact) => res.send(contact)).catch((err) => {
        console.log('there was an error creating a contact', JSON.stringify(contact))
        return res.status(400)
    })
})

router.put('/api/contacts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return Contact.findByPk(id).then((contact) => {         
        return contact.update(req.body, {id: req.params.id})
         .then((updatedContact) => {
             res.send(updatedContact)
         })
         .catch((err) => {
             console.log('there was an error updating', err)
             res.status(400).send(err)
            })
     })
     .catch((err) => {
         console.log('there was an error finding by pk', err)
         res.status(400).send(err)
     })
 })

 router.delete('/api/contacts/:id', (req, res) => {
     const id = parseInt(req.params.id)
     return Contact.findByPk(id)
     .then((contact) => 
         contact.destroy())
         .then(() => res.send({id}))
         .catch((err) => {
             console.log('There was an error deleting the contact', JSON.stringify(err))
             res.status(400).send(err)
         })
 })

module.exports = router

