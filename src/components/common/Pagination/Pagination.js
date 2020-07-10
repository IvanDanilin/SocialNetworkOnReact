import React, { useState, useEffect } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({
	pageSize,
	currentPage = 1,
	onPageChanged,
	portionSize = 10,
	totalItemsCount,
}) => {
	// Количество страниц расчитывается из общего количества
	// пользователей (totalItemsCount), разделенного на
	// количество пользователей на одной странице (pageSize)
	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	// Создание массива и заполнение его номерами страниц
	// для их отрисовки на странице
	// [1, 2, 3...n] (n = (pagesCount))
	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	// * Данные действия выполняются для отображения большого
	// * кол-ва страниц по частям (portion)
	// Вычисление количества порций на основании общего
	// кол-ва страниц и желаемого размера одной порции
	const portionCount = Math.ceil(pagesCount / portionSize);
	// Вычисление текущей порции для отображения на основании текущей
	// страницы и размера одной порции (например если размер порции
	// 10 и выбрана 14 страница, отобразится 2я порция от 10 до 20)
	const portionNumberCurrentPage = Math.ceil(currentPage / portionSize);
	// State, который хранит номер текущей порции для отображения
	// Задается текущей страницей при ее загрузке или кнопками
	const [portionNumber, setPortionNumber] = useState(portionNumberCurrentPage);
	// Вычисление первого номера в текущей порции
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	// Вычисление последнего номера в текущей порции
	const rightPortionPageNumber = portionNumber * portionSize;
	// Вычисление текущей порции и запись порции в state,
	// при смене страницы.
	useEffect(() => {
		const portionNumberCurrentPage = Math.ceil(currentPage / portionSize);
		setPortionNumber(portionNumberCurrentPage);
	}, [currentPage, portionSize]);
	// *----------------------------------------------------------

	// Отображение пагинации если страниц больше одной
	return pages.length > 1 ? (
		<div className={styles.pagination}>
			{/* Кнопка переключения порции влево */}
			<div className={styles.buttons}>
				{portionNumber > 1 && (
					<>
						<button
							className={styles.firstPageButton}
							onClick={() => {
								onPageChanged(1);
							}}
						></button>
						<button
							className={styles.prevButton}
							onClick={() => {
								onPageChanged(leftPortionPageNumber - 1);
							}}
						></button>
					</>
				)}
			</div>
			{/* Номера страниц */}
			<div className={styles.pageNumbers}>
				{pages
					// Возвращает из всего массива номеров страниц, номера текущей порции
					// выбирая только страницы от первого номера порции до последнего
					.filter(
						(page) =>
							page >= leftPortionPageNumber && page <= rightPortionPageNumber
					)
					.map((page) => (
						<span
							className={currentPage === page ? styles.selectedPage : ''}
							onClick={currentPage !== page ? () => onPageChanged(page) : null}
							key={page}
						>
							{page}
						</span>
					))}
			</div>
			{/* Кнопка переключения порции вправо */}
			<div className={styles.buttons}>
				{portionCount > portionNumber && (
					<>
						<button
							className={styles.nextButton}
							onClick={() => {
								onPageChanged(rightPortionPageNumber + 1);
							}}
						></button>
						<button
							className={styles.endPageButton}
							onClick={() => {
								onPageChanged(pagesCount);
							}}
						></button>
					</>
				)}
			</div>
		</div>
	) : (
		''
	);
};

export default Pagination;
