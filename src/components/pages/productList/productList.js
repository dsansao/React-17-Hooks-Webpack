import React, { useContext } from 'react';
import { ProductContext } from "../main.js";
import Product from './product';

function ProductList() {

	const [ productList, setProductList ] = useContext(ProductContext);

	return(
		<div className="product-list-container">			
			<div className="product-list-row">
			{
                productList && productList.map( product => <Product product={product}/> )
            }
			</div>
		</div>
	);
}

export default ProductList;
