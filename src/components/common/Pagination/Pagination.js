import React, { useState } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({
	pageSize,
	currentPage = 1,
	onPageChanged,
	portionSize = 10,
	totalItemsCount,
}) => {
	// Количество страниц
	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	// Массив длина которого равна количеству страниц,
	// заполненый пустыми значениями
	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const portionNumberCurrentPage = Math.ceil(currentPage / portionSize);
	const [portionNumber, setPortionNumber] = useState(portionNumberCurrentPage);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	return pages.length > 1 ? (
		<div className={styles.pagination}>
			{portionNumber > 1 && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber - 1);
					}}
				>
					Prev
				</button>
			)}
			{pages
				.filter(
					(page) =>
						page >= leftPortionPageNumber && page <= rightPortionPageNumber
				)
				.map((page) => {
					return (
						<span
							className={currentPage === page ? styles.selectedPage : ''}
							onClick={() => onPageChanged(page)}
							key={page}
						>
							{page}
						</span>
					);
				})}
			{portionCount > portionNumber && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber + 1);
					}}
				>
					Next
				</button>
			)}
		</div>
	) : (
		''
	);
};

export default Pagination;
