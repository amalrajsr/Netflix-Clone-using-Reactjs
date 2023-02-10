import {API_KEY} from './components/Constants/constants'

export const  NETFLIX_ORIGINALS=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const  ACTIONS=`discover/movie?api_key=${API_KEY}&with_genres=28`
export const TRENDING=`trending/all/week?api_key=${API_KEY}&language=en-US`

export const ComedyMovies= `discover/movie?api_key=${API_KEY}&with_genres=35`
export const HorrorMovies= `discover/movie?api_key=${API_KEY}&with_genres=27`
export const RomanceMovies= `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Documentaries= `discover/movie?api_key=${API_KEY}&with_genres=99`
export const Upcoming= `upcoming?api_key=${API_KEY}&language=en-US&page=1`



