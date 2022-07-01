import React from 'react';
import './red.scss';

const Red = ({ children  }) => {    

    return (
        <span className="red">{ children }</span>
    );
}  

export default Red;