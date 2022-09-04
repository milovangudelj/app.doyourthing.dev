import { ReactNode } from "react";
import { SideNavLink } from "./SideNavLink";

export const SideNav = ({ children }: { children: ReactNode }) => {
	return <ul className="space-y-1">{children}</ul>;
};

SideNav.Link = SideNavLink;
