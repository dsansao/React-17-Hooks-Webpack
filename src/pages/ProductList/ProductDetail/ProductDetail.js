import React from 'react';
import './productDetail.scss';

function ProductDetail({product}) {

    console.log('product', product);

    return (

        <div className="container-product-detail">
            <div className="product" id="product">{product.Name}</div>
        </div>
    );

}

export default ProductDetail; 