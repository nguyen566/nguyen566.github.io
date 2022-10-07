import {
	Flex,
	Icon,
	Menu,
	MenuButton,
	Text,
	useColorModeValue,
	// Link
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-scroll";

interface NavItemProps {
	navSize: String;
	title: String;
	icon: IconType;
	active: Boolean;
	location: string;
}

const NavItem: React.FC<NavItemProps> = ({
	navSize,
	title,
	icon,
	active,
	location,
}) => {
	const navTextColor = useColorModeValue('white', 'gray.100');
	const navActiveColor = useColorModeValue('cyan.300', 'orange.400')

	return (
		<Flex
			mt={30}
			flexDir="column"
			w={"100%"}
			alignItems={navSize == "small" ? "center" : "flex-start"}
		>
			<Menu placement="right">
				<Link
					to={location}
					activeClass="active"
					spy={true}
					smooth={true}
					duration={500}
					className="testButton"
					width={navSize == "large" ? "100%" : undefined}
				>
					<MenuButton w={"100%"}>
						<Flex>
							<Icon
								as={icon}
								fontSize="xl"
								color={active ? navActiveColor : navTextColor}
							/>
							<Text
								ml={5}
								display={navSize == "small" ? "none" : "flex"}
								color={active ? navActiveColor : navTextColor}
							>
								{title}
							</Text>
						</Flex>
					</MenuButton>
				</Link>
			</Menu>
		</Flex>
	);
};

export default NavItem;
