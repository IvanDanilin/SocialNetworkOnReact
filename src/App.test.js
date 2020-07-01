import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

describe('App component', () => {
	test('render App', () => {
		const { container } = render(<App />);
		expect(container).toBeInTheDocument();
	});
	test('App show preloder', () => {
		const { container } = render(<App />);
		const preloader = container.getElementsByClassName('preloader')[0];
		expect(preloader).toBeInTheDocument();
	});
});
