import './infoMapsYoutube.css'
import {IWinnerData} from "../../interfaces/winnerData.ts";
import {Typography} from "@mui/material";

export default function InfoMapsYoutube({youtube, maps} : IWinnerData) {
    return (
        <div className="container-info">
            <div className="component">
                <Typography variant="h4" color="primary">Youtube</Typography>
                <iframe
                    width="560"
                    height="315"
                    src={youtube}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
            <div className="component">
                <Typography variant="h4" color="primary">Maps</Typography>
                <iframe
                    width="100%"
                    height="315"
                    src={maps}
                    title="Google Maps"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}