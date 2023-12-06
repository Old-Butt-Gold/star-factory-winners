import './timeLine.css'
import { IWinnerData } from "../../interfaces/winnerData.ts";
import { Chrono } from "react-chrono"

export default function TimeLine({ items } : IWinnerData) {
    return (
        <div className="timeLineDiv">
            <Chrono
            items={items}
            mode="HORIZONTAL"
            allowDynamicUpdate={true}
            slideShow={true}
            theme={{ primary: "blue", secondary: "pink", cardBgColor: "lightgray"}}/>
        </div>
    )
}