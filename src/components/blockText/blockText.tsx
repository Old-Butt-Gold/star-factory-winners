import './blockTest.css'
import { ITitleAbout } from '../../interfaces/titleAbout.ts'

export default function BlockText(props: ITitleAbout) {
    return (
        <div className={"blockText"}>
            <div className={"title " + props.color}>
                {props.title}
            </div>
            <div className={"text"}>
                {props.text}
            </div>
        </div>

    )
}