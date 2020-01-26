import React from 'react';
import { TH, Title, SortContainer } from '../styled/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort,faSortUp,faSortDown } from '@fortawesome/free-solid-svg-icons';

const ColumnHeader = (props) => {
	const { header, sort = {} } = props;
	const sortable = header.sortable === true;

	const onClickTitle= ()=> props.onClickHeader(header);

	const onKeyDownHandler = (e)=>{
		if(e.key === "Enter") {
			props.onApplyFilter(header.dataIndex, e.target.value)
		}
	};

	const onInputFieldChange = (e)=>{
		let value = e.target.value;
		if(value.length === 0) {

		}
	};

	const createFilterComp=(header)=>{
		const {editor={type:undefined}}= header;
		switch (editor.type) {
			case "select":
				return <select
					onChange={(e)=>props.onApplyFilter(header.dataIndex,e.target.value)}>
					<option value={"dummy"}>Select item...</option>
					{

						editor.options.map((opt,index) => <option key={index} value={opt}>{opt}</option>)
					}
				</select>;
			case "input":
			default:
				return <input
					type={"text"}
					placeholder={editor.placeholder}
					onChange={onInputFieldChange}
					onKeyDown={onKeyDownHandler}/>
		}
	};

	return (
		<TH header={header}>
			<Title sortable={sortable} onClick={onClickTitle}>
				<span>{header.name}</span>
				{sortable ? (
					<SortContainer sortedField={sort.field === header.dataIndex}>
						<FontAwesomeIcon icon={sort.dire === undefined || sort.field !== header.dataIndex? faSort : sort.dire === "ASC" ? faSortUp : faSortDown} color={'#000000'} />
					</SortContainer>
				) : (
					''
				)}
			</Title>

			<div style={{height:20}}>
				{
					header.filter && (
						createFilterComp(header)
					)
				}
			</div>

		</TH>
	);
};

export default ColumnHeader;
