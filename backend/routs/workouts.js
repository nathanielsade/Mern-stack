const express = require('express')
const router = express.Router()
const workout = require('../models/workout')
const {createworkout,
    getworkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

router.get('/', getworkouts)

router.get('/:id',getWorkout)


router.post('/',createworkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)


module.exports = router