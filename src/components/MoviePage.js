import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MoviePage.css";

const MoviePage = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://img.omdbapi.com/?t=${search}&`).then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <div className='wrapper'>
            <h1>The Shoppies</h1>
            <div className='search-bar'>
                <h3>Movie title</h3>
                <input
                    value={search}
                    type='search'
                    name='search'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>
            </div>
            <div className='results'>
                <h2>Results for "{search}"</h2>
            </div>
            <div className='nomination'>
                <h2>Nominations</h2>
                {/* if statement to display banner when full */}
                {/* state that holds our nominated movies */}
            </div>
        </div>
    );
};

export default MoviePage;
