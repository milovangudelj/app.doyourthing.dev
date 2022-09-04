import { Logo } from "@doyourthing/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { Desktop, Gauge, Gear, Play, Sliders } from "phosphor-react";
import { AdBox, SearchBar } from "../../atoms";

import { Account, SideNav } from "../../molecules";

const navLinks = [
	{
		id: "nl_01",
		label: "Dashboard",
		href: "/dashboard",
		icon: Gauge,
	},
	{
		id: "nl_02",
		label: "Systems",
		href: "/systems",
		icon: Desktop,
	},
	{
		id: "nl_03",
		label: "Configurations",
		href: "/configurations",
		icon: Sliders,
	},
	{
		id: "nl_04",
		label: "Actions",
		href: "/actions",
		icon: Play,
	},
	{
		id: "nl_05",
		label: "Settings",
		href: "/settings",
		icon: Gear,
	},
];

export const SideMenu = () => {
	const { pathname } = useRouter();
	return (
		<aside className="min-h-screen h-full relative w-[300px] px-4 py-8 space-y-6">
			<div className="px-2">
				<Link href="/" passHref>
					<a className="cursor-pointer w-min block">
						<Logo size="md" type="short" />
					</a>
				</Link>
			</div>
			<div className="px-2">
				<SearchBar />
			</div>
			<SideNav>
				{navLinks.map((link) => (
					<SideNav.Link
						key={link.id}
						href={link.href}
						current={pathname === link.href}
						icon={link.icon}
					>
						{link.label}
					</SideNav.Link>
				))}
			</SideNav>
			<div className="sticky top-full space-y-6">
				<AdBox />
				<Account />
			</div>
		</aside>
	);
};
