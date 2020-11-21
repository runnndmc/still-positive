import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Layout from '../shared/Layout'

const EpisodeDetail = () => {

  const [episode, setEpisode] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()


    useEffect(() => {
        const findOneEpisode = async () => {
            const response = await axios.get(`https://api.airtable.com/v0/appRx1trr4DFayGsm/Table%201/${id}`, 
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                  },
            })
            setEpisode(response.data.fields)
            setLoaded(true)
        }
        findOneEpisode()
    }, [id])
    

      if(!isLoaded){
        return <h4>Loading...</h4>
    }

    return(
        <Layout>
            <h1>Single Episode Page</h1>
            <h2>{episode.title}</h2>
            <iframe 
                src={episode.video_link} 
                height='300' 
                width="300" 
                frameborder='0' 
                allowFullScreen='allowfullscreen'
                controls='1'
                ></iframe>
        </Layout>
    )
}

export default EpisodeDetail