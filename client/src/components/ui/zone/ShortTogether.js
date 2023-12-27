import {JoinCreateButton} from "../buttons/JoinCreateButton";
import "./zone-ui.scss";
export function ShortTogether(props) {
    return (
        <div className={"short-together"}>
            <div className="short-together-tagline__layout">
                <div className="short-together-tagline__heading">
                    {props.title}
                </div>
                <div className="short-together-tagline__content">
                    {props.content}
                </div>
                <JoinCreateButton className={"short-together"} color={props.color}/>
            </div>
            <img className={"short-together-image"} src={props.imgPath} alt="image-error"/>
        </div>
    )
}