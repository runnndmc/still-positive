import React from 'react'

const EpisodeCard = (props) => {
const {title, description, id} = props
    return (
        <>
            <h4>{id}</h4>
            <h2>{title}</h2>
            <p>{description}</p>
        </>
    )
}

export default EpisodeCard