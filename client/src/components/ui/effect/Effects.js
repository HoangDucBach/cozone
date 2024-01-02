import '../../../scss/effect.scss';

export function LineStream(props) {
    const lineStyle = {
        top: props.top || 0,
        bottom: props.bottom || 0,
    };
    return (
        <div className="line" style={lineStyle}></div>
    )
}

export function Star(props) {
    const shape = props.shape;
    let svgPath = null;
    switch (shape) {
        case "triangle":
            svgPath = (
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 51" fill="none">
                    <g filter="url(#filter0_d_21_394)">
                        <path
                            d="M13.5581 12.1663L36.9806 18.4424C38.0959 18.7412 38.4695 20.1354 37.653 20.9519L20.5066 38.0983C19.6901 38.9148 18.2959 38.5413 17.997 37.4259L11.721 14.0034C11.4221 12.8881 12.4427 11.8675 13.5581 12.1663Z"
                            stroke="#41FF6B" strokeWidth="3" shapeRendering="crispEdges"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_21_394" x="0.166687" y="0.61203" width="100%" height="100%"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.0900002 0 0 0 0 1 0 0 0 0 0.6178 0 0 0 0.5 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_394"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_394" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            );
            break;
        case "circle":
            svgPath = (<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 41 41" fill="none">
                <g filter="url(#filter0_d_21_393)">
                    <circle cx="20.0693" cy="20.201" r="8.5" stroke="#FF07E6" strokeWidth="3" shapeRendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_21_393" x="0.0693359" y="0.201019" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.98 0 0 0 0 0 0 0 0 0 1 0 0 0 0.5 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_393"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_393" result="shape"/>
                    </filter>
                </defs>
            </svg>);
            break;
        case "rectangle":
            svgPath = (
                <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_212_289)">
                        <rect x="11" y="11" width="18" height="18" stroke="#0038FF" strokeWidth="2"
                              shapeRendering="crispEdges"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_212_289" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.134333 0 0 0 0 0.116667 0 0 0 0 1 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_212_289"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_212_289" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            );
            break;
    }
    return (
        <div className="start">
            {svgPath}
        </div>
    );
}