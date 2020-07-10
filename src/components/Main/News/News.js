import React from 'react';
import s from './News.module.scss';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import PageInDevelopment from '../../common/PageInDevelopment/PageInDevelopment';
import useScrollToTop from '../../../utilities/useScrollToTop';

const News = () => {
	useScrollToTop()
	return (
		<div className={s.news}>
			<PageInDevelopment />
		</div>
	);
};

export default withAuthRedirect(News);
