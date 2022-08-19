import { NextPage } from "next";
import { Layout } from "../components";

const NotFound: NextPage = () => {
	return (
		<Layout>
			<div className="min-h-screen flex items-center justify-center">
				Not found
			</div>
		</Layout>
	);
};

export default NotFound;
