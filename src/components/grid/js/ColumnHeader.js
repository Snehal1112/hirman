import React from 'react';
import { TH, Title, SortContainer } from '../styled/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort,faSortUp,faSortDown } from '@fortawesome/free-solid-svg-icons';

const ColumnHeader = (props) => {
	const { header, sort = {} } = props;
	const sortable = header.sortable ? true : false;

	const onClickTitle= ()=> {
		props.onClickHeader(header)
	};
	return (
		<TH header={header}>
			<Title sortable={sortable} onClick={onClickTitle}>
				<span>{header.name}</span>
				{sortable ? (
					<SortContainer sortedField={sort.filed === header.dataIndex}>
						<FontAwesomeIcon icon={sort.dire === undefined || sort.filed !== header.dataIndex? faSort : sort.dire === "ASC" ? faSortUp : faSortDown} color={'#000000'} />
					</SortContainer>
				) : (
					''
				)}
			</Title>
		</TH>
	);
};

export default ColumnHeader;
