import React from 'react';
import Grid from './components/grid';

function App() {
	const columns = [
		{
			name: 'Name',
			dataIndex: 'name',
			width: 200
		},
		{
			name: 'Email',
			dataIndex: 'email',
			width: 200
		},
		{
			name: 'Age',
			dataIndex: 'age',
			width: 50
		},
		{
			name: 'Years of Experiance',
			dataIndex: 'experiance',
			sortable: true
		},
		{
			name: 'Position applied',
			dataIndex: 'Position',
			sortable: true,
			width: 200
		},
		{
			name: 'Applied',
			dataIndex: 'applied',
			sortable: true
		},
		{
			name: 'Status',
			dataIndex: 'status'
		}
	];
	return (
		<div className="App">
			<Grid
				columns={columns}
				topBar={{
					disabled: false
				}}
			/>
		</div>
	);
}

export default App;
