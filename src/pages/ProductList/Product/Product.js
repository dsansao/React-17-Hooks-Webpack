import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "./product.scss"

const Product = ({product}) => {

    const navigate = useNavigate();    
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {        
        if (product.Price === product["Retail Price"]) {
            setIsShow(false);
        }
    }, [product]);

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/product', { state: product });
    };

    return (

        <div className="container-product-container">
            <img className="image-product-container" src={product.ThumbnailURL} alt={product.Name}/>
            <div className="container-name-prices">
                <div className="product-name" id="product">{product.Name}</div>                
                <div className="container-prices">
                    <div className="price-normal">${product.Price}</div>
                    {isShow ?
                        <div className="price-retail">${product["Retail Price"]}</div>
                        :
                        <></>
                    }
                </div>
                
            </div>
            <div className="view-details-container">
                <button className="view-details-btn" onClick={handleClick} id="viewDetail">Detail</button>
            </div>
           
        </div>
        
    );

}

export default Product; 