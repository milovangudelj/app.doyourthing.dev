import NextLink from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link, Button, FormElement, AuthDivider } from "@doyourthing/ui";

import { FormElementError } from "../../atoms";
import { useAuth } from "../../../lib/auth";

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
	const auth = useAuth();

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

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const res = await auth?.signUpWithEmail(data);

		console.log(res);
	};

	// console.log(watch("username")); // To be used when checking for a valid username

	return (
		<div className="min-w-[300px] w-full max-w-[400px]">
			<h1 className="text-3xl font-bold my-8 leading-[38px]">
				Sign up to doyourthing
			</h1>
			<div className="flex space-x-4 h-min">
				<Button color="zinc" fullWidth title="Sign up with Google">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 0 256 262"
						preserveAspectRatio="xMidYMid"
					>
						<path
							d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
							fill="#4285F4"
						/>
						<path
							d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
							fill="#34A853"
						/>
						<path
							d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
							fill="#FBBC05"
						/>
						<path
							d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
							fill="#EB4335"
						/>
					</svg>
				</Button>
				<Button color="zinc" fullWidth title="Sign up with GitHub">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 32.58 31.77"
						fill="gray"
						className="text-[#000000]"
						height={24}
					>
						<path
							fill="currentColor"
							d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"
						/>
					</svg>
				</Button>
			</div>
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
