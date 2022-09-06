import NextLink from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link, Button, FormElement, AuthDivider } from "@doyourthing/ui";
import { useAuth } from "../../../lib/auth";
import { FormElementError } from "../../atoms";
import { useState } from "react";

type Inputs = {
	email: string;
};

const schema = yup
	.object()
	.shape({
		email: yup
			.string()
			.required("This field is required.")
			.email("This needs to be a valid email."),
	})
	.required();

export const ForgotForm = () => {
	const [error, setError] = useState<boolean>(false);
	const auth = useAuth();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isDirty, isValid, isSubmitted },
	} = useForm<Inputs>({
		mode: "onTouched",
		reValidateMode: "onBlur",
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const res = await auth?.sendResetLink(data.email);

		if (res?.error) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div className="min-w-[300px] w-full max-w-[400px]">
			{!isSubmitted && !error && (
				<>
					<h1 className="text-3xl font-bold mb-4 leading-[38px]">
						Forgot your password?
					</h1>
					<p className="text-dark-me dark:text-light-me mb-8">
						Enter the email associated with your account and we&apos;ll
						send you a link to reset your password.
					</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="space-y-4 mb-8">
							<FormElement type="email" {...register("email")} />
							{errors.email?.message && (
								<FormElementError message={errors.email.message} />
							)}
						</div>
						<Button disabled={!isDirty || !isValid} fullWidth>
							Send reset email
						</Button>
					</form>
				</>
			)}
			{isSubmitted && !error && (
				<>
					<h1 className="text-3xl font-bold my-8 leading-[38px]">
						Password reset link sent!
					</h1>
					<p>
						Check your email, we&apos;ve sent you a password reset link.
					</p>
				</>
			)}
		</div>
	);
};
