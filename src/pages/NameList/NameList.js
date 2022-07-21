import React, { useState } from 'react';
import './nameList.scss';

const initialNameList = [
	{
		id: 1,
		name: 'Diego'
	},
	{
		id: 2,
		name: 'Eduardo'
	},
	{
		id: 3,
		name: 'Richard'
	}
]

const NameList = () => {

	const [nameList, setNameList] = useState(initialNameList);
	const [name, setName] = useState('');

	const handleAdd = () => {
		if (name && nameList.filter(item => item.name.toUpperCase() === name.toUpperCase()).length > 0) {
			alert("This name has already been added");
			return;
		}
		name && setNameList([...nameList, {id: nameList.length + 1, name: name}]);
		setName('');
	};

	const handleRemove = (id) => {
		setNameList(nameList.filter(item => item.id !== id));
	};

	return(
		<div className="name-list-container">
			<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
			<button className="btn btn-primary btn-block counter-card-add" onClick={handleAdd}>Add</button>
			
			<ul>
			{
				nameList && nameList.map(item => 
					<React.Fragment>
						<li key={item.id}>{item.name}</li>
						<button onClick={() => handleRemove(item.id)}>-</button>
					</React.Fragment>
				)
			}
			</ul>
		</div>
	);
}

export default NameList;
