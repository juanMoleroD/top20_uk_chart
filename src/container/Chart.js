import React, {useState, useEffect} from "react";
import SongList from "../component/SongList";

const Chart = () => {

    const [songs, setSongs] = useState([]);

    useEffect( () => getSongs() , [])
    
    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
                        .then(response => response.json())
                        .catch(error => console.log(error)) // capture the details if received.
                        .then(data => {
                            // console.log(data.feed.entry)
                            setSongs(data.feed.entry);
                        })
                        .catch(error => console.log("error from API: " + error))
    }
    
    return(
        <>
            <h1 id="main-header">Top 20 UK Chart</h1>
            <SongList songs={songs}/>
        </>
    )
}

export default Chart;