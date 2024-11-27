const mongoose = require('mongoose')
const Workout = require('../models/workout')

const getworkouts = async(req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}

const createworkout = async(req,res) =>{
    const {title,reps,load} =  req.body
    let emptyfields = []
    if(!title){
        emptyfields.push('title')
    }
    if(!reps){
        emptyfields.push('reps')
    }
    if(!load){
        emptyfields.push('load')
    }
    if(emptyfields.length > 1){
        return res.status(400).json({err:'Please fill in the following fields: ' ,emptyfields})
    }
        
    try{
        const newWorkout =  await Workout.create({title,load,reps})
        res.status(200).json(newWorkout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
const getWorkout = async (req,res) =>{
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:'Invalid id'})
    }
    const newworkout = await Workout.findById(id)
    if(!newworkout){
        return res.status(404).json({err:'workout not found'})
    }
    res.status(200).json(newworkout)
}

const deleteWorkout = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err:'No such workout'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(400).json({err:'workout not found'})
    }
    res.status(200).json(workout)
}


const updateWorkout = async(req,res)=>{
    const {id} = req.params
  const updatedWorkout = await Workout.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );
    if(!updatedWorkout){
        return res.status(404).json({err:'workout not found'})
    }
    res.status(200).json(updatedWorkout)
}
module.exports = {getworkouts,createworkout,getWorkout,deleteWorkout,updateWorkout}