import React from 'react';
import loadingImage from '../../../assets/image/preloader.svg';

const Preloader = (props) => {
	return (
		<div style={{ position: ' relative' }}>
			<img
				src={loadingImage}
				style={{
					position: ' absolute',
					left: ' 0',
					right: ' 0',
					top: ' 0',
					bottom: ' 0',
					margin: ' 25vh auto',
				}}
				alt=""
			/>
		</div>
	);
};

export default Preloader;
