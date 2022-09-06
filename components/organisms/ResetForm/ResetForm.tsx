import NextLink from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, FormElement, AuthDivider } from "@doyourthing/ui";
import { useAuth } from "../../../lib/auth";
import { FormElementError } from "../../atoms";
import { useState } from "react";

type Inputs = {
	password: string;
	passwordConfirm: string;
};

const schema = yup
	.object()
	.shape({
		password: yup
			.string()
			.required("This field is required.")
			.min(8, "The password must be at least 8 characters long.")
			.max(24, "The password must be at most 24 characters long."),

		passwordConfirm: yup
			.string()
			.required("This field is required.")
			.min(8, "The password must be at least 8 characters long.")
			.max(24, "The password must be at most 24 characters long.")
			.oneOf([yup.ref("password"), null], "Both passwords must match."),
	})
	.required();

export const ResetForm = ({ token }: { token?: string }) => {
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
		console.log({ data, token });
		if (!token) return;
		const res = await auth?.resetPassword(token, data.password);

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
					<h1 className="text-3xl font-bold my-8 leading-[38px]">
						Reset your password
					</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="space-y-4 mb-8">
							<FormElement type="password" {...register("password")} />
							{errors.password?.message && (
								<FormElementError message={errors.password.message} />
							)}
							<FormElement
								type="password"
								label="Confirm password"
								{...register("passwordConfirm")}
							/>
							{errors.passwordConfirm?.message && (
								<FormElementError
									message={errors.passwordConfirm.message}
								/>
							)}
						</div>
						<Button disabled={!isDirty || !isValid} fullWidth>
							Reset password
						</Button>
					</form>
				</>
			)}
			{isSubmitted && !error && (
				<>
					<h1 className="text-3xl font-bold my-8 leading-[38px]">
						Password reset successfully!
					</h1>
					<p>You can go back and sign in with the new credentials.</p>
					<NextLink href="/signin" passHref>
						<a className="w-fit inline-block mt-8">
							<Button>Sign in</Button>
						</a>
					</NextLink>
				</>
			)}
		</div>
	);
};
