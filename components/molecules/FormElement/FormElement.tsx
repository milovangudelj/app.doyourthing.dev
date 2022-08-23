import { default as NextLink } from "next/link";
import { Link } from "@doyourthing/ui";

import { FormInput, FormLabel } from "../../atoms";

export type FormElementType = "email" | "password" | "text" | "checkbox";

interface FormElementProps {
	type: FormElementType;
	name?: string;
	label?: string;
	id?: string;
	placeholder?: string;
	className?: string;
	showForgot?: boolean;
}

const defaultNames: { [Key in FormElementType]: string } = {
	email: "Email",
	password: "Password",
	text: "Text",
	checkbox: "Checkbox",
};

type FormInputCategory =
	| "input"
	| "textarea"
	| "select"
	| "multiselect"
	| "checkbox"
	| "radio";

const classes: {
	[Key in FormInputCategory]: {
		wrapper: string;
		input: string;
		label: string;
	};
} = {
	input: {
		wrapper: "flex flex-col",
		input: "form-input rounded bg-transparent focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
		label: "mb-2 font-bold",
	},
	textarea: {
		wrapper: "flex flex-col",
		input: "form-textarea rounded bg-transparent",
		label: "mb-2 font-bold",
	},
	select: {
		wrapper: "flex items-center",
		input: "order-first form-select rounded bg-transparent",
		label: "ml-2 font-bold",
	},
	multiselect: {
		wrapper: "flex items-center",
		input: "order-first form-multiselect rounded bg-transparent",
		label: "ml-2 font-bold",
	},
	checkbox: {
		wrapper: "flex items-center",
		input: "order-first form-checkbox rounded bg-transparent",
		label: "ml-2 font-bold",
	},
	radio: {
		wrapper: "flex items-center",
		input: "order-first form-radio rounded bg-transparent",
		label: "ml-2 font-bold",
	},
};

type TypeCategoryMap = {
	[Key in FormElementType]: FormInputCategory;
};

const typeCategoryMap: TypeCategoryMap = {
	email: "input",
	password: "input",
	text: "input",
	checkbox: "checkbox",
};

export const FormElement = ({
	type,
	name = defaultNames[type],
	label = name,
	id = name,
	placeholder = name,
	className,
	showForgot = false,
}: FormElementProps) => {
	return (
		<div className={className ?? classes[typeCategoryMap[type]].wrapper}>
			<div className="flex justify-between">
				<FormLabel
					htmlFor={id}
					label={label}
					className={classes[typeCategoryMap[type]].label}
				/>
				{type === "password" && showForgot && (
					<NextLink href="/forgot-password" passHref>
						<Link>Forgot password?</Link>
					</NextLink>
				)}
			</div>
			<FormInput
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				className={classes[typeCategoryMap[type]].input}
			/>
		</div>
	);
};
