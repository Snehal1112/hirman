import React from 'react';
import { TopToolbarContainer } from '../styled/TopToolbar';

const TopToolbar = (props) => {
	const { disabled = true } = props;
	return <TopToolbarContainer disabled={disabled}>Toolbarrrr</TopToolbarContainer>;
};

export default TopToolbar;
