import styled from 'styled-components';

const Td = styled.td`width: 100px;`;
const TH = styled.th`
	width: ${({ header }) => (header.width ? `${header.width}px` : '180px')};
	padding: 0;
	text-align: left;
`;

export { Td, TH };
