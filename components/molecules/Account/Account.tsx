import { SignOut } from "phosphor-react";

import { Button, IconButton } from "@doyourthing/ui";

import { useAuth } from "../../../lib/auth";

export const Account = () => {
	const auth = useAuth();

	return (
		<div className="w-full flex justify-between items-center border-t border-zinc-600 pt-6 px-2 space-x-2">
			<div className="w-8 h-8 bg-zinc-700 rounded-full"></div>
			<div className="flex flex-col flex-1">
				<span className="text-light-he text-sm font-medium leading-5">
					{auth?.user?.name ?? "Hello Example"}
				</span>
				<span className="text-light-le text-xs leading-[18px]">
					@{auth?.user?.username ?? "helloexample"}
				</span>
			</div>
			<IconButton
				color="accent"
				size="sm"
				onClick={auth?.signOut}
				variant="text"
				icon={SignOut}
			/>
		</div>
	);
};
