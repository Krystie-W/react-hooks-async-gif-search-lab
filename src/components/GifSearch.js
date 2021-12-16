import React, { useState } from "react";


function GifSearch( { submitHandler } ) {
    const [searchInput, setSearchInput] = useState('');

    function updateSearchInput (event) {
        setSearchInput(event.target.value)
    }

    function sendSearchInput(event) {
        event.preventDefault();
        submitHandler(searchInput);
        setSearchInput('');
    }

  return (
        <div className="col-sm-3">
            <form onSubmit={sendSearchInput} className="form-group">
                <label htmlFor="search">Enter a search term:</label>
                <input onChange={updateSearchInput} value={searchInput} type="text" name="search" className="form-control-lg form-control"></input>
                <button className="btn btn-success">Find GIFs</button>
            </form>
        </div>
      

  );
}

export default GifSearch;
