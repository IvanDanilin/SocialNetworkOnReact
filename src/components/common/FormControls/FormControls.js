import React, { useEffect, useState } from 'react';
import styles from './FormControls.module.scss';
import cn from 'classnames';

// Компонент возвращающий поле для ввода, применяется в Field
// Принимает данные ввода и мета-данные (ошибки и тд.)
const FormControl = ({ error, touched, serverError, ...props }) => {
	// Принимает в пропсах нужное поле ввода (input, textarea...)
	const Element = props.element;

	const [errorStyle, setErrorStyle] = useState(false);
	useEffect(() => {
		let errorStyleTimeout;
		if (error && touched) {
			setErrorStyle(true);
			errorStyleTimeout = setTimeout(() => {
				setErrorStyle(false);
			}, 1000);
		}
		return () => clearTimeout(errorStyleTimeout);
	}, [error, touched]);

	useEffect(() => {
		let errorStyleTimeout;
		if (serverError) {
			setErrorStyle(true);
			errorStyleTimeout = setTimeout(() => {
				setErrorStyle(false);
			}, 1000);
		}
		return () => clearTimeout(errorStyleTimeout);
	}, [serverError]);

	return (
		<Element
			{...props}
			className={cn([styles.defaultElement], {
				[styles.error]: errorStyle,
			})}
		/>
	);
};

// Компоненты для создания конкретных полей ввода
export const Input = (props) => {
	return <FormControl element='input' {...props} />;
};
export const Textarea = (props) => (
	<FormControl element='textarea' {...props} />
);
