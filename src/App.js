import React from 'react';
import Grid from './components/Grid';

function App() {
	const columns = [
		{
			name: 'Name',
			dataIndex: 'name'
		},
		{
			name: 'Email',
			dataIndex: 'email'
		},
		{
			name: 'Age',
			dataIndex: 'age'
		},
		{
			name: 'Years of Experiance',
			dataIndex: 'experiance'
		},
		{
			name: 'Position applied',
			dataIndex: 'Position'
		},
		{
			name: 'Applied',
			dataIndex: 'applied'
		},
		{
			name: 'Applied',
			dataIndex: 'applied'
		}
	];
	return (
		<div className="App">
			<Grid columns={columns} />
		</div>
	);
}

export default App;
