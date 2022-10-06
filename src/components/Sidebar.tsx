import {
	Avatar,
	Button,
	Divider,
	Flex,
	Heading,
	IconButton,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiMenu, FiStar } from "react-icons/fi";
import { MdOutlineSchool, MdOutlineDescription } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import NavItem from "./Navitem";
import Link from "next/link";

const SideBar = () => {
	const [navSize, setNavSize] = useState("large");
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		// just trigger this so that the initial state
		// is updated as soon as the component is mounted
		// related: https://stackoverflow.com/a/63408216
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Flex
			left="1"
			position="sticky"
			top={0}
			h="95vh"
			mt={5}
			boxShadow={"0px 0px 2px black"}
			// borderRadius={navSize == "small" ? "15px" : "30px"}
			w={navSize == "small" ? "75px" : "200px"}
			flexDir="column"
			justifyContent="space-between"
		>
			<Flex
				p={"5%"}
				flexDir="column"
				alignItems={navSize == "small" ? "center" : "flex-start"}
				as="nav"
			>
				<IconButton
					aria-label="Icon Button"
					background={"none"}
					mt={5}
					_hover={{ background: "none" }}
					icon={<FiMenu />}
					onClick={() => {
						if (navSize == "small") {
							setNavSize("large");
						} else {
							setNavSize("small");
						}
					}}
				/>
				<NavItem
					navSize={navSize}
					icon={SiAboutdotme}
					title="About"
					active={scrollY < 500 ? true : false}
					location="#aboutme"
				/>
				<NavItem
					navSize={navSize}
					icon={MdOutlineDescription}
					title="Experience"
					active={scrollY >= 500 && scrollY < 2160 ? true : false}
					location="#experience"
				/>
				<NavItem
					navSize={navSize}
					icon={MdOutlineSchool}
					title="Education"
					active={scrollY >= 2160 && scrollY < 2496 ? true : false}
					location="#education"
				/>
				<NavItem
					navSize={navSize}
					icon={FiStar}
					title="Projects"
					active={scrollY >= 2496 && scrollY < 2880 ? true : false}
					location="#projects"
				/>
				<NavItem
					navSize={navSize}
					icon={GiSkills}
					title="Skills"
					active={scrollY >= 2880 ? true : false}
					location="#skills"
				/>
			</Flex>

			<Flex
				p={"5%"}
				flexDir="column"
				w="100%"
				alignItems={navSize == "small" ? "center" : "flex-start"}
				mb={4}
			></Flex>

			<Divider display={navSize == "small" ? "none" : "200px"} />

			<Flex mt={4} align="center">
				<Link href={"/"}>
					<Avatar size="sm" src="personal_photo.png" ml={2} mb={2} />
				</Link>
				<Flex
					direction={"column"}
					ml={4}
					display={navSize == "small" ? "none" : "flex"}
				>
					<Heading as="h3" size={"sm"}>
						Randy Nguyen
					</Heading>
					<Text>Technical Consultant II</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SideBar;
