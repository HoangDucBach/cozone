import './home.scss';
import {Effects, LineStream, Star} from "../ui/effect/Effects";
import {useEffect, useState} from "react";

export function Home() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = async (size) => {
            const stars = [];
            const createStar = () => {
                const shapes = ["circle", "triangle", "rectangle"];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                return (
                    <div
                        className="star"
                        key={stars.length}
                        style={{
                            position: "absolute",
                            top: Math.random() * 100 + "vh",
                            left: Math.random() * 80 + "vw"
                        }}
                    >
                        <Star shape={shape}/>
                    </div>
                );
            };

            const starPromises = Array.from({length: size}, (_, i) =>
                new Promise((res) =>
                    setTimeout(() => {
                        stars.push(createStar());
                        setStars([...stars]); // Update the state with the new stars
                        res();
                    }, 1000 * i)
                )
            );

            await Promise.all(starPromises);
        };

        generateStars(30);
    }, []);
    return (
        <main className="home">
            <div className="line-stream-layout">
                <LineStream bottom="100%"/>
                <LineStream top="100%"/>
            </div>
            <div>
                {stars.map((star, index) => (
                    star
                ))}
            </div>
            <div className="home__tagline-layout">
                <div className="home__tagline-heading">
                    <span id="span-1">Let's collaborate</span> on everything
                    with CoZone <span id="span-2">together!</span>
                </div>
                <div className="home__tagline-content">
                    Lorem ipsum dolor sit amet consectetur. Proin vitae id fringilla urna odio praesent id. Nisi in ut
                    iaculis sagittis faucibus molestie mattis. Tempus tellus quam pulvinar sed nibh ut. Nunc varius
                    commodo dolor nec id lacus pretium.
                </div>
            </div>
            <div className="home__effect-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="1120" height="474" viewBox="0 0 1120 474" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M1106.59 236.524C1110.46 230.111 1113.42 223.59 1115.42 216.978C1109.61 197.8 1095.75 179.383 1074.89 162.152C1046.71 138.866 1005.86 117.851 955.296 100.183C854.178 64.8505 714.42 42.9785 560 42.9785C405.58 42.9785 265.822 64.8505 164.704 100.183C114.14 117.851 73.2923 138.866 45.1052 162.152C24.2477 179.383 10.3858 197.8 4.58408 216.978C6.58412 223.59 9.54206 230.111 13.4143 236.524C68.3651 148.714 292.213 82.9785 560 82.9785C827.787 82.9785 1051.63 148.714 1106.59 236.524ZM1106 237.478C1098.67 225.627 1088.2 214.148 1074.89 203.152C1046.71 179.866 1005.86 158.851 955.296 141.183C854.178 105.851 714.42 83.9785 560 83.9785C405.58 83.9785 265.822 105.851 164.704 141.183C114.14 158.851 73.2923 179.866 45.1052 203.152C31.795 214.148 21.3337 225.627 13.9979 237.478C21.3337 249.33 31.795 260.809 45.1052 271.805C73.2923 295.091 114.14 316.106 164.704 333.774C265.822 369.106 405.58 390.978 560 390.978C714.42 390.978 854.178 369.106 955.296 333.774C1005.86 316.106 1046.71 295.091 1074.89 271.805C1088.2 260.809 1098.67 249.33 1106 237.478ZM13.4143 238.433C68.3651 326.243 292.213 391.978 560 391.978C827.787 391.978 1051.63 326.243 1106.59 238.433C1110.46 244.846 1113.42 251.367 1115.42 257.978C1109.61 277.157 1095.75 295.574 1074.89 312.805C1046.71 336.091 1005.86 357.106 955.296 374.774C854.178 410.106 714.42 431.978 560 431.978C405.58 431.978 265.822 410.106 164.704 374.774C114.14 357.106 73.2923 336.091 45.1052 312.805C24.2477 295.574 10.3858 277.157 4.58408 257.978C6.58412 251.367 9.54206 244.846 13.4143 238.433ZM12.8241 237.478C9.06728 231.327 6.1385 225.069 4.08047 218.718C2.37195 224.899 1.5 231.157 1.5 237.478C1.5 243.8 2.37195 250.058 4.08047 256.239C6.1385 249.888 9.06727 243.63 12.8241 237.478ZM3.53917 257.978C1.52993 251.241 0.5 244.402 0.5 237.478C0.5 230.555 1.52993 223.716 3.53917 216.978C1.52993 210.241 0.5 203.402 0.5 196.478C0.5 88.5068 250.997 0.978455 560 0.978455C869.003 0.978455 1119.5 88.5068 1119.5 196.478C1119.5 203.402 1118.47 210.241 1116.46 216.978C1118.47 223.716 1119.5 230.555 1119.5 237.478C1119.5 244.402 1118.47 251.241 1116.46 257.978C1118.47 264.716 1119.5 271.555 1119.5 278.478C1119.5 386.45 869.003 473.978 560 473.978C250.997 473.978 0.5 386.45 0.5 278.478C0.5 271.555 1.52993 264.716 3.53917 257.978ZM4.08047 259.718C2.37195 265.899 1.5 272.157 1.5 278.478C1.5 305.054 16.9115 330.514 45.1052 353.805C73.2923 377.091 114.14 398.106 164.704 415.774C265.822 451.106 405.58 472.978 560 472.978C714.42 472.978 854.178 451.106 955.296 415.774C1005.86 398.106 1046.71 377.091 1074.89 353.805C1103.09 330.514 1118.5 305.054 1118.5 278.478C1118.5 272.157 1117.63 265.899 1115.92 259.718C1084.32 357.218 847.482 432.978 560 432.978C272.518 432.978 35.6769 357.218 4.08047 259.718ZM1115.92 256.239C1117.63 250.058 1118.5 243.8 1118.5 237.478C1118.5 231.157 1117.63 224.899 1115.92 218.718C1113.86 225.069 1110.93 231.327 1107.18 237.478C1110.93 243.63 1113.86 249.888 1115.92 256.239ZM1.5 196.478C1.5 202.8 2.37195 209.058 4.08047 215.239C35.6769 117.739 272.518 41.9785 560 41.9785C847.482 41.9785 1084.32 117.739 1115.92 215.239C1117.63 209.058 1118.5 202.8 1118.5 196.478C1118.5 169.903 1103.09 144.443 1074.89 121.152C1046.71 97.866 1005.86 76.851 955.296 59.1831C854.178 23.8505 714.42 1.97845 560 1.97845C405.58 1.97845 265.822 23.8505 164.704 59.1831C114.14 76.851 73.2923 97.866 45.1052 121.152C16.9115 144.443 1.5 169.903 1.5 196.478Z"
                          fill="url(#paint0_linear_192_1517)"/>
                    <defs>
                        <linearGradient id="paint0_linear_192_1517" x1="560" y1="0.978455" x2="560" y2="473.978"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0"/>
                            <stop offset="1" stop-color="white"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="home__effect-gradient-bottom"></div>
        </main>
    );
}