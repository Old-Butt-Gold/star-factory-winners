import './footer.css';
import {useTranslation} from "react-i18next";

export default function Footer() {
    const {t} = useTranslation();
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <div className="FooterContainer">
            <div className="FooterContent">
                <p>&copy; {t('footer')}</p>
                <div className="SocialIcons">
                    <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-telegram"></i>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-vk"></i>
                    </a>
                    <a href="#" onClick={handleScrollToTop} rel="noopener noreferrer">
                        <i className="fa-solid fa-arrow-up"></i>
                    </a>

                </div>
            </div>
        </div>
    );
}
