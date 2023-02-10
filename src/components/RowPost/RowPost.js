import { useEffect, useState } from 'react'
import { API_KEY,IMAGE_URL } from '../Constants/constants'
import Youtube from 'react-youtube'
import axios from '../../axios'
import ('./RowPost.css')

function RowPost(props) {
  const [row, setRow] = useState([])
  const [movieId,setMovieId]=useState(false)
  const opts = {
    height: '385',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    axios.get(props.url).then((res)=>{
     setRow(res.data.results)
    }).catch((err)=>{
      console.log('Network Error')
    })
  }, [props.url])
  
 const videoPlay= (id) =>{
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
    
    setMovieId(res.data.results[0].key)
  

  })
 }

  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
        {
         row.map((row)=>{
          return(
            <div >
           <img onClick={()=>videoPlay(row.id)} className= {props.class} src={`${IMAGE_URL+row.backdrop_path}`} alt="posters" /> 
           <span>{row.title||row.name}</span>
           </div>
          )
        })}
        </div>
       {movieId?<Youtube opts={opts} videoId={movieId} className='youtube'/>:null} 
     {movieId? <div className='cancel'><i className='fas fa-times fa-xl' onClick={()=>setMovieId(false)}></i></div>:null}
       
    </div>
  )
}

export default RowPost