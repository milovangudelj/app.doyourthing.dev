import { FormElementType } from "../../molecules";

interface FormInputProps {
	type: FormElementType;
	name?: string;
	id?: string;
	placeholder?: string;
	className?: string;
}

export const FormInput = ({
	type,
	name = type,
	id = name,
	placeholder = name,
	className,
}: FormInputProps) => {
	return (
		<input
			type={type}
			name={name}
			id={id}
			placeholder={placeholder}
			className={className}
		/>
	);
};
