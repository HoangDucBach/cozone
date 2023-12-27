import './buttons.scss';
export function ZoneTag(props) {
    const tag= props.tag.substring(0, 1).toUpperCase() + props.tag.substring(1);
    return (
        <a href={"/zz"} className="zone-tag">
            {tag+" Zone"}
        </a>
    )
}