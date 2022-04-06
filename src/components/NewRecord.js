import React from 'react';
import { useNavigate} from "react-router-dom";
// import api endpoint
import { createRecord } from '../services/records-api'

export default function NewRecord() { 
    const nav = useNavigate()

    const newRecord = e => {
        const record = {artist: document.querySelector('#art').value,
            albumTitle: document.querySelector('#alb').value,
            coverArt: document.querySelector('#covart').value,
            year: document.querySelector('#year').value,
            genre: document.querySelector('#genre').value}
        createRecord(record)
        nav('/')
    }   
        return (
            <div>
                <h1> Create Record </h1>
                <form onSubmit={newRecord}>
                    <input type='text' name='artist' id='art' placeholder='Artist Name' required/><br/>
                    <input type='text' name='albumTitle' id='alb' placeholder='Album Title' required/><br/>
                    <input type='text' name='coverArt' id='covart' placeholder='Cover Art' required/><br/>
                    <input type='text' name='year' id='year' placeholder='Year Recorded' required/><br/>
                    <input type='text' name='genre' id='genre' placeholder='Genre' required/><br/><br/>
                    <input type='submit' />
                </form>
            </div>
        )
}
