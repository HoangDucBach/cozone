import "./my-zone.scss";
import {ShortZone} from "../ui/zone/ShortZone";
import {ShortTogether} from "../ui/zone/ShortTogether";
import {ZoneNavbar} from "../headers/ZoneNavbar";
import {ChatBox} from "../layouts/zone/chat/ChatBox";
import {ZoneContent} from "../layouts/zone/ZoneContent";
import {Outlet, Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {Watch} from "../layouts/zone/watch/Watch";

function Zone() {
    return (
        <div className={"zone"}>
            <ShortZone
                key={"chat-zone"}
                title={"Chat Zone"}
                content={"Create your chat zone, chat to your friend, send your video, music or every thing !"}
                color={"#F4365E"}
            />
            <ShortZone
                key={"draw-zone"}
                title={"Draw Zone"}
                content={"Become a skilled artist, indulge in drawing everything with your friends!"}
                color={"#FF7612"}
            />
            <ShortZone
                key={"doc-zone"}
                title={"Doc Zone"}
                content={"Become a skilled artist, indulge in drawing everything with your friends!"}
                color={"#0038FF"}
            />
            <ShortTogether
                title={"Zone Watch together"}
                content={"Enjoy relaxing and fun moments together on YouTube in CoZone!"}
                color={"#FF7612"}
                imgPath={"./images/LOL.png"}
            />
        </div>
    );
}

export function MyZone() {
    return (
        <main className="my-zone">
            <ZoneNavbar/>
            {/*<div className="my-zone-tagline-layout">*/}
            {/*    <div className="my-zone-tagline-heading-1">*/}
            {/*        Activity Zone*/}
            {/*    </div>*/}
            {/*    <div className="my-zone-tagline-heading-2">*/}
            {/*        Create or join <span id="span-1">team</span>*/}
            {/*    </div>*/}
            {/*    <div className="my-zone-tagline-content">*/}
            {/*        <span id="span-1">Your activity zone</span>,everything is in your hands. Explore, experience, and*/}
            {/*        create with friends, and even everyone on the server!*/}
            {/*    </div>*/}
            {/*    <div className="my-zone-join-layout">*/}
            {/*        <button className="my-zone-join-button">Join</button>*/}
            {/*        <div className="my-zone-join-button__icon">*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">*/}
            {/*                <path fill-rule="evenodd" clip-rule="evenodd"*/}
            {/*                      d="M22 36C29.1797 36 35 30.1797 35 23C35 15.8203 29.1797 10 22 10C14.8203 10 9 15.8203 9 23C9 30.1797 14.8203 36 22 36ZM28.1645 25.0597C28.9803 24.5887 28.9803 23.4113 28.1645 22.9403L19.8355 18.1315C19.0197 17.6605 18 18.2493 18 19.1913L18 28.8087C18 29.7507 19.0197 30.3395 19.8355 29.8685L28.1645 25.0597Z"*/}
            {/*                      fill="white"/>*/}
            {/*                <path*/}
            {/*                    d="M44.2623 22.5C44.2623 34.9264 34.3538 45 22.1311 45C9.90845 45 0 34.9264 0 22.5C0 10.0736 9.90845 0 22.1311 0C34.3538 0 44.2623 10.0736 44.2623 22.5Z"*/}
            {/*                    fill="#FFFDFC" fill-opacity="0.1"/>*/}
            {/*            </svg>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="my-zone__effect-gradien__bottom"></div>*/}
            {/*<div className="my-zone__effect-gradient_middle"></div>*/}
            <Outlet/>
            <ZoneContent/>
            <ChatBox/>
        </main>
    );
}