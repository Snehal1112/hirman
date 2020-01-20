import React, { PureComponent } from 'react';

class Grid extends PureComponent {
	constructor(props) {
		super(props);
	}

	/**
     *
     */
	createHeader(headers) {
		return headers.map((header) => {
			return (
				<th key={header.name}>
					<span>{header.name}</span>
				</th>
			);
		});
	}

	/**
   *
   */
	createRows(data) {
		let i = 0;

		const rows = data.map((row) => {
			return <tr key={row.id}>{this.props.columns.map((col) => <td>{row[col.dataIndex]}</td>)}</tr>;
		});
		return [ ...rows ];
	}

	/**
   *
   */
	rowRender(data) {
		return this.createRows(data);
	}

	/**
   *
   */
	renderGrid() {
		const header = this.createHeader(this.props.columns);
		const rows = this.rowRender([]);
		return [ ...header, ...rows ];
	}

	/**
   *
   */
	render() {
		return <table>{this.renderGrid()}</table>;
	}
}

export default Grid;
