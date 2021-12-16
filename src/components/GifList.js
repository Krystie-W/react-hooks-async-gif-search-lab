

function GifList( { gifs } ) {

    const gifListItems = gifs.map((gif) => (
        <li key={gif.id} className="list-group-item"><img src={gif.images.original.url}></img></li>
    ))

  return (
        <div className="col-sm-9">
            <ul className="list-group list-group-flush">
                {gifListItems}
            </ul>
            
        </div>
      
    
  );
}

export default GifList;
