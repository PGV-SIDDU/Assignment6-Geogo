import React from "react";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
export default function Search(){
    return (
        <React.Fragment>
        <form className="form" >
        <SearchIcon className="SearchIcon"/>
        <input type="text" className ="Searchinput" placeholder="Search Artists,Songs,Albums"/>
        </form>
        </React.Fragment>
);
}