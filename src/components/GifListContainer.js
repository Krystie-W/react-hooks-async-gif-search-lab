import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";


function GifListContainer() {
    const [gifData, setGifData] = useState([]);

    const getData = async (searchInput) => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=dc6zaTOxFJmzC&rating=g`);
        const data = await response.json();
        return setGifData(data.data.slice(0, 3));
    }

  return (
    <div className="container">
        <div className="row">
            <GifList gifs={gifData}/>
            <GifSearch submitHandler={getData}/>         
      </div>
    </div>
  );
}

export default GifListContainer;
