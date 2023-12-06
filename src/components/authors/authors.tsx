import './authors.css'
import {IAuthor} from "../../interfaces/author.ts";
import Author from '../author/author.tsx';

const people: IAuthor[] = [
    {
        name: 'Крутько Андрей',
        photoUrl: 'ссылка_на_фотографию1',
        githubUrl: 'https://github.com/Old-Butt-Gold',
        githubPhoto: 'https://avatars.githubusercontent.com/u/118840620?v=4'
    },
    {
        name: 'Заяц Александра',
        photoUrl: 'images/asya.jfif',
        githubUrl: 'https://github.com/AleksMind',
        githubPhoto: 'https://avatars.githubusercontent.com/u/126493685?v=4'
    },
    {
        name: 'Кумичова Дарья',
        photoUrl: 'images/dasha.jfif',
        githubUrl: 'https://github.com/Clown-is-me',
        githubPhoto: 'https://avatars.githubusercontent.com/u/63212757?v=4'
    },
    {
        name: 'Кирлица Дарья',
        photoUrl: 'images/dysya.jfif',
        githubUrl: 'https://github.com/luna34Sans',
        githubPhoto: 'https://avatars.githubusercontent.com/u/126656359?v=4'
    },
];

export default function Authors() {
    return (
        <div className={"authorsClass"}>
            <h1>Команда разработчиков</h1>
            <div className={"authors"}>
                {people.map((person, index) => (
                    <Author key={index} {...person}/>
                ))}
            </div>
        </div>
    )
}