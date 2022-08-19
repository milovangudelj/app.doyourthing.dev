import Link from "next/link";

import { Button, Logo } from "../../atoms";
import { FormElement } from "../../molecules";

export const SignupForm = () => {
	return (
		<div className="min-w-[300px] w-full max-w-[450px] space-y-8">
			<Logo type="mark" size="lg" />
			<h1 className="text-3xl font-bold leading-[38px]">
				Sign up to doyourthing
			</h1>
			<form>
				<div className="space-y-8 mb-8">
					<FormElement type="email" />
					<FormElement type="password" />
				</div>
				<Button>Sign up</Button>
				<span className="absolute top-0 right-0 p-6">
					Already have an account?{" "}
					<Link href="/signin" passHref>
						<a className="text-primary-500 hover:text-primary-400 active:text-primary-600 transition">
							Sign in
						</a>
					</Link>
				</span>
			</form>
		</div>
	);
};
