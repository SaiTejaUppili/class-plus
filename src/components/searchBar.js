import React from 'react';
// import { MDBCol, MDBIcon } from "mdbreact";
import './searchBar.css';

const SearchBar = ({onChange,placeholder}) => {
    // const [results,updateResults]=useState([]);
    return (
        <input
            key="random1"
            value={placeholder}
            placeholder={"search image"}
            onChange={onChange}
        />
    );
}
export default SearchBar;