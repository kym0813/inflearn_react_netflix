import requests from "./api/requests";
import './App.css';
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";


function App() {
  return (
    <div className="App">
        <Nav />
        <Banner />

        <Row
            title="NETFLIX ORIGINALS"
            id="No"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />

        <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
        <Row title="TOp Rated" id="TR" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Mobies" id="AM" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />

        <Footer />
    </div>
  );
}

export default App;
