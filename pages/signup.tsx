import Head from "next/head";
import { AuthForm, AuthLayout } from "../components/layouts";

const Signup = () => {
	return (
		<AuthLayout>
			<Head>
				<title>Sign Up | doyourthing</title>
				<meta
					name="description"
					content="Manager web app for doyourthing configurations"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AuthForm view="signup" />
		</AuthLayout>
	);
};

export default Signup;
