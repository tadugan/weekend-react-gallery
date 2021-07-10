import { useState } from 'react';

function GalleryItem(props) {
    const [ displayDescription, setDisplayDescription ] = useState(false);

    const toggleImage = () => {
        setDisplayDescription(!displayDescription);
    }

    return ( displayDescription ? (
            <div>
                <p onClick={toggleImage} width="200px" height="200px">{props.description}</p>
                <button onClick={() => props.addLike(props.id)}>Like</button>
                <p>likes: {props.likes}</p>
            </div>
        ) : (
            <div>
                <img onClick={toggleImage} src={props.path} alt="art" width="200px" height="200px"/>
                <button onClick={() => props.addLike(props.id)}>Like</button>
                <p>likes: {props.likes}</p>
            </div>
        )
    );
}

export default GalleryItem;