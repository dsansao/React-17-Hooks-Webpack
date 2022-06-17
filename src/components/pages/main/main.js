import React, { createContext, useState } from 'react';
import Menu from './menu';
import Home from './home';

export const ProductContext = createContext();

function Main() {    

    const [ productList, setProductList ] = useState();

    return (
        <div className="App">
            <ProductContext.Provider value={[ productList, setProductList ]}>
                <Menu />
                <Home />
            </ProductContext.Provider>
        </div>
    );
}

export default Main;