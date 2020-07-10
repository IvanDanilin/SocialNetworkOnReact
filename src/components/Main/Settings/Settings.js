import React from 'react';
import s from './Settings.module.scss';
import PageInDevelopment from '../../common/PageInDevelopment/PageInDevelopment';
import useScrollToTop from '../../../utilities/useScrollToTop';

const Settings = () => {
	useScrollToTop()
	return (
		<div className={s.settings}>
			<PageInDevelopment />
		</div>
	);
};

export default Settings;
