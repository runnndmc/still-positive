import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const EpisodeDetail = () => {


    return(
        <>
            <h1>Single Episode Page</h1>
            <h2>{episode.fields.title}</h2>
        </>
    )
}

export default EpisodeDetail