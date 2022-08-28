import { SideMenu } from "../../organisms";

export const Layout = ({ children }: { children: any }) => {
	return (
		<div className="bg-zinc-900 text-white min-h-screen">
			<SideMenu />
			{children}
		</div>
	);
};
