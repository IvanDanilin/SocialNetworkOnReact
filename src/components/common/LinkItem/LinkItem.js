import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LinkItem.module.scss';
import cn from 'classnames';

const LinkItem = ({ to, linkName, onClick, activeClassName, className }) => (
	<NavLink
		to={to}
		onClick={onClick}
		className={className}
		activeClassName={cn(activeClassName, styles.active)}
	>
		{linkName}
	</NavLink>
);

export default LinkItem;
