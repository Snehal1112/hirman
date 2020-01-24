import React, { PureComponent } from 'react';
import TopToolbar from './TopToolbar';
import Header from './ColumnHeader';

class Grid extends PureComponent {
	constructor(props) {
		super(props);

		const { defaultSorting: { filed = undefined, dire = 'ASC' } } = this.props;

		this.state = {
			sortBy: {
				filed: filed ? filed : undefined,
				dire: dire ? dire : 'ASC'
			}
		};
	}
	createHeader() {
		const { columns = [] } = this.props;
		return columns.map((header, index) => <Header key={index} header={header} sortBy={this.state.sortBy} />);
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
		const { onAfterRender = () => {}, defaultSorting = undefined } = this.props;
		onAfterRender(defaultSorting);
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
