const mongoose = require('mongoose')
const workout = require('../models/workout')

const getworkouts = async(req,res) =>{
    const workouts = await workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}

const createworkout = async(req,res) =>{
    const {title,reps,load} =  req.body
    try{
        const newWorkout =  await workout.create({title,load,reps})
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
    const newworkout = await workout.findById(id)
    if(!newworkout){
        return res.status(404).json({err:'workout not found'})
    }
    res.status(200).json(newworkout)
}

const deleteWorkout = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err:'Invalid id'})
    }
    const newWorkout = await workout.findOneAndDelete({_id:id})
    if(!newWorkout){
        return res.status(404).json({err:'workout not found'})
    }
    res.status(200).json({mssg:'workout deleted'})
}

const updateWorkout = async(req,res)=>{
    const {id} = req.params
    const updatedWorkout = await workout.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if(!updatedWorkout){
        return res.status(404).json({err:'workout not found'})
    }
    res.status(200).json(updatedWorkout)

}
module.exports = {getworkouts,createworkout,getWorkout,deleteWorkout,updateWorkout}