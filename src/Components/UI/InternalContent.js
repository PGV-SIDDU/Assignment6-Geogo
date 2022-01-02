import "./Content.css";
import Carousal from "./Carousel";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
export default function InterContent(){
    return (
        <ul className="Internalcontent">
            <ImageSlider/>
            <Carousal/>
            <Footer/>
        </ul>
    )
}