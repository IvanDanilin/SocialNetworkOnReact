import React, { useState } from 'react';
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
	// *----------------------------------------------------------

	// Отображение пагинации если страниц больше одной
	return pages.length > 1 ? (
		<div className={styles.pagination}>
			{/* Кнопка переключения порции влево */}
			{portionNumber > 1 && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber - 1);
					}}
				>
					Prev
				</button>
			)}
			{/* Номера страниц */}
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
						onClick={() => onPageChanged(page)}
						key={page}
					>
						{page}
					</span>
				))}
			{/* Кнопка переключения порции вправо */}
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
