function GalleryItem(props) {
    return (
        <>
            <div>
                <img src={props.path} alt="art" />
                <p>{props.description}</p>
                <p>likes: {props.likes}</p>

            </div>
        </>
    );
}

export default GalleryItem;