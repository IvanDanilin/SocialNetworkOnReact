import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination tests', () => {
	it('if portion count is 10, numbers pages max should be 10', () => {
		const { container } = render(
			<Pagination pageSize={1} totalItemsCount={15} portionSize={10} />
		);
		const spans = container.getElementsByTagName('span');
		expect(spans.length <= 10).toBe(true);
	});
	it('if pages count is 5, numbers pages should be 5', () => {
		const { container } = render(
			<Pagination pageSize={1} totalItemsCount={5} portionSize={10} />
		);
		const spans = container.getElementsByTagName('span');
		expect(spans.length === 5).toBe(true);
	});
	it('if pages count count is 1, numbers pages should not be', () => {
		const { container } = render(
			<Pagination pageSize={1} totalItemsCount={1} portionSize={10} />
		);
		const spans = container.getElementsByTagName('span');
		expect(spans.length === 0).toBe(true);
	});
	it('if pages count more than 10, next button should be shown', () => {
		const { getByText } = render(
			<Pagination pageSize={1} totalItemsCount={15} portionSize={10} />
		);
		const buttonNext = getByText('Next');
		expect(buttonNext).toBeInTheDocument();
	});
	it('if pages count <= 10, buttons should not be shown', () => {
		const { container } = render(
			<Pagination pageSize={1} totalItemsCount={10} portionSize={10} />
		);
		const buttons = container.getElementsByTagName('button');
		expect(buttons.length === 0).toBe(true);
	});
	it('if current page more than portion size, prev button should be shown', () => {
		const { getByText } = render(
			<Pagination
				currentPage={12}
				pageSize={1}
				totalItemsCount={15}
				portionSize={10}
			/>
		);
		const buttonNext = getByText('Prev');
		expect(buttonNext).toBeInTheDocument();
	});
});
