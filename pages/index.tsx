import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";

import { Layout } from "../components/layouts";

import { supabase } from "../lib/supabase";

export const getServerSideProps = async ({
	req,
}: GetServerSidePropsContext) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	if (!user) {
		// If no user, redirect to index.
		return {
			props: {},
			redirect: { destination: "/signin", permanent: false },
		};
	}

	// If there is a user, return it.
	return { props: { user } };
};

const Home: NextPage = (props: any) => {
	return (
		<Layout>
			<Head>
				<title>dyt — Manager</title>
				<meta
					name="description"
					content="Manager web app for doyourthing configurations"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex items-center justify-center">
				<h1>Exciting times ahead!</h1>
			</main>
		</Layout>
	);
};

export default Home;
