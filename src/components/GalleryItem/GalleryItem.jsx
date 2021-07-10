import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem(props) {
    const [ displayDescription, setDisplayDescription ] = useState(false);

    const toggleImage = () => {
        setDisplayDescription(!displayDescription);
    }

    return ( displayDescription ? (
            <div>
                <p className="item-desc" onClick={toggleImage} width="200px" height="200px">{props.description}</p>
                <button onClick={() => props.addLike(props.id)}>Like</button>
                <p>likes: {props.likes}</p>
            </div>
            ) : (
            <div>
                <img className="item-img" onClick={toggleImage} src={props.path} alt="art"/>
                <button onClick={() => props.addLike(props.id)}>Like</button>
                <p>likes: {props.likes}</p>
            </div>
            )
    );
}

export default GalleryItem;