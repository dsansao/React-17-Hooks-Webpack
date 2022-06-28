import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import Product from './../product/product';
import Search from './../search/search';

export const ProductContext = createContext();

const ProductList= () => {

	const [ productList, setProductList ] = useState();

	useEffect(() => {

		const API_URL = process.env.LOCAL_DB_URL;

		axios.get(API_URL+'products')
			.then(function (response) {
				console.log(response.data);
				//let productList = filterProducts(response.data);
				setProductList(response.data);
			})
			.catch(function (error) {
				console.log(error);
			}); 
	}, []);

	return(
		<div className="product-list-container">
			<ProductContext.Provider value={[ productList, setProductList ]}>
				<Search/>	
				<div className="product-list-row">
				{
					productList && productList.map( product => <Product key={product.ProductID} product={product}/> )
				}
				</div>
			</ProductContext.Provider>		
		</div>
	);
}

export default ProductList;
