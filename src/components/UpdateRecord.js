
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneRecord, updateRecord } from '../services/records-api'

export default function UpdateRecord() { 
    const {id} = useParams()
    const nav = useNavigate()
    const [record,setData] = useState({})

    useEffect(() => {
        getOneRecord(id)
        .then(res => res.json())
        .then(res => setData(res))
    },[])

    const updateTheRecord = e => {
        e.preventDefault()
        const updatedRecord = {artist: e.target.artist.value, 
                            albumTitle: e.target.albumTitle.value,
                            coverArt: e.target.coverArt.value,
                            year: e.target.year.value,
                            genre: e.target.genre.value}
        updateRecord(updatedRecord,id)
        nav(`/${id}`)
        }

        return(
            <div>
                <h1>Edit Record</h1>
                <form onSubmit={updateTheRecord}>
                    <input type='text' name='artist' defaultValue={record.artist} required/><br/>
                    <input type='text' name='albumTitle' defaultValue={record.albumTitle} required/><br/>
                    <input type='text' name='coverArt' defaultValue={record.coverArt} required/><br/>
                    <input type='text' name='year' defaultValue={record.year} required/><br/>
                    <input type='text' name='genre' defaultValue={record.genre} required/><br/><br/>
                    <input type='submit' />
                </form>
            </div>
        ) 
}




