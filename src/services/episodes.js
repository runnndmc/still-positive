import axios from 'axios'

const apiUrl=`https://api.airtable.com/v0/appRx1trr4DFayGsm/Table%201`

export const getEpisodes = async () => {
    try{
        const response = await axios.get(
            `${apiUrl}/?view=Grid%20view`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            }
        )
        const episodes = response.data.records
        return episodes
    } catch (error){
        throw error
    }
}

export const getFirstEpisode = async () => {
    try{
        const response = await axios.get(
            `${apiUrl}?view=Grid%20view`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            }
        )
        const episode = response.data.records.shift()
        return episode
    } catch (error){
        throw error
    }
}

export const getEpisode = async (id) => {
    try{
        const response = await axios.get(
            `${apiUrl}/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            }
        )
        const episode = response.data.fields
        return episode
    } catch (error){
        throw error
    }
}