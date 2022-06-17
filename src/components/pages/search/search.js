import React, { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from "../main.js";
const axios = require('axios').default;

function Search({onClose, show}) {

    const [ productList, setProductList ] = useContext(ProductContext);
    const [ searchText, setSearchText ] = useState("");

    const filterProducts = (productList) => {     
        return productList.filter(product => {
            return product.isActive === "true" && 
            (   product.tags.includes(searchText.toLowerCase()) ||
                product.name.toUpperCase().includes(searchText.toUpperCase())
            );
        });
    }

    const getProducts = () => {     

        axios.get('http://localhost:3035/')
            .then(function (response) {
                console.log(response);
                let productList = filterProducts(response.data);
                setProductList(productList);
            })
            .catch(function (error) {
                console.log(error);
            }); 
    }

    const onSearch = e => {
        let searchText = e.target.value;
        setSearchText(searchText);
        if (searchText && searchText.length >= 3) {
            getProducts();
        } else {
            setProductList([]);
        }
    }

    const onClick = e => {
        setSearchText('');
        onClose(e);
    }

	return(
        <React.Fragment>
            <div className={(show ? "showing " : "") + "search-container"}>
                <input value={searchText} type="text" onChange={onSearch}/>
                <a onClick={onClick} href="#">
                    <i className="material-icons close">close</i>
                </a>
            </div>
        </React.Fragment>
	);
}

export default Search;