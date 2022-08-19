interface FormLabelProps {
	htmlFor: string;
	label: string;
	className?: string;
}

export const FormLabel = ({ htmlFor, label, className }: FormLabelProps) => {
	return (
		<label htmlFor={htmlFor} className={className}>
			{label}
		</label>
	);
};
