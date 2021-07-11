import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem(props) {
    const [ displayDescription, setDisplayDescription ] = useState(false);

    const toggleImage = () => {
        setDisplayDescription(!displayDescription);
    }

    return (  
        <div className="item-flex-child">
            {displayDescription ? <p className="item-desc" onClick={toggleImage} width="200px" height="200px">{props.description}</p> : <img className="item-img" onClick={toggleImage} src={props.path} alt="art"/>}
                <div>
                    <p className="item-like-count" >likes: {props.likes}</p>
                    <button className="item-like-btn" onClick={() => props.addLike(props.id)}><img className="item-heart-icon" src="images/heart_icon.png" alt="Heart" /></button>
                </div>
        </div>

            
        
);
}

export default GalleryItem;