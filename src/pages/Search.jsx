import React, { useState } from 'react'
import './Search.css'; 
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic"
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function Search({ hideButtons = false}) {
    const [{}, dispatch] = useStateValue();

    //ham search
    const [input, setInput] = useState("");
    const history = useHistory();
    const search = e =>{
        e.preventDefault();
        //console.log('You hit search button: ' + input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search')
    }

    return (
        <form className="search">
            {/* Search Input */}
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <MicIcon />
            </div>

            {/* Search Button */}
            {!hideButtons ? (
                <div className="search_button">
                    <Button 
                        type='submit' 
                        onClick={search} 
                        variant="outlined">
                            Tìm với Google
                    </Button>
                    <Button variant="outlined">
                        Xem trang đầu tiên tìm được
                    </Button>
                </div>
            ):(
                <div className="search_button">
                    <Button 
                        className="search_buttonHidden"
                        type='submit' 
                        onClick={search} 
                        variant="outlined">
                            Tìm với Google
                    </Button>
                    <Button 
                        className="search_buttonHidden"
                        variant="outlined">
                        Xem trang đầu tiên tìm được
                    </Button>
                </div>
            )}
            
        </form>
    )
}

export default Search
