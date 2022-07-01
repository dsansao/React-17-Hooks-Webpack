import React, { useState, useContext, useEffect, useRef } from 'react';
import { ProductFilteredContext } from "./../ProductList";
import './search.scss'

function Search({list}) {

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
            <div className="search-container">
                <h4 className="search-products-label">Filter products: </h4>
                <input value={searchText} type="text" onChange={onSearch}/>
            </div>
        </React.Fragment>
	);
}

export default Search;