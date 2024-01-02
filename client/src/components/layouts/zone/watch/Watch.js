import {useEffect, useState} from "react";
import {User} from "../../../User";
import $ from 'jquery';
export function Watch() {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/myzone/watch');
                const data = await res.json();
                setVideo(data);
            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {video.length > 0 && (
                <iframe
                    id="videoFrame"
                    width="1280"
                    height="350"
                    src={`https://www.youtube.com/embed/${video[0].id}?;start=60`}
                    title="How To Use TypeScript With Express &amp; Node"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
        </>


    );
}