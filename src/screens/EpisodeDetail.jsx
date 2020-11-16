import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const EpisodeDetail = () => {
    const [episode, setEpisode] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const findEpisode = async () => {
            const response = await axios.get(`https://api.airtable.com/v0/appRx1trr4DFayGsm/Table%201/${id}`, 
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                  },
            })
            setEpisode(response.data)
            setLoaded(true)
        }
        findEpisode()
    }, [id])

    console.log(episode.fields.title)

    if(!isLoaded){
        return <h4>Loading...</h4>
    }

    return(
        <>
            <h1>Single Episode Page</h1>
            <h2>{episode.fields.title}</h2>
        </>
    )
}

export default EpisodeDetail