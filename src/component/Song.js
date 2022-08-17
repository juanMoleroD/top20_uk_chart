import React from "react";

const Song = ({song, id}) => {
    return(
        <div className="song">
            <img src={song["im:image"][2].label} alt="cover"/>
            <div>
                <h2>No. {id + 1 }</h2>
                <h4>{song["im:name"].label} </h4>
                <h4>{song["im:artist"].label}</h4>
                <audio controls>
                    <source src={song["link"][1].attributes.href} type={song.link[1].attributes.type}/>
                </audio>
            </div>
        </div>
    )
}

export default Song;