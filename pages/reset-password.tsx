import { useEffect, useState } from "react";
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

	// If there is no user, do nothing.
	return {
		props: {
			access_token: req.cookies["sb-access-token"],
		},
	};
};

const ResetPassword = ({
	access_token,
}: {
	access_token: string | undefined;
}) => {
	const [token, setToken] = useState<string | undefined>(access_token);

	useEffect(() => {
		if (access_token) return;

		var params = window.location.hash
			.substring(1)
			.split("&")
			.reduce((res: { [key: string]: string }, item) => {
				const parts = item.split("=");
				res[parts[0]] = parts[1];
				return res;
			}, {});

		if (params?.type === "recovery") setToken(params?.access_token);
	}, []);

	return (
		<AuthLayout>
			<Head>
				<title>Reset password | doyourthing</title>
				<meta
					name="description"
					content="Manager web app for doyourthing configurations"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AuthForm view="reset" token={token} />
		</AuthLayout>
	);
};

export default ResetPassword;
