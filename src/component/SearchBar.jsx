import React, {useState} from 'react'
import { IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'


export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if(searchTerm) {

      navigate(`/search/${searchTerm}`)
      
    }
    setSearchTerm('')

  }
 

  return (
   <form onSubmit={handleSubmit} className='bg-white text-black rounded-[20px] w-[35%] flex justify-between'>
 <input className='search-bar rounded-[20px] w-[100%] focus:outline-none px-5'
         placeholder = 'Search...'
         onChange={(e) => {setSearchTerm(e.target.value)}}
         />
         <IconButton type='submit'>
         <Search className='text-red-500'/>
         </IconButton>

   </form>
   

  )
}
