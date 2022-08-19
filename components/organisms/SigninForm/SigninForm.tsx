import Link from "next/link";

import { Button, Logo } from "../../atoms";

export const SigninForm = () => {
	return (
		<div className="min-w-[300px] w-full max-w-[450px]">
			<Logo />
			<h1 className="text-3xl font-bold leading-[38px]">
				Sign in to doyourthing
			</h1>
			<form className="mt-8">
				<span className="absolute top-0 right-0 p-6">
					Don&apos;t have an account?{" "}
					<Link href="/signup" passHref>
						<a className="text-primary-500 hover:text-primary-400 active:text-primary-600 transition">
							Sign up
						</a>
					</Link>
				</span>
				<div className="space-y-4 mb-4">
					<div className="flex flex-col">
						<label htmlFor="email" className="mb-2">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="form-input"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="password" className="mb-2">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							className="form-input"
						/>
					</div>
				</div>
				<div className="flex justify-between mb-4">
					<div>
						<input
							type="checkbox"
							name="remember"
							id="remember"
							className="form-checkbox"
						/>
						<label htmlFor="remember">Remember me</label>
					</div>
					<Link href="/forgot-password">Forgot your password?</Link>
				</div>
				<Button>Sign in</Button>
			</form>
		</div>
	);
};
