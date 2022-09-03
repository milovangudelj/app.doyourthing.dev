import NextLink from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
	Link,
	Button,
	FormElement,
	AuthDivider,
	GoogleButton,
} from "@doyourthing/ui";

import { FormElementError } from "../../atoms";

type Inputs = {
	name: string;
	username: string;
	email: string;
	password: string;
};

const schema = yup
	.object()
	.shape({
		name: yup.string().required("This field is required."),
		username: yup.string().required("This field is required."),
		email: yup
			.string()
			.required("This field is required.")
			.email("This needs to be a valid email."),
		password: yup
			.string()
			.required("This field is required.")
			.min(8, "The password must be at least 8 characters long.")
			.max(24, "The password must be at most 24 characters long."),
	})
	.required();

export const SignupForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isDirty, isValid },
	} = useForm<Inputs>({
		mode: "onTouched",
		reValidateMode: "onBlur",
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	// console.log(watch("username")); // To be used when checking for a valid username

	return (
		<div className="min-w-[300px] w-full max-w-[400px]">
			<h1 className="text-3xl font-bold my-8 leading-[38px]">
				Sign up to doyourthing
			</h1>
			<GoogleButton fullWidth className="my-8">
				Sign up with Google
			</GoogleButton>
			<AuthDivider />
			<form onSubmit={handleSubmit(onSubmit)} className="my-8">
				<div className="flex space-x-4">
					<div>
						<FormElement
							type="text"
							label="Name"
							placeholder="Jon Doe"
							{...register("name")}
						/>
						{errors.name?.message && (
							<FormElementError message={errors.name.message} />
						)}
					</div>
					<div>
						<FormElement
							type="text"
							{...register("username")}
							label="Username"
							placeholder="jondoe"
						/>
						{errors.username?.message && (
							<FormElementError message={errors.username.message} />
						)}
					</div>
				</div>
				<div className="mt-4 space-y-4">
					<FormElement type="email" {...register("email")} />
					{errors.email?.message && (
						<FormElementError message={errors.email.message} />
					)}
					<FormElement type="password" {...register("password")} />
					{errors.password?.message && (
						<FormElementError message={errors.password.message} />
					)}
				</div>
				<Button
					fullWidth
					type="submit"
					className="mt-8 mb-2"
					disabled={!isDirty || !isValid}
				>
					Sign up
				</Button>
				<div className="text-xs text-dark-le dark:text-light-le leading-none">
					This site is protected by reCAPTCHA and the Google{" "}
					<Link
						href="https://policies.google.com/privacy"
						target="_blank"
						rel="noreferrer"
					>
						Privacy Policy
					</Link>{" "}
					and{" "}
					<Link
						href="https://policies.google.com/terms"
						target="_blank"
						rel="noreferrer"
					>
						Terms of Service
					</Link>{" "}
					apply.
				</div>
			</form>
			<span className="absolute top-0 right-0 p-6">
				Already signed up?{" "}
				<NextLink href="/signin" passHref>
					<Link>Sign in</Link>
				</NextLink>
			</span>
		</div>
	);
};;;;
