'use client'; 

import Container from "../Container";
import Logo from "../Navbar/Logo";
import Search from "../Navbar/Search";
import UserMenu from "../Navbar/UserMenu";
import { SafeUser } from "@/app/types";
import Categories from "../Navbar/Categories";

interface NavbarProps {
	currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
	currentUser
}) => {
	return (
		<div className="fixed w-full bg-white z-10 shadow-sm">
			<div
				className="
					py-4
					border-b-[1px]
				"
			>
				<Container>
					<div
						className="
							flex
							flex-row
							items-center
							justify-between
							gap-3
							md:gap-0
						"
					>
						<Logo />
						<Search />
						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
			<Categories />
		</div>
	);
}

export default Navbar; 