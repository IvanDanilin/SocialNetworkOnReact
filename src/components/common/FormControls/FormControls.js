import React from 'react';

// Компонент возвращающий поле для ввода, применяется в Field
// Принимает данные ввода и мета-данные (ошибки и тд.)
const FormControl = ({ input, meta, ...props }) => {
	// Принимает в пропсах нужное поле ввода (input, textarea...)
	const Element = props.element;
	return (
		<>
			{/* Создание поля ввода и передача в него данных */}
			<Element
				{...input}
				placeholder={props.placeholder}
				autoFocus={props.autoFocus}
				maxLength={props.maxLength}
			/>
			{/* Вывод на основании ошибок валидации */}
			{meta.error &&
				// Если есть ошибка и введено больше 5 символов, выводит ошибку
				(input.value.length > 5 ? (
					<span>{meta.error}</span>
				) : (
					// Если есть ошибка, но символов меньше 5, выводит ошибку когда поле было затронуто
					meta.touched && <span>{meta.error}</span>
				))}
		</>
	);
};

// Компоненты для создания конкретных полей ввода
export const Input = (props) => {
	return <FormControl element='input' {...props} />;
};
export const Textarea = (props) => (
	<FormControl element='textarea' {...props} />
);
