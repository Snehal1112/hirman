import React  from 'react';
import Grid from './components/grid';
import { connect } from 'react-redux';
import { getListOfCandidate, sortBy, filterBy } from './actions/ApplicantActions';
import { Renderers } from './utils/Renderers';

const columns = [
	{
		name: 'Name',
		dataIndex: 'name',
		filter:true,
		editor:{
			type:'text',
			placeholder:"Filter By name"
		},
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
		width: 80,
		textAlign: 'center'
	},
	{
		name: 'Experience',
		dataIndex: 'experience',
		width: 150,
		sortable: true
	},
	{
		name: 'Position applied',
		dataIndex: 'position',
		sortable: true,
		filter:true,
		editor:{
			type:'text',
			placeholder:"Filter By position"
		},
		width: 200
	},
	{
		name: 'Applied',
		dataIndex: 'applied',
		sortable: true,
		format: 'd-m-Y',
		renderer: Renderers.dateRenderer
	},
	{
		name: 'Status',
		dataIndex: 'status',
		filter:true,
		editor:{
			type:'select',
			options:['Approved','Rejected','Waiting']
		}
	}
];
const App = (props)=> {
	return (
		<div className="App">
			<Grid
				columns={columns}
				{...props}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.candidate.items,
	sort: state.candidate.sort,
	filter:state.candidate.filter,
	filteredData : state.candidate.filteredData
});

export default connect(mapStateToProps, { getListOfCandidate, sortBy, filterBy })(App);
