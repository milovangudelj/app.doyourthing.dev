import { ElementType, ReactNode } from "react";
import cn from "classnames";
import { Icon } from "phosphor-react";
import Link from "next/link";

export const SideNavLink = ({
	href,
	children,
	current = false,
	icon,
}: {
	href: string;
	children: ReactNode;
	current?: boolean;
	icon: ReactNode | Icon | any;
}) => {
	const Icon = icon as ElementType;

	return (
		<li>
			<Link href={href} passHref>
				<a
					className={cn(
						"py-2 px-3 space-x-3 flex items-center w-full rounded text-zinc-100 transition",
						{ "bg-zinc-700": current },
						{ "hover:bg-zinc-800": !current }
					)}
				>
					<Icon width={20} height={20} />
					<span className="text-base leading-6 font-medium">
						{children}
					</span>
				</a>
			</Link>
		</li>
	);
};
