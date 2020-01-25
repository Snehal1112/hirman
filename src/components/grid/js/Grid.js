import React, { PureComponent } from 'react';
import TopToolbar from './TopToolbar';
import Header from './ColumnHeader';

class Grid extends PureComponent {
	constructor(props) {
		super(props);
		this.onHeaderClick = this.onHeaderClick.bind(this);
	}
	onHeaderClick(header){
		if (header.sortable) {
			let { data = [], sorting } = this.props;
			if (sorting.field === header.dataIndex){
				sorting.dire = sorting.dire === "ASC" ? "DEC":"ASC";
			} else {
				sorting = {
					field : header.dataIndex,
					sort:"ASC"
				};
			}
			this.props.sortHandler(data,sorting)
		}
	}
	createHeader() {
		const { columns = [] } = this.props;
		return columns.map((header, index) => <Header key={index} header={header} onClickHeader={this.onHeaderClick} sort={this.props.sorting} />);
	}

	rowRender() {
		const { columns = [], data = [] } = this.props;
		const rows = data.map((row) => {
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
		const { onAfterRender = sorting => {}, sorting} = this.props;
		onAfterRender(sorting);
	}

	render() {
		const { topBar = {} } = this.props;

		return (
			<div>
				<TopToolbar {...topBar} />
				<table>
					<thead>
						<tr>{this.createHeader()}</tr>
					</thead>
					<tbody>{this.rowRender()}</tbody>
				</table>
			</div>
		);
	}
}

export default Grid;
