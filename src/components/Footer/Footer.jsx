import { useState } from 'react';
import './Footer.css';

function Footer({ addNewImage }) {
    const [ newImagePath, setNewImagePath ] = useState('');
    const [ newImageDescription, setNewImageDescription] = useState('');

    const handleSubmit = (event) => {      
        // prevent submit from reloading the page
        event.preventDefault();

        // Validate form inputs
        if (!newImagePath || !newImageDescription) {
            alert('please fill all input fields.');
            return;
        }

        // create a new image object
        const newImage = {
            path: newImagePath,
            description: newImageDescription
        }
        // Makes POST request to add this new image to the database
        addNewImage(newImage);

        // clear form inputs
        setNewImagePath('');
        setNewImageDescription('');
    }

    return (
        <>
            <h3>Add a new Image to the gallery!</h3>
            <form className="footer-form">
                <input className="footer-path-input" value={newImagePath} onChange={(event) => setNewImagePath(event.target.value)} type="text" name="path" maxLength="250" placeholder="Image URL"/>
                <br />
                <input className="footer-desc-input" value={newImageDescription} onChange={(event) => setNewImageDescription(event.target.value)} type="text" name="description" maxLength="250" placeholder="Description" textarea="multiline"/>
                <br />
                <button type="submit" onClick={handleSubmit}>Add Image</button>
            </form>
        </>
    );
}

export default Footer;