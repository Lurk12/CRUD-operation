const express = require('express');
const router = express.Router()

const {createPerson,getSinglePerson,deletePerson,updatePerson, getAllPeople} = require('../controllers/people')


    router.route('/').get(getAllPeople).post(createPerson)
    router.route('/:id').get(getSinglePerson).patch(updatePerson).delete(deletePerson)
    
module.exports = router