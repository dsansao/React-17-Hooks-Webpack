import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StarRating from './../../../components/StarRating/StarRating';
import './productDetail.scss';

function ProductDetail(state) {
    
    const location = useLocation();
    const product = location.state;
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {        
        if (product.Price === product["Retail Price"]) {
            setIsShow(false);
        }
    }, [product]);

    const handleClick = (e) => {
        e.preventDefault();
        alert("Product added in Cart!")
    };

    return (

        <div className="container-product-detail">

            <img className="image-product-container" src={product.ThumbnailURL} alt={product.Name}/>

            <div className="container-name-prices">
                <div className="container-product-name-description">
                    <div className="product-name" id="product">{product.Name}</div>        
                    <div className="product-description" id="product-description">{product.Description}</div>                      
                </div>
                <div className="container-prices">
                        <div className="price-normal">${product.Price}</div>
                        {isShow ?
                            <div className="price-retail">${product["Retail Price"]}</div>
                            :
                            <></>
                        }
                </div>

                <div className="product-category-brand-color-container">
                    <label className="product-category-label" for="product-category">Categories: </label>
                    <div className="product-category" id="product-category">{product.Category}</div>
                    <label className="product-brand-label" for="product-brand">Brands: </label>
                    <div className="product-brand" id="product-brand">{product.Brand}</div>
                    <label className="product-color-label" for="product-color">Colors: </label>
                    <div className="product-color" id="product-color">{product.Color}</div>
                    <label className="product-stock-label" for="product-color">In Stock: </label>
                    <div className="product-stock" id="product-stock">{product.Stock}</div>
                </div>
                
            </div>
            
            <div className="product-star-rating-container">
                <StarRating
                    count={5}
                    size={40}
                    half={true}
                    value={4.4}
                    edit={false}
                    color2={'#ffd700'} />           
                <span className="product-rating-count">Of {product.RatingCount} votes</span>
            </div>
            
            <div className="product-btn-container">
                <button className="product-detail-add-cart" onClick={handleClick}>Add to Cart</button>
                </div>
        </div>
    );

}

export default ProductDetail; 