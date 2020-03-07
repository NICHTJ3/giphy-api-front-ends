import React, { useState } from "react";
import "./App.scss";
import API from "./API";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState([]);
  const submit = e => {
    e.preventDefault();
    setLoading(true);
    setImages([]);
    API.search(searchTerm).then(images => {
      setImages(images);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <h1>Giphy search app</h1>
      <form>
        <label htmlFor="searchTerm">Search Term</label>
        <div className="row">
          <input
            className="u-full-width"
            type="text"
            id="searchTerm"
            name="searchTerm"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button type="submit" onClick={submit}>
            Search
          </button>
        </div>
      </form>
      {loading && (
        <img
          src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif"
          alt="loading"
        />
      )}
      <section className="images">
        {images.map(image => (
          <img
            key={image.id}
            src={image.images.downsized_large.url}
            alt={image.name}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
