import React from "react";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
export default function Search(){
    const Searchicon = <SearchIcon className="SearchIcon"/>
    return (
        <React.Fragment>
        <form className="form" >
        {Searchicon}
        <input type="text" className ="Searchinput" placeholder='Search Artists,Songs,Albums'/>
        </form>
        </React.Fragment>
);
}