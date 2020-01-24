import React, { PureComponent } from 'react';
import TopToolbar from './TopToolbar';
import { Td, TH } from '../styled/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

class Grid extends PureComponent {
	createHeader() {
		const { columns = [] } = this.props;
		return columns.map((header, index) => {
			return (
				<TH key={index} header={header}>
					<span>{header.name}</span>
					{header.sortable ? (
						<span>
							<FontAwesomeIcon icon={faSort} />
						</span>
					) : (
						''
					)}
				</TH>
			);
		});
	}

	createRows(data) {
		const { columns = [] } = this.props;
		const rows = data.map((row) => {
			return <tr key={row.id}>{columns.map((col) => <Td>{row[col.dataIndex]}</Td>)}</tr>;
		});
		return [ ...rows ];
	}

	rowRender(data) {
		return this.createRows(data);
	}

	render() {
		const { topBar = {} } = this.props;
		return (
			<div>
				<TopToolbar {...topBar} />
				<table style={{ border: '1px solid #d3d3d3' }} width="100%">
					<thead>
						<tr>{this.createHeader()}</tr>
					</thead>
					<tbody>{this.rowRender([])}</tbody>
				</table>
			</div>
		);
	}
}

export default Grid;
