import React from 'react';
import App, { AppPure } from './App';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

describe('App component', () => {
	it('render App', () => {
		const { container } = render(<App />);
		expect(container).toBeInTheDocument();

		const preloader = container.getElementsByClassName('preloader');
		expect(preloader.length).toBe(1);
		expect(preloader[0]).toBeInTheDocument();
	});
});

describe('App initialization test', () => {
	// Индикатор инициализации
	let initialized = false;
	// Функция выполняется после инициализации
	const initializeApp = () => (initialized = true);
	let preloader;
	const TestApp = () => (
		<BrowserRouter>
			<Provider store={store}>
				<AppPure initialized={initialized} initializeApp={initializeApp} />
			</Provider>
		</BrowserRouter>
	);
	it('first render App, before initialization', () => {
		const { container } = render(<TestApp />);
		preloader = container.getElementsByClassName('preloader');
		expect(container).toBeInTheDocument();
		expect(preloader.length).toBe(1);
		expect(preloader[0]).toBeInTheDocument();
	});
	it('second render App, after initialization', () => {
		expect(initialized).toBe(true);
		const { container } = render(<TestApp />);
		expect(container.querySelector('header')).toBeInTheDocument();
		expect(container.querySelector('main')).toBeInTheDocument();
		expect(container.querySelector('aside')).toBeInTheDocument();
		expect(preloader[0]).toBe(undefined)
	});
});
 