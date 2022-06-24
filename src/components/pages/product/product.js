import React from 'react';

function Product({product}) {
	return(
		<div className="product-container">			
			<h2 className="product-title">{product.name}</h2>
			<div className="product-about-img-container">
				<p className="product-about">{product.about}</p>
				<img className="product-img" alt={product.name} src={product.picture} />				
			</div>
			<div className="product-price-add-container">
				<span className="product-price">${product.price}</span>
				<span className="product-add">Add to Cart</span>
			</div>
		</div>
	);
}

export default Product;