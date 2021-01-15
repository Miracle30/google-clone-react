import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from './Search'

function Home() {
    return (
        <div className="home">
            {/* Start: Header */}
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>

                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Hình ảnh</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            {/* End: Header */}

            {/* Start: Body*/}
            <div className="home_body">
                <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51ba7538-33af-40b8-8782-63b66956ddd7/da7co7n-2daff29c-1075-4495-9d9e-1a5a2c78bd3f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTFiYTc1MzgtMzNhZi00MGI4LTg3ODItNjNiNjY5NTZkZGQ3XC9kYTdjbzduLTJkYWZmMjljLTEwNzUtNDQ5NS05ZDllLTFhNWEyYzc4YmQzZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.0c8l_PznhpR2XOi8Wqc1Lb0_J5dz8rHUPeiCPr2GhkQ"
                    alt="logo"
                />
                <div className="home_inputContainer">
                    <Search />
                </div>
            </div>
            {/* End: Body */}
        </div>
    );
}

export default Home;
