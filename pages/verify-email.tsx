import { Button } from "@doyourthing/ui";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { AuthLayout } from "../components";

const VerifyEmail: NextPage = (props: any) => {
	return (
		<AuthLayout>
			<Head>
				<title>Verify your email | doyourthing</title>
				<meta
					name="description"
					content="Manager web app for doyourthing configurations"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h1 className="mb-2 font-medium text-4xl">Verify your email</h1>
				<p>Check your email. We have sent you a verification link.</p>
				<Button size="md" className="mt-8">
					<NextLink href="/">Return to home</NextLink>
				</Button>
			</div>
		</AuthLayout>
	);
};

export default VerifyEmail;
