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
          setGalleryArray(response.data);
        })
        .catch();
    }

    // Function to make an Axios PUT request to add a like to a photo
    const addLike = (photoId) => {
      Axios({
        method: 'PUT',
        url: `/gallery/like/${photoId}`,
        data: {/*No body is necessary. Like will be added based on photoId*/}
        })
        .then(response => {
          console.log('Like successfully added to photoId:', photoId);
          fetchGallery();
        })
        .catch(error => {
          console.log('Error adding like. Error:', error);
        });
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <main>
          <GalleryList galleryArray={galleryArray} addLike={addLike}/>
        </main>
      </div>
    );
}

export default App;
