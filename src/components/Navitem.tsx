import {
	Flex,
	Icon,
	Menu,
	MenuButton,
	Text,
	Link,
	MenuList,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

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
	return (
		<Flex
			mt={30}
			flexDir="column"
			w={"100%"}
			alignItems={navSize == "small" ? "center" : "flex-start"}
		>
			<Menu placement="right">
				<Link
					backgroundColor={active && "AEC8CA"}
					p={3}
					borderRadius={8}
					_hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
					w={navSize == "large" ? "100%" : undefined}
					href={location}
				>
					<MenuButton w={"100%"}>
						<Flex>
							<Icon
								as={icon}
								fontSize="xl"
								color={active ? "#82aaad" : "gray.500"}
							/>
							<Text ml={5} display={navSize == "small" ? "none" : "flex"}>
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
