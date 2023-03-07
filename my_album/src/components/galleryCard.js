import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/style.css'
const GalleryCard = ({ gallery }) => {
    const navigate = useNavigate();
    const imageDetails = () => {
        navigate('/details', { state: gallery })
    }
    return (
        <>
            <div className='image_container' onClick={imageDetails}>
                <div className='image'>
                    <img src={gallery.thumbnailUrl} alt="Loading..."></img>
                </div>
                <div className='image_title'>{gallery.title}</div>
            </div>
        </>
    )
}
export default GalleryCard;