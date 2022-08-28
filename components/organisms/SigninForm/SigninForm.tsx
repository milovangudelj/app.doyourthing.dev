import NextLink from "next/link";

import { Button, Link, Logo } from "@doyourthing/ui";

import { FormElement } from "@doyourthing/ui";
import { AuthDivider, GoogleButton } from "../../atoms";

export const SigninForm = () => {
	return (
		<div className="min-w-[300px] w-full max-w-[400px]">
			<h1 className="text-3xl font-bold my-8 leading-[38px]">
				Sign in to doyourthing
			</h1>
			<GoogleButton className="my-8">Sign up with Google</GoogleButton>
			<AuthDivider />
			<form>
				<div className="space-y-4 mb-8">
					<FormElement type="email" />
					<FormElement type="password" forgettable />
				</div>
				<Button fullWidth>Sign in</Button>
				<span className="absolute top-0 right-0 p-6">
					Don&apos;t have an account?{" "}
					<NextLink href="/signup" passHref>
						<Link>Sign up</Link>
					</NextLink>
				</span>
			</form>
		</div>
	);
};
