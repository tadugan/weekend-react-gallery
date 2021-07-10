import React from 'react';
import './App.css';

// Components
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <main>
          <GalleryList />
        </main>
      </div>
    );
}

export default App;
