import React from 'react';
import ProfileStatus from './ProfileStatus';
import { render, screen } from '@testing-library/react';

const someStatus = 'some status';
const enterStatusTitle = 'Double click to change your status';

describe('ProfileStatus component', () => {
	it('render of my profile without status text', () => {
		const { getByText } = render(<ProfileStatus isMyProfile={true} />);
		const enterStatusElement = getByText('Enter your status...');
		expect(enterStatusElement).toBeInTheDocument();
		// Элемент статуса имеет title с подсказкой для изменения статуса
		expect(enterStatusElement.title).toBe(enterStatusTitle);
	});

	it('render of someone else’s profile without status text', () => {
		const { container } = render(<ProfileStatus />);
		// В чужом профиле, при отсутствии статуса,
		// компонент статуса так же отсутствует (является пустым)
		expect(container).toBeEmptyDOMElement();
	});

	it('render with status text', () => {
		const { getByText } = render(<ProfileStatus status={someStatus} />);
		// При передаче статуса через props, статус отображается
		// в виде текста
		expect(getByText(someStatus)).toBeInTheDocument();
	});

	it('render my profile with status text', () => {
		const { getByText } = render(
			<ProfileStatus status={someStatus} isMyProfile={true} />
		);
		const statusElement = getByText(someStatus);
		// В профиле пользователя с имеющимся текстом статуса,
		// елемент статуса имеет title с подсказкой для изменения статуса
		expect(statusElement.title).toBe(enterStatusTitle);
	});
});
