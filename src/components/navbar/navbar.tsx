import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import { useState } from "react";
import i18next from 'i18next'
import {useTranslation} from "react-i18next";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();
    const toggleLanguage = () => {
        i18next.changeLanguage(i18next.language === 'en' ? 'ru' : 'en');
    };

    return (
        <nav>
            <div className="main">
                <Link to={"star/"} className={"title"}>
                    {t('main.title')}
                </Link>
                <div onClick={toggleLanguage} className={"title"}>
                    RU/EN
                </div>
            </div>
            <div className={"menu"} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to={"star/about"}>
                        {t('main.about')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"star/winners"}>
                        {t('main.winners')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"star/contacts"}>
                        {t('main.contacts')}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}