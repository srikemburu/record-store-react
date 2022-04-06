// Get one document from database
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import api endpoint
import { getOneRecord, deleteRecord  } from '../services/records-api'

export default function OneRecord() {
    // Object destructuring
    const { id } = useParams();
    const nav = useNavigate()

    console.log(useParams())
    console.log(id)
    const [oneRecord, setOneRecord] = useState({})
   
    useEffect(()=>{
        getOneRecord(id)
        .then(res => res.json())
        .then(res => setOneRecord(res))
    },[])

    const deleteTheRecord = () => {
        deleteRecord(id)
        nav('/')
    }

    console.log("_id = ", oneRecord._id)
    return(    
        <div>
            <h3>Artist: {oneRecord.artist}  || Album: {oneRecord.albumTitle}
                || Year: {oneRecord.year} || Genre: 
                {oneRecord.genre} </h3>
                <pre>Cover Art: {oneRecord.coverArt}</pre>
            <br/>    
            <button onClick={() => {nav("/")}}>Index Page</button><br/><br/>
            <button onClick={() => {nav(`/${id}/update`)}}>Edit</button>
            <button onClick={deleteTheRecord}>Delete</button>
        </div>
    )
}
