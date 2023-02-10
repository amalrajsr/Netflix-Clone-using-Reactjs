import './Banner.css'
import { useEffect, useState } from 'react'
import axios  from '../../axios'
import { API_KEY,IMAGE_URL } from '../Constants/constants'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      let movieId=Math.floor((Math. random()*20)); 
      setMovie(res.data.results[movieId])
      
    })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?IMAGE_URL+movie.backdrop_path:''})`}} >
        <div className='content'>
            <h1 className='title'>{movie? movie.title||movie.name :''}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:''}</h1>
        </div>
        <div className="fade-bottom">

        </div>
    </div>
  )
}

export default Banner