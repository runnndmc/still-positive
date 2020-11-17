import React from 'react'
import { Link } from 'react-router-dom'

const NewestEp = () => {

    return(
        <h3>This is the newest <Link to={`/episode/${id}`}>episode!</Link></h3>
    )
}

export default NewestEp