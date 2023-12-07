import {useParams} from "react-router-dom";
import {IWinnerData} from '../../interfaces/winnerData.ts'
import WinnerPhotoNameBlock from "../../components/winnerPhotoNameBlock/winnerPhotoNameBlock.tsx";
import TimeLine from "../../components/timeLine/timeLine.tsx";
import './WinnerPage.css'
import Gallery from "../../components/gallery/gallery.tsx";
import InfoMapsYoutube from "../../components/infoMapsYoutube/infoMapsYoutube.tsx";
import {useTranslation} from "react-i18next";

export default function WinnerPage() {
    const {t} = useTranslation();
    const { id } = useParams();
    const winners: IWinnerData[] = t('winners', {returnObjects: true});
    const winner = winners.find((winner : IWinnerData) => winner.id === Number(id!));

    return (
        <>
            <div className="info-block">
                <WinnerPhotoNameBlock {...winner!} />
                <TimeLine {...winner!}/>
            </div>
            <InfoMapsYoutube {...winner!}/>
            <Gallery {...winner!}/>
        </>
    )
}