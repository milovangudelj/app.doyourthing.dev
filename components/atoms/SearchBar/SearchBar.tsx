import { MagnifyingGlass } from "phosphor-react";

export const SearchBar = () => {
	return (
		<div className="bg-zinc-800 rounded p-2 space-x-1.5 flex items-center">
			<MagnifyingGlass width={20} height={20} className="text-zinc-50" />
			<span className="text-base leading-5 text-zinc-400">Search...</span>
		</div>
	);
};
