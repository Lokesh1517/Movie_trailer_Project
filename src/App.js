
import './App.css';
import Row from './Row';
import Navbar from './Navbar';
import Banner from './Banner';
import request from './request';
function App() {
  return (
    
    <div className="App">
      {/*Header*/}
      <Navbar />
      {/*Banner */}
      <Banner />
      <Row key = '1' title = "A NetFlix Originals" fetchurl = {request.fetchNetflixOriginals}/>
      <Row key = '2' title = "Top Trending" fetchurl = {request.fetchTrending}/>
      <Row key = '3' title = "Action Movies" fetchurl = {request.fetchActionMovies}/>
      <Row key = '4' title = "Comedy Movies" fetchurl = {request.fetchComedyMovies}/>
      <Row key = '5' title = "Horror Movies" fetchurl = {request.fetchHorrorMovies}/>
      <Row key = '6' title = "Documentaries" fetchurl = {request.fetchDocumentaries}/>
      <Row key = '7' title = "Romantic movies" fetchurl = {request.fetchRomanceMovies}/>

    </div>
  );
}

export default App;

//www.NetFlic-Clone-960277.com
//API-Key -> 3ce42ce0bfcfe0a2ae456f49bc1f14b6