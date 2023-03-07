import { useLocation } from "react-router-dom";
import '../style/style.css'
import { useNavigate } from 'react-router-dom'
const GalleryDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate('/')}className='back_to_home'>Back to home</button>
            <div>
            </div>
            <div className='image_details'>
                <div className="image_description">
                    <div>{`Id: ${state.id}`}</div>
                    <div>{`Name: ${state.title}`}</div>
                    <div>{`Album Id: ${state.albumId}`}</div>
                </div>
                <img src={state.url} alt="Loading..."></img>
            </div>
        </>
    )
}
export default GalleryDetails;