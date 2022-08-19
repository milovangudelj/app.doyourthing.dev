import type { NextPage } from 'next'
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>dyt — Manager</title>
				<meta
					name="description"
					content="Manager web app for doyourthing configurations"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex items-center justify-center min-h-screen">
				<h1>Exciting times ahead!</h1>
			</main>
		</div>
	);
};

export default Home
