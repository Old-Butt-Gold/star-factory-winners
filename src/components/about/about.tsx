import './about.css'
import BlockText from "../blockText/blockText.tsx";
import PhotoCards from "../photoCards/photoCards.tsx";
import {IMAGES} from "../../interfaces/photoCards.ts";

export default function About() {
    return (
        <div className={"aboutClass"}>
            <BlockText color={"black"}
                       title={"О чем данное телешоу?"}
                       text={"\"Фабрика звезд\" – российское телешоу, запущенное в конце 2002 года, являющееся талант-шоу для молодых артистов. Участники проходят отборочные этапы, обучаются под руководством тренеров, живут в общем доме. Шоу ориентировано на разнообразные музыкальные жанры. Каждую неделю проводятся голосования, и участники с наименьшей поддержкой покидают проект. \"Фабрика звезд\" стала стартовой точкой для многих успешных музыкантов."}
            />
            <PhotoCards photos={IMAGES}/>
        </div>
    )
}