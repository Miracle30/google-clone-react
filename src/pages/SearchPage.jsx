import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue(); 
    // live api call
    const { data } = useGoogleSearch(term)
    // Mock API call
    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                {/* <h1>{term}</h1> */}
                <Link to='/'>
                    <img
                        className="searchPage_logo"
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51ba7538-33af-40b8-8782-63b66956ddd7/da7co7n-2daff29c-1075-4495-9d9e-1a5a2c78bd3f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTFiYTc1MzgtMzNhZi00MGI4LTg3ODItNjNiNjY5NTZkZGQ3XC9kYTdjbzduLTJkYWZmMjljLTEwNzUtNDQ5NS05ZDllLTFhNWEyYzc4YmQzZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.0c8l_PznhpR2XOi8Wqc1Lb0_J5dz8rHUPeiCPr2GhkQ"
                        alt="logo"
                    />
                </Link>

                <div className="searchPage_headerBody">
                    <Search hideButtons />

                    <div className="searchPage_options">
                        {/* Start: Option left */}
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">Tất cả</Link>
                            </div>
                            <div className="searchPage_option">
                                <PlayArrowIcon />
                                <Link to="/videos">Videos</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/images">Ảnh</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Mua sắm</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news">Tin tức</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/more">Thêm</Link>
                            </div>
                        </div>
                        {/* End: Option left */}

                        {/* Start: Option Right */}
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Cài đặt</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Công cụ</Link>
                            </div>
                        </div>
                        {/* End: Option Right */}
                    </div>
                </div>
            </div>
            
            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        Khoảng {data?.searchInformation.formattedTotalResults} kết quả ({data?.searchInformation.formattedSearchTime} giây) 
                        cho {term}
                    </p>

                    {/* từng kết quả số ít */}
                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length >0 
                                    && item.pagemap?.cse_image[0]?.src &&(
                                    <img
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src}
                                        alt=""
                                    />
                                )}
                                {item.displayLink} 🔻
                            </a>
                            <a className="searchPage_resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
           
        </div>
    )
}

export default SearchPage
