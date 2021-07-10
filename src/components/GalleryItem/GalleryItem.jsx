function GalleryItem(props) {
    return (
        <>
            <div>
                <img src={props.path} alt="art" width="200px" height="200px"/>
                <button onClick={() => props.addLike(props.id)}>Like</button>
                <p>{props.description}</p>
                <p>likes: {props.likes}</p>
            </div>
        </>
    );
}

export default GalleryItem;