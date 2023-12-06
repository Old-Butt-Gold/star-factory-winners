import './photoCards.css'
import { IPhotoCards } from "../../interfaces/photoCards.ts";

export default function PhotoCards({ photos } : IPhotoCards) {
    return (
        <div className="photo-cards-container">
            {photos.map((photo, index) => {
                return <div key={photo} className="photo-card">
                        <img src={`${photo}`} alt={`Photo ${index + 1}`}/>
                    </div>
                }
            )
        }

        </div>
    );
}