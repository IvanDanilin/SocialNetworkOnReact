import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = (props) => {
	// Массив длиной равной количеству страниц заполненый пустыми значениями
	const pages = new Array(props.pagesCount).fill();

	return (
		<div className={styles.pagination}>
			{pages.map((val, index) => {
				const page = ++index;
				return (
					<span
						className={props.currentPage === page ? styles.selectedPage : ''}
						onClick={() => props.onPageChanged(page)}
						key={page}
					>
						{page}
					</span>
				);
			})}
		</div>
	);
};

export default Pagination;
