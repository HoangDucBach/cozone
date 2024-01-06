import "./my-zone.scss";
import {ZoneNavbar} from "../headers/ZoneNavbar";
import {ChatBox} from "../layouts/zone/chat/ChatBox";
import {ZoneContent} from "../layouts/zone/ZoneContent";

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
            <ZoneContent/>
            <ChatBox/>
        </main>
    );
}