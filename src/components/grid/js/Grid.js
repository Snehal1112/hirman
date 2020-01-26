import React, { PureComponent } from 'react';
import Header from './ColumnHeader';

class Grid extends PureComponent {
	constructor(props) {
		super(props);
		this.onHeaderClick = this.onHeaderClick.bind(this);
		this.onApplyFilter = this.onApplyFilter.bind(this);
	}

	onHeaderClick(header){
		if (header.sortable) {
			let { items = [], sort={} } = this.props;
			if (sort.field === header.dataIndex){
				sort.dire = sort.dire === "ASC" ? "DEC":"ASC";
			} else {
				sort = {
					field : header.dataIndex,
					dire:"ASC"
				};
			}
			const{sortBy= (data, sort)=>{}} = this.props;
			sortBy(items,sort)
		}
	}

	onApplyFilter(field, value){
		const {filterBy, items =[]} = this.props;
		filterBy(items, field, value);
	}

	createHeader() {
		const { columns = [],sort } = this.props;
		return columns.map((header, index) => <Header
				key={index}
				header={header}
				onClickHeader={this.onHeaderClick}
				onApplyFilter={this.onApplyFilter}
				sort={sort} />
			);
	}

	rowRender() {
		let { columns = [], items = [], filter, filteredData} = this.props;
		if(filter){
			items = filteredData;
		}
		const rows = items.map((row) => {
			return (
				<tr key={row.id}>
					{columns.map((col, index) => (
						<td key={index} style={{ textAlign: col.textAlign ? col.textAlign : 'left' }}>
							{col.renderer ? col.renderer(row[col.dataIndex], row, col) : row[col.dataIndex]}
						</td>
					))}
				</tr>
			);
		});
		return [ ...rows ];
	}

	componentDidMount() {
		const { getListOfCandidate = sorting => {}, sort={field:"experience", dire:"ASC"}} = this.props;
		getListOfCandidate(sort);
	}

	render() {
		return (
			<table>
				<thead>
					<tr>{this.createHeader()}</tr>
				</thead>
				<tbody>{this.rowRender()}</tbody>
			</table>
		);
	}
}

export default Grid;
