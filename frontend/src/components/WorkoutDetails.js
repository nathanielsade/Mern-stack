import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useState } from 'react'
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const [isUpdating, setIsUpdating] = useState(false)
  const [updatedLoad, setUpdatedLoad] = useState(workout.load)
  const [updatedReps, setUpdatedReps] = useState(workout.reps)

  const handleDelete = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  const handleUpdate = async (e) =>{
    e.preventDefault()
    const updatedWorkout = {...workout,load:updatedLoad,reps:updatedReps}
    const response = await fetch('/api/workouts/' + workout._id,{
      method:'PATCH',
      body:JSON.stringify(updatedWorkout),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type:'UPDATE_WORKOUT',payload:json})
      console.log('Updated workouts:', json)

      setIsUpdating(false)
    }else {
    console.error('Failed to update workout', json)
  }
    
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
      <div className="workout-details-buttons">
        <span className="material-symbols-outlined delete-btn" onClick={handleDelete}>delete</span>
        <span className="material-symbols-outlined edit-btn"onClick={()=>setIsUpdating(true)}>edit</span>
      </div>  
      {isUpdating && (
         <div className="update-form">
          <form onSubmit={handleUpdate}>
            <label>Load</label>
            <input type="number" value={updatedLoad} onChange={(e) => setUpdatedLoad(e.target.value)} />
            <label>Reps</label>
            <input type="number" value={updatedReps} onChange={(e) => setUpdatedReps(e.target.value)} />
            <button type = "submit">Confirm Update</button>
            <button onClick={() => setIsUpdating(false)}>Cancel</button>
          </form>
        </div>)}
    </div>
  )
}

export default WorkoutDetails