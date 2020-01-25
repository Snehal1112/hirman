import styled from 'styled-components';

const TH = styled.th`
	width: ${({ header }) => (header.width ? `${header.width}px` : '190px')};
	text-align: left;
`;

const Title = styled.div`
	cursor: ${(props) => (props.sortable ? 'pointer' : 'default')};
	border: 1px solid #fff;
	border-color: #e6e6e6;
	background-color: #f8f8f8;
	display: inline-block;
	border-radius: 2px;
	padding: 1px 6px;
	font-size: 14px;
	font-weight: normal;
	user-select: none;
`;

const SortContainer = styled.span`
	padding: 0px 3px 0px 5px;

	display: ${(props) => (props.sortedField ? 'inline' : 'none')};
	${TH}:hover & {
		display: inline;
	}
`;

export { TH, Title, SortContainer };
