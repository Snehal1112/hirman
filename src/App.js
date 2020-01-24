import React, { Component } from 'react';
import Grid from './components/grid';
import { connect } from 'react-redux';
import { getListOfCandidate } from './actions/ApplicantActions';
import { Renderers } from './utils/Renderers';

const columns = [
	{
		name: 'Name',
		dataIndex: 'name',
		type: 'string',
		width: 200
	},
	{
		name: 'Email',
		dataIndex: 'email',
		type: 'string',
		width: 200
	},
	{
		name: 'Age',
		dataIndex: 'age',
		type: 'number',
		width: 80,
		textAlign: 'center'
	},
	{
		name: 'Experiance',
		dataIndex: 'experiance',
		type: 'number',
		width: 150,
		sortable: true
	},
	{
		name: 'Position applied',
		dataIndex: 'position',
		type: 'string',
		sortable: true,
		width: 200
	},
	{
		name: 'Applied',
		dataIndex: 'applied',
		type: 'date',
		sortable: true,
		formate: 'd-m-Y',
		renderer: Renderers.dateRendere
	},
	{
		name: 'Status',
		dataIndex: 'status',
		type: 'string'
	}
];
class App extends Component {
	render() {
		const { items = [] } = this.props;
		return (
			<div className="App">
				<Grid
					columns={columns}
					defaultSorting={{
						filed: 'experiance',
						dire: 'DESC'
					}}
					topBar={{
						disabled: false
					}}
					data={items}
					onAfterRender={this.props.getListOfCandidate}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	items: state.candidate.items
});

export default connect(mapStateToProps, { getListOfCandidate })(App);
