import React from "react";
import Song from "./Song";

const SongList = ({songs}) => {

    const songNodes = songs.map( (song, index) => {
        return <Song song={song} key={index} id={index} />
    });

    return (
        <>
            {songNodes}
        </>
    )
}

export default SongList;