import React, {useState, useEffect} from "react";
import SongList from "../component/SongList";
import GenreSelector from "../component/GenreSelector";

const Chart = () => {

    const [songs, setSongs] = useState([]);
    const [genre, setGenre] = useState('all') //all is default
    const genreUrlMap = {
        all: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json",
        rock: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json",
        dance: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json",
        country: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"
    }

    useEffect( () => getSongs(), [genre])
    
    const getSongs = () => {
        fetch(genreUrlMap[genre])
            .catch(error => console.log(error))
            .then(response => response.json())
            .then(data => {
                setSongs(data.feed.entry);})
            .catch(error => console.log("error from API: " + error))
    }
    
    return(
        <>
            <nav>
                <h1 id="main-header">Top 20 UK Chart</h1>
            </nav>
            <section id="genre-bar">
                <h2>Select genre: </h2>
                <GenreSelector setGenre={setGenre}/>
            </section>
            <main id="song-container">
                <SongList songs={songs}/>
            </main>
        </>
    )
}

export default Chart;