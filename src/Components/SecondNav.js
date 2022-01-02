import "./SecondNav.css";
import { KeyboardArrowDown } from "@mui/icons-material";
export default function SecondNav(){
    return (
        <ul className="SecondNav">
            <li className="list">All</li>
            <li className="list">Trending Songs</li>
            <li className="list">New Songs</li>
            <li className="list">Old Songs</li>
            <li className="list adjust">Mood & Genres <span><KeyboardArrowDown className="arrow-icon"/></span></li>
            <li className="list">Album</li>
            <li className="list">Radio</li>
            <li className="list">Podcast</li>
            <li className="list">My Music</li>
        </ul>
    );
}