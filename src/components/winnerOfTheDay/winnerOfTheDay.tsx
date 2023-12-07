import { IWinnerData} from "../../interfaces/winnerData.ts";
import "./winnerOfTheDay.css";
import WinnerCard from "../winnerCard/winnerCard.tsx";
import {Card} from "@mui/material";
import {useTranslation} from "react-i18next";

function getRandomId(winners: IWinnerData[]) {
    return Math.floor(Math.random() * winners.length) + 1;
}

export default function WinnerOfTheDay() {
    const {t} = useTranslation();
    const day = new Date().getDay();

    const winners: IWinnerData[] = t('winners', {returnObjects: true});

    let winnerId = Number(localStorage.getItem("winnerId")) || getRandomId(winners);

    if (day !== Number(localStorage.getItem("oldData"))) {
        winnerId = getRandomId(winners);
        localStorage.setItem("winnerId", String(winnerId));
        localStorage.setItem("oldData", String(day));
    }

    const winner = winners.find((winner: IWinnerData) => winner.id === winnerId);

    return (
        <div className="dayWinnerContainer">
            <div className="dayWinnerTitle">{t('dayWinnerTitle')}</div>
            <div className="dayWinner">
                <Card className="winnerClass" sx={{ width: 0.7 }}>
                    <WinnerCard key={winner!.id} {...winner!}/>
                </Card>

            </div>
        </div>
    );
}