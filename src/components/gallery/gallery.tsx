import './gallery.css'
import {IPhotosGallery, IWinnerData} from "../../interfaces/winnerData.ts";
import { Typography } from '@mui/material';

export default function Gallery({photoGallery} : IWinnerData) {
    return (
        <>
            <Typography variant="h4" color="primary" className="center-gallery">
                Галерея
            </Typography>
            <div className="container-gallery">
                <div className="container-slider-wrapper">
                    <div className="slider">
                        {photoGallery.map((photo: IPhotosGallery, index: number) => (
                            <img id={`slide-${index + 1}`} key={index} src={photo.photoGallery} alt={`photo-${index + 1}`} />
                        ))}
                    </div>
                    <div className="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                    </div>
                </div>
            </div>
        </>
    )
}