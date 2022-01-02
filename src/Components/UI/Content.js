import Rightbar from "../Rightbar";
import InternalContent from "./InternalContent";
import "./Content.css";
export default function Content(){
    return (
        <div className="content">
            
                <li>
            <InternalContent/>
                </li>
                <li>
            <Rightbar/>
                </li>
        </div>
    )
}