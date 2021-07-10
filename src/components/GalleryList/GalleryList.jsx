import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList(props) {
    return (
        <>
            <h2>Some GalleryList Content</h2>
                <section>
                    {props.galleryArray.map(item =>
                        <GalleryItem key={item.id} path={item.path} description={item.description} likes={item.likes}/>
                    )}
                </section>        
        </>
    );
}

export default GalleryList;