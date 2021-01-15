import React from 'react'
import './Search.css'; 
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic"
import { Button } from '@material-ui/core';


function Search() {
    return (
        <div className="search">
            {/* Search Input */}
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input/>
                <MicIcon />
            </div>

            {/* Search Button */}
            <div className="search_button">
                <Button variant="outlined">Tìm với Google</Button>
                <Button variant="outlined">Xem trang đầu tiên tìm được</Button>
            </div>
        </div>
    )
}

export default Search
