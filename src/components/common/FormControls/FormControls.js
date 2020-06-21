import React from 'react';

const FormControl = ({ input, meta, ...props }) => {
	const Element = props.element;
	return (
		<>
			<Element {...input} placeholder={props.placeholder} />
			{meta.error &&
				(input.value.length > 5 ? (
					<span>{meta.error}</span>
				) : (
					meta.touched && <span>{meta.error}</span>
				))}
		</>
	);
};

export const Input = (props) => {
	return <FormControl element="input" {...props} />;
};
export const Textarea = (props) => (
	<FormControl element="textarea" {...props} />
);
