import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import {ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail} from  './component'
import {Box} from '@mui/material'
import 'tailwindcss/tailwind.css'; 
function App() {
 
  return (
    < >
    <Box className = 'root bg-black text-white'>
     <Navbar />

  <Routes>
    <Route path='/' element = {<Feed />} />
    <Route path='/video/:id' element = {<VideoDetail/>} />
    <Route path='/channel/:id' element = {<ChannelDetail />} />
    <Route path='/search/:searchTerm' element = {<SearchFeed/>} />
  </Routes>

    </Box>
  
      
    </>
  );
}

export default App;
