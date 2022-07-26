import React from 'react';
import './red.scss';

const Red = ({ addClass, children }) => {    

    return (
        <span className={ `${addClass} red`}>{ children }</span>
    );
}  

export default Red;