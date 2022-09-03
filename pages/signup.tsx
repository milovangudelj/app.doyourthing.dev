import { GetServerSidePropsContext } from "next";
import Head from "next/head";

import { supabase } from "../lib/supabase";

import { AuthForm, AuthLayout } from "../components/layouts";

export const getServerSideProps = async ({
	req,
}: GetServerSidePropsContext) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	if (user) {
		// If there is a user, redirect to index and pass it.
		return {
			props: { user },
			redirect: { destination: "/", permanent: false },
		};
	}

	// If there no user, do nothing.
	return { props: {} };
};

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
