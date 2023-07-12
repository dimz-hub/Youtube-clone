import axios from 'axios'


console.log(process.env.REACT_APP_RAPID_API_KEY)


const baseUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: baseUrl,
    params: {
    maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }     

  export async function fetchFromApi (url) {
    const data = await axios.get(`${baseUrl}/${url}`, options)
    return data
  }






