import { Logo } from "@doyourthing/ui";

import { Account } from "../../molecules";

export const SideMenu = () => {
	return (
		<aside className="min-h-screen h-full relative w-[300px] px-4 py-8">
			<Logo size="md" type="short" />
			{/* <SearchBar /> */}
			{/* <SideNav /> */}
			{/* <AdSquare /> */}
			{/* <Divider /> */}
			<Account />
		</aside>
	);
};
