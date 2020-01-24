import styled, { css } from 'styled-components';

const TopToolbarContainer = styled.div`${(props) => props.disabled && css`display: none;`};`;

export { TopToolbarContainer };
