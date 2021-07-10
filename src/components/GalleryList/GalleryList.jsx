import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';

function GalleryList(props) {
    return (
        <>
            <h2>Some GalleryList Content</h2>
                <section className="list-flex-container">
                    {props.galleryArray.map(item =>
                        <GalleryItem 
                            key={item.id} 
                            id={item.id}
                            path={item.path} 
                            description={item.description} 
                            likes={item.likes}
                            addLike={props.addLike}
                        />
                    )}
                </section>        
        </>
    );
}

export default GalleryList;