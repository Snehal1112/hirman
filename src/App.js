import React, { Component } from 'react';
import Grid from './components/grid';
import { connect } from 'react-redux';
import { getListOfCandidate,sortBy } from './actions/ApplicantActions';
import { Renderers } from './utils/Renderers';

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
		dataIndex: 'status'
	}
];
class App extends Component {
	render() {
		const { items = [],sort:{field="experience", dire="ASC"} } = this.props;
		return (
			<div className="App">
				<Grid
					columns={columns}
					sorting={{
						field,
						dire
					}}
					topBar={{
						disabled: false
					}}
					data={items}
					onAfterRender={this.props.getListOfCandidate}
					sortHandler={this.props.sortBy}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	items: state.candidate.items,
	sort:state.candidate.sort
});

export default connect(mapStateToProps, { getListOfCandidate,sortBy })(App);
