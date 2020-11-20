import React from 'react'
import './episodeCard.css'

const EpisodeCard = (props) => {
const {title, description, img, id} = props

    return (
        <>
            <p className='ep-num'>{id}</p>
    <img className='thumbnail' src={img} alt='Still Positive logo. A cartoon reed-sternberg cell smiling with an outline of a person standing next to it and giving it the finger because - fuck illness'></img>
            <h3 className='ep-name'>{title}</h3>
            <p className='ep-description'>{description}</p>
        </>
    )
}

export default EpisodeCard