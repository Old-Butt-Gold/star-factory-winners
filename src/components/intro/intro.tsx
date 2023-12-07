import './intro.css'
import { useTranslation } from "react-i18next";

export default function Intro() {
    const { t } = useTranslation();
    return (
        <div className="intro">
            <div className="intro_block">
                <div className="intro_welcome">{t('welcome')}</div>
            </div>
        </div>
    )
}