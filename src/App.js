import './App.css'
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { NETFLIX_ORIGINALS,ACTIONS,TRENDING,ComedyMovies,HorrorMovies,RomanceMovies} from './Urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={NETFLIX_ORIGINALS} title='Netflix Originals' class='poster' />
      <RowPost url={TRENDING}  title='Trending'  class='poster-small'   />
      <RowPost url={ACTIONS} title='Actions'  class='poster-small'    />
      <RowPost url={ComedyMovies} title='Comedy' class='poster-small'    />
      <RowPost url={HorrorMovies} title='Horror' class='poster-small'    />
      <RowPost url={RomanceMovies} title='Romance' class='poster-small'  />



    </div>
  );
}

export default App;
