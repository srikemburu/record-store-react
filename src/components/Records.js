
import {getRecords} from '../services/records-api'
import {Link} from 'react-router-dom'
import NewRecord from './NewRecord'
import {useState, useEffect} from 'react'

export default function Records() {
    //save api response into state variable
    const [records, setRecords] = useState([])

    useEffect(()=>{
        getRecords()
        .then(res => res.json())
        .then(res => setRecords(res))
    },[])

    console.log(records)

    return (
    <div>
        <h1> Records List</h1>
        <ul>
            {records.map((record,index) => {
               return(
                   <react>
                        <Link to={"/" + record._id} >
                            <h3>Artist: {record.artist}  || Album: {record.albumTitle}
                                || Year: {record.year} || Genre: 
                                {record.genre} </h3>
                            {/* <pre>Cover Art: {record.coverArt}</pre> */}
                        </Link>
                        <h4>Cover Art: {record.coverArt}</h4>
                    </react>
               ) 
            })}
        </ul>
        
        <NewRecord />   {/* Add create Record function */}
    </div>
  )
}
