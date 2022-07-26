import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import Product from './Product/Product';
import Search from './Search/Search';
import Red from "./../../components/Red/Red";
import './productList.scss';

export const ProductFilteredContext = createContext();

const ProductList= () => {

	const [ productList, setProductList ] = useState([]);
	const [ productFilteredList, setProductFilteredList ] = useState([]);

	useEffect(() => {

		const API_URL = process.env.LOCAL_DB_URL;

		axios.get(API_URL+'products')
			.then(function (response) {
				//console.log(response.data);				
				setProductList(response.data);
				setProductFilteredList(response.data);
			})
			.catch(function (error) {
				//console.log(error);
			}); 
	}, []);

	return(
		<div className="product-list-container">
			<ProductFilteredContext.Provider value={[ productFilteredList, setProductFilteredList ]}>
				<Search list={productList}/>	
				<div className="product-list-row">
					{ productFilteredList.length > 0 ?
						productFilteredList.map( product => <Product key={product.ProductID} product={product}/> ) :
						<Red addClass="product-list-empty-message">We don´t have products with this name!</Red>
					}
				</div>
			</ProductFilteredContext.Provider>		
		</div>
	);
}

export default ProductList;
