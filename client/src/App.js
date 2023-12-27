    import './App.css';
    import {TopNavbar} from "./components/headers/TopNavbar";
    import {Home} from "./components/routes/Home";
    import "./scss/_global.scss";
    import {Route, Routes} from "react-router-dom";
    import {MyZone} from "./components/routes/MyZone";
    import {ZoneContent} from "./components/layouts/zone/ZoneContent";
    import {Watch} from "./components/layouts/zone/watch/Watch";

    function App() {
        return (
            <div className="App">
                <TopNavbar/>
                <Routes>
                    <Route path="/">
                        <Route path="home" element={<Home/>}>

                        </Route>
                        <Route path="myzone" element={<MyZone/>}>
                            <Route path="home" element={<Watch/>}>

                            </Route>
                        </Route>
                    </Route>

                </Routes>
            </div>
        );
    }

    export default App;
