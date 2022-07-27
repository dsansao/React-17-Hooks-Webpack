import React, { useState, useRef, useCallback } from 'react';
import List from "./List"
import './useCallback.scss';

const UseCallback = () => {

	/* Initial states */
    const [input, setInput] = useState(1);
    const [light, setLight] = useState(true);
  
    /* useCallback memoizes the getItems() which 
       returns a list of number which is number+10
       and number + 100 */
    const getItems = useCallback(() => {
        return [input + 10, input + 100];
    }, [input]);

	const getItems2 = () => {
        return [input + 10, input + 100];
    };
  
    /* style for changing the theme */
    const theme = {
        backgroundColor: light ? "White": "grey",
        color: light ? "grey" : "white"
    }
      
  
    return <>
        <div style={theme}>
            <input type="number"
           		value={input}  
				/* When we input a number it is stored in
				our stateful variable */
				onChange={event => 
				setInput(parseInt(event.target.value))
            } />

            <button onClick={() => 
				setLight(prevLight => 
				!prevLight)}>{light ? "dark mode":"light mode"}
            </button>
			
            <List getItems={getItems}/>
			<List getItems={getItems2}/>
        </div>
    </>;
}

export default UseCallback;
