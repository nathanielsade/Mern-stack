import {useState} from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () =>{
    const {dispatch} = useWorkoutsContext()

    const [title,setTile] = useState('')
    const [reps,setReps] = useState('')
    const [load,setLoad] = useState('')
    const [error,setError] = useState(null)
    const [emptyfields,setEmptyfields] = useState([])
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const workout = {title,reps,load}
        
        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            setEmptyfields(json.emptyfields)
        }
        if(response.ok){
            setEmptyfields([])
            setTile('')
            setReps('')
            setLoad('')
            setError(null)
            dispatch({type: 'CREATE_WORKOUT', payload: json})

        }
    }

    return (
        <form className="create"  onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label >Excersize Title</label>
            <input type = "text" onChange={(e) =>setTile(e.target.value)} value = {title}
            className = {emptyfields.includes('title') ? 'error' : ''} ></input>

            
            <label >Load (kg)</label>
            <input type = "number" onChange={(e) =>setLoad(e.target.value)} value = {load}
            className = {emptyfields.includes('load') ? 'error' : ''}></input>

            
            <label >Reps</label>
            <input type = "number" onChange={(e) =>setReps(e.target.value)} value = {reps}
            className = {emptyfields.includes('reps') ? 'error' : ''}></input>
            <button>Add Workout</button>
            {error && <div className ='error'>{error}</div>}
            
        </form>
    )

}
export default WorkoutForm