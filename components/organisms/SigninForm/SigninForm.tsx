import Link from "next/link";

import { Button, Logo } from "@doyourthing/ui";

import { FormElement } from "../../molecules";

export const SigninForm = () => {
	return (
		<div className="min-w-[300px] w-full max-w-[450px] space-y-8">
			<Logo type="mark" size="lg" />
			<h1 className="text-3xl font-bold leading-[38px]">
				Sign in to doyourthing
			</h1>
			<form>
				<div className="space-y-8 mb-8">
					<FormElement type="email" placeholder="hello@world.com" />
					<FormElement
						type="password"
						placeholder="••••••••••••"
						showForgot
					/>
				</div>
				<Button>Sign in</Button>
				<span className="absolute top-0 right-0 p-6">
					Don&apos;t have an account?{" "}
					<Link href="/signup" passHref>
						<a className="text-primary-500 hover:text-primary-400 active:text-primary-600 transition">
							Sign up
						</a>
					</Link>
				</span>
			</form>
		</div>
	);
};
