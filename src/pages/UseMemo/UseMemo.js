import React, { useState, useEffect, useMemo } from 'react';
import './useMemo.scss';

const UseMemo = () => {

	const [data, setData] = useState(0);
	const [number, setNumber] = useState(0);

    const data2 = useMemo(() => {
		return {
			key: 'value1'
		}
	}, [number]);
		  
	useEffect(() => {
		console.log('Hello world');
	}, [data2]);

    const numberFunc = useMemo(() => {
        return verySlowFunction(data)
	}, [data]);
      
    return <div>{numberFunc}</div>;
}

function verySlowFunction(input){
    console.log('...heavy work done here');
    return input;
}

export default UseMemo;
