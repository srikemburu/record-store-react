import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneRecord, deleteRecord } from '../services/records-api'

function DeleteRecord() {
    const nav = useNavigate()
    const { id } = useParams()
    const [record, setRecord] = useState({})

    // The second parameter to the useEffect React hook is an array of dependencies that determines when the hook is run, passing an empty array causes the hook to only be run once when the component first loads
    useEffect(() => {getOneRecord(id)
        .then (res => res.json())
        .then(res => setRecord(res))
    },[]) 
    
    const deleteTheRecord = () => {
        deleteRecord(id)
        nav('/')
    }

    return(
        <div>
            <h1>Record: </h1>
            <h3>{record.artist}</h3>
            <button onClick={deleteTheRecord}>Delete</button>
        </div>
    )
}

export default DeleteRecord