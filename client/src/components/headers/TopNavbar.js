import './top-header.scss';
import {Link} from "react-router-dom";

export function TopNavbar() {
    const imagePath = process.env.REACT_APP_PUBLIC_IMAGE;

    return (
        <header className="top-header">
            <div className="top-header__logo-layout">
                <img src={"/images/logo.png"} alt="image" className="top-header__logo"/>
                <div className="top-header__title">CoZone</div>
            </div>

            <nav className="top-header__nav">
                <Link to="/home"
                      className="top-header__link">Home</Link>
                <Link to="/donate"
                      className="top-header__link">Donate</Link>
                <Link to="/about"
                      className="top-header__link">About</Link>
                <Link to="/contact"
                      className="top-header__link">Contact</Link>
                <Link to="/myzone"
                      className="top-header__link" id="myzone">My Zone</Link>
            </nav>
        </header>
    );
}
