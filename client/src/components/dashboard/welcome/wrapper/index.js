import React from 'react';

import './index.scss';

const WelcomeWrapper = ({children}) => {
	return (
		<div className='dashboard-welcome'>
			{children}
		</div>
	);
}

export default WelcomeWrapper;