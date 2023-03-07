import React, { useState } from 'react';
import axios from 'axios';
import GalleryCard from '../components/galleryCard';
const Gallery = () => {
    const [gallery, setGallery] = useState([])
    const [search, setSearch] = useState("")
    const getimage = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setGallery(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useState(() => {
        getimage();
    }, []);
    return (
        <>
            <div className='gallery_card'>
                <div className='search'>
                    <input type="search" className='search_box' placeholder='Search'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {
                    gallery.filter(items => items.title.toLowerCase().includes(search.toLowerCase())
                    ).map((items) => (
                        <GalleryCard gallery={items} />
                    ))
                }
            </div>
        </>
    )
}
export default Gallery;