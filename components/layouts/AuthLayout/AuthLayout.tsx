import NextLink from "next/link";
import Image from "next/image";
import { Link, Logo } from "@doyourthing/ui";

import deskImage from "./claude-gabriel-NOUiIuwzECk-unsplash.jpg";

export const AuthLayout = ({ children }: { children: any }) => {
	return (
		<div className="dark bg-zinc-900 text-white min-h-screen flex gap-0">
			<main className="flex relative items-center justify-center flex-1 order-2 min-h-full">
				{children}
			</main>
			<aside className="flex items-center w-2/5 min-h-full order-1 relative justify-center overflow-hidden bg-zinc-800">
				<div className="w-full h-full pointer-events-none select-none">
					<Image
						src={deskImage}
						placeholder="empty"
						quality={100}
						layout="fill"
						objectFit="cover"
						alt="Desk setup photo - Claude Gabriel"
						title="Desk setup photo - Claude Gabriel"
					/>
					<div className="absolute top-0 w-full h-1/6 bg-gradient-to-b from-zinc-900/50 to-zinc-900/0"></div>
					<div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-b to-zinc-900/50 from-zinc-900/0"></div>
				</div>
				<NextLink href="/" passHref>
					<a className="absolute top-4 left-4">
						<Logo type="full" size="md" />
					</a>
				</NextLink>
				<span className="absolute bottom-4 left-4">
					Photo by&nbsp;
					<Link
						target="_blank"
						href="https://unsplash.com/@claudegabriel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>
						Claude Gabriel
					</Link>
					&nbsp; on&nbsp;
					<Link
						target="_blank"
						href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>
						Unsplash
					</Link>
				</span>
			</aside>
		</div>
	);
};
