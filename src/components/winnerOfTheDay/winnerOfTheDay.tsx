import { IWinnerData, winners } from "../../interfaces/winnerData.ts";
import "./winnerOfTheDay.css";
import WinnerCard from "../winnerCard/winnerCard.tsx";
import {Card} from "@mui/material";

function getRandomId(winners: IWinnerData[]) {
    return Math.floor(Math.random() * winners.length) + 1;
}

export default function WinnerOfTheDay() {
    const day = new Date().getDay();
    let winnerId = Number(localStorage.getItem("winnerId")) || getRandomId(winners);

    if (day !== Number(localStorage.getItem("oldData"))) {
        winnerId = getRandomId(winners);
        localStorage.setItem("winnerId", String(winnerId));
        localStorage.setItem("oldData", String(day));
    }

    const winner = winners.find((winner: IWinnerData) => winner.id === winnerId);

    return (
        <div className="dayWinnerContainer">
            <div className="dayWinnerTitle">Победитель дня</div>
            <div className="dayWinner">
                <Card className="winnerClass" sx={{ width: 0.7 }}>
                    <WinnerCard key={winner!.id} {...winner!}/>
                </Card>

            </div>
        </div>
    );
}