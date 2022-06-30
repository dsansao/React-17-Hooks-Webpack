import React, { useState, useContext, useEffect, useRef } from 'react';
import { ProductFilteredContext } from "../productList/productList";
const axios = require('axios').default;

function Search({list, onClose, show}) {

    const [ productFilteredList, setProductFilteredList ] = useContext(ProductFilteredContext);
    const [ searchText, setSearchText ] = useState("");

    const filterProducts = () => {     
        return list.filter(product => {
            return product.isActive === true && 
            ( product.Name.toUpperCase().includes(searchText.toUpperCase()));
        });
    }
    
    const onSearch = e => {
        let searchText = e.target.value;
        setSearchText(searchText);
        if (searchText && searchText.length >= 1) {
            setProductFilteredList(filterProducts());
        } else {
            setProductFilteredList([]);
        }
    }

	return(
        <React.Fragment>            
            <div className={(show ? "showing " : "") + "search-container"}>
                <h4 className="filter-products-label">Filter products: </h4>
                <input value={searchText} type="text" onChange={onSearch}/>
            </div>
        </React.Fragment>
	);
}

export default Search;