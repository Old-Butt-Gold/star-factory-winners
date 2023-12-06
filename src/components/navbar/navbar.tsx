import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="main">
                <Link to={"star/"} className={"title"}>
                    Главная
                </Link>
                <div className={"title"}>
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
                        О шоу
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"star/winners"}>
                        Победители
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"star/contacts"}>
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}