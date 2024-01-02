import './zone-content.scss';
import {Message} from "./chat/Message";
import {Outlet} from "react-router-dom";

export function ZoneContent(iterable) {
    const startCodePoint = 128512;
    const endCodePoint = 128567;
    const emojiUnicodeList = Array.from(
        {length: endCodePoint - startCodePoint + 1},
        (_, index) => String.fromCodePoint(startCodePoint + index)
    );

    return (
        <div className="zone-content">
            {/*{*/}
            {/*    emojiUnicodeList.map((val) =>(*/}
            {/*        <div>{val}</div>*/}
            {/*    ))*/}
            {/*}*/}
            <Outlet/>
        </div>
    );
}