import React from 'react'
import { Stack } from '@mui/material'
import {Link} from 'react-router-dom'
import { logo } from '../utils/constant'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
  <div className='flex justify-between items-center p-3 sticky top-0 '>

<Link  to='/'  className='flex items-center'>
<img src={logo} alt='logo' className='h-[45px]'/>
  
</Link>
<SearchBar />
  </div>
  )
}
