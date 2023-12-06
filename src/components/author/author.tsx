import './author.css'
import {IAuthor} from "../../interfaces/author.ts";

export default function Author( {name, photoUrl, githubUrl, githubPhoto} : IAuthor) {
    return (
        <div className="person-card">
            <img src={photoUrl} alt={name} />
            <div className="overlay">
                <div className="info">
                    <p>{name}</p>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <img src={githubPhoto} alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
}