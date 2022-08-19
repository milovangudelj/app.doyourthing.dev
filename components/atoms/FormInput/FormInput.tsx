import { FormElementType } from "../../molecules";

interface FormInputProps {
	type: FormElementType;
	name?: string;
	id?: string;
	className?: string;
}

export const FormInput = ({
	type,
	name = type,
	id = name,
	className,
}: FormInputProps) => {
	return <input type={type} name={name} id={id} className={className} />;
};
