import React from 'react';
import { TH, Title, SortContainer } from '../styled/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const ColumnHeader = (props) => {
	const { header, sortBy = undefined } = props;
	const sortable = header.sortable ? true : false;

	return (
		<TH header={header}>
			<Title sortable={sortable}>
				<span>{header.name}</span>
				{sortable ? (
					<SortContainer defaultSortBy={sortBy === header.dataIndex}>
						<FontAwesomeIcon icon={faSort} color={'#adadad'} />
					</SortContainer>
				) : (
					''
				)}
			</Title>
		</TH>
	);
};

export default ColumnHeader;
