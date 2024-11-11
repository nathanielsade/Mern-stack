const express = require('express')
const router = express.Router()
const workout = require('../models/workout')

router.get('/', (req,res) =>{
    res.json({mssg:'get all workouts'})
})

router.get('/:id', (req,res) =>{
    res.json({mssg:'get specific workouts'})
})


router.post('/', async (req,res) =>{
    const {title,reps,load} =  req.body
    try{
        const newWorkout =  await workout.create({title,reps,load})
        res.status(200).json(newWorkout)
    }catch(err){
        res.status(400).json({mssg:err.message})
    }
})

router.delete('/:id', (req,res) =>{
    res.json({mssg:'delte a workout'})
})

router.patch('/:id', (req,res) =>{
    res.json({mssg:'update a workout'})
})


module.exports = router