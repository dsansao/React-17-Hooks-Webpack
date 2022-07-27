import React, { useRef, useState } from 'react';
import './useRef.scss';

const UseRef = () => {

	const [count, setCount] = useState(0);
	const countRef = useRef(0);

	const inputRef = useRef(null);
	const onButtonClick = () => {
	  inputRef.current.focus();
	};

	const handleAdd = (e) => {
        e.preventDefault();
        setCount((c) => c + 1);
    };

	const handleAdd2 = (e) => {
		countRef.current++;
		console.log('Count is: ' + countRef.current);
    };

	console.log('I rendered!');

	return(
		<div className="use-ref-container">						
				
            <div className="use-ref-wrapper">
				<h3 className="use-ref-title">UseRef</h3>
				
				<h2 className="use-ref-subtitle">Example 1 - Focus example</h2>
				<div className="use-ref-focus-container">					
					<input ref={inputRef} type="text" />
					<button className="btn btn-primary btn-block use-ref-focus" onClick={onButtonClick}>Focus the input</button>
				</div>

				<h2 className="use-ref-subtitle">Example 2 - UseRef without render screen (See console log)</h2>
				<div className="use-ref-counter-container">					
					<span className="use-ref-quantity">Quantity: {count} {countRef.current}</span>
					<button className="btn btn-primary btn-block use-ref-add" onClick={handleAdd}>Add</button>
					<button className="btn btn-primary btn-block use-ref-add" onClick={handleAdd2}>Add UseRef</button>
				</div>
			</div>
		</div>
	);
}

export default UseRef;
