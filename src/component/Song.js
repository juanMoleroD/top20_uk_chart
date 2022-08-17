import React from "react";

const Song = ({song, id}) => {
    return(
        <div className="song">
            <img src={song["im:image"][2].label} alt="cover"/>
            <div>
                <p> No: {id + 1 } - {song.title.label} </p>
                <audio controls>
                    <source src={song["link"][1].attributes.href} type={song.link[1].attributes.type}/>
                </audio>
            </div>
        </div>
    )
}

export default Song;