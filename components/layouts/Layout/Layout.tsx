import { SideMenu } from "../../organisms";

export const Layout = ({ children }: { children: any }) => {
	return (
		<div className="bg-zinc-900 flex text-white min-h-screen">
			<SideMenu />
			<div className="min-h-screen flex-1 h-full max-h-screen overflow-y-scroll overflow-x-hidden bg-zinc-800">
				{children}
			</div>
		</div>
	);
};
