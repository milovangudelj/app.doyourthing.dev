import Head from "next/head";
import { AuthForm, AuthLayout } from "../components/layouts";

const Signin = () => {
	return (
		<AuthLayout>
			<Head>
				<title>Sign In | doyourthing</title>
				<meta
					name="description"
					content="Manager web app for doyourthing configurations"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AuthForm view="signin" />
		</AuthLayout>
	);
};

export default Signin;
