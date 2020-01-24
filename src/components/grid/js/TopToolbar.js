import React from 'react';
import { TopToolbarContainer } from '../styled/TopToolbar';

const TopToolbar = (props) => {
	const { disabled = true } = props;
	return (
		<TopToolbarContainer disabled={disabled}>
			<button>asdasdasd</button>
		</TopToolbarContainer>
	);
};

export default TopToolbar;
