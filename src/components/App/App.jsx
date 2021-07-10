import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


// Components
import GalleryList from '../GalleryList/GalleryList.jsx';
import Axios from 'axios';

function App() {

    // useState variables
    const [ galleryArray, setGalleryArray] = useState([]);

    // useEffect to fetch galley art on page load
    useEffect(() => {
      fetchGallery();
    }, []);

    // Function to make an Axios GET request to retrieve contents of gallery.data
    const fetchGallery = () => {
      Axios({
        method: 'GET',
        url: '/gallery'
        })
        .then(response => {
          setGalleryArray(response);
        })
        .catch();
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <main>
          <GalleryList galleryArray={galleryArray}/>
        </main>
      </div>
    );
}

export default App;
