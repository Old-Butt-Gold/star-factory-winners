import './about.css'
import BlockText from "../blockText/blockText.tsx";
import PhotoCards from "../photoCards/photoCards.tsx";
import {IMAGES} from "../../interfaces/photoCards.ts";
import {useTranslation} from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <div className={"aboutClass"}>
            <BlockText color={"black"}
                       title={t('about')}
                       text={t('about-info')}
            />
            <PhotoCards photos={IMAGES}/>
        </div>
    )
}