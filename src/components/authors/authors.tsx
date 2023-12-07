import './authors.css'
import Author from '../author/author.tsx';
import {useTranslation} from "react-i18next";
import {IAuthor} from "../../interfaces/author.ts";



export default function Authors() {
    const {t} = useTranslation();
    const people : IAuthor[] = t("people", {returnObjects: true});
    return (
        <div className={"authorsClass"}>
            <h1>{t('authorsClass')}</h1>
            <div className={"authors"}>
                {people.map((person, index) => (
                    <Author key={index} {...person}/>
                ))}
            </div>
        </div>
    )
}