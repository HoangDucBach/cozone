import {CreateButton} from "./CreateButton";

export function JoinCreateButton(props) {
    return (
        <div className={"join-create-button__layout"}>
            <button className="short-zone-button__join">
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="76" viewBox="0 0 75 76" fill="none">
                    <ellipse cx="37.4203" cy="37.9473" rx="36.7102" ry="37.322" fill={props.color} fillOpacity="0.5"/>
                    <path
                        d="M54.683 35.8435C56.2789 36.7921 56.2789 39.1027 54.683 40.0512L30.7168 54.295C29.0855 55.2646 27.0191 54.0889 27.0191 52.1912L27.0191 23.7036C27.0191 21.8058 29.0855 20.6301 30.7168 21.5997L54.683 35.8435Z"
                        fill={props.color}/>
                </svg>
            </button>
            <CreateButton/>
        </div>
    )
}