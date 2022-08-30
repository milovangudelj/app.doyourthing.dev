import NextLink from "next/link";

import {
	Link,
	Button,
	FormElement,
	AuthDivider,
	GoogleButton,
} from "@doyourthing/ui";

export const SignupForm = () => {
	return (
		<div className="min-w-[300px] w-full max-w-[400px]">
			<h1 className="text-3xl font-bold my-8 leading-[38px]">
				Sign up to doyourthing
			</h1>
			<GoogleButton fullWidth className="my-8">
				Sign up with Google
			</GoogleButton>
			<AuthDivider />
			<form className="space-y-4 my-8">
				<div className="flex space-x-4">
					<FormElement
						type="text"
						name="name"
						label="Name"
						placeholder="Jon Doe"
					/>
					<FormElement
						type="text"
						name="username"
						label="Username"
						placeholder="jondoe"
					/>
				</div>
				<FormElement type="email" />
				<FormElement type="password" />
			</form>
			<div className="space-y-2 my-8">
				<Button fullWidth>Sign up</Button>
				<div className="text-xs text-dark-le dark:text-light-le leading-none ">
					This site is protected by reCAPTCHA and the Google{" "}
					<Link href="https://policies.google.com/privacy">
						Privacy Policy
					</Link>{" "}
					and{" "}
					<Link href="https://policies.google.com/terms">
						Terms of Service
					</Link>{" "}
					apply.
				</div>
			</div>
			<span className="absolute top-0 right-0 p-6">
				Already signed up?{" "}
				<NextLink href="/signin" passHref>
					<Link>Sign in</Link>
				</NextLink>
			</span>
		</div>
	);
};
