import './App.css';
import {TopNavbar} from "./components/headers/TopNavbar";
import {Home} from "./components/routes/Home";
import "./scss/_global.scss";
import {Route, Routes} from "react-router-dom";
import {MyZone} from "./components/routes/MyZone";
import {ZoneContent} from "./components/layouts/zone/ZoneContent";
import {Watch} from "./components/layouts/zone/watch/Watch";
import {Server} from "./components/layouts/zone/server/Server"
import {useSocket} from "./components/sockets/socket";
import {io} from 'socket.io-client';
import {useEffect} from "react";

function App() {

    return (
        <div className="App">
            <TopNavbar/>
            <Routes>
                <Route path="/">
                    <Route path="home" element={<Home/>}>

                    </Route>
                    <Route path="myzone" element={<MyZone/>}>
                        <Route path="watch" element={<Watch/>}></Route>
                        <Route path="server" element={<Server/>}></Route>
                    </Route>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
