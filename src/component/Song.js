import React from "react";

const Song = ({song, id}) => {
    return(
        <div className="song">
            <img src={song["im:image"][2].label} alt="cover"/>
            <span>
                <p> No: {id + 1 } - {song.title.label} </p>
            </span> 
        </div>
    )
}

export default Song;