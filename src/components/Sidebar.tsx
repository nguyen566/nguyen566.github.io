import {
	Avatar,
	Divider,
	Flex,
	Heading,
	IconButton,
	Text,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiMenu, FiStar } from "react-icons/fi";
import { MdOutlineSchool, MdOutlineDescription } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import NavItem from "./Navitem";
import { Link } from "react-scroll";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const SideBar = () => {
	const [navSize, setNavSize] = useState("large");
	const [scrollY, setScrollY] = useState(0);
	const { colorMode, toggleColorMode } = useColorMode();

	const navBgColor = useColorModeValue("blue.600", "gray.700");
	const navTextColor = useColorModeValue("white", "gray.100");
	const themeBgColor = useColorModeValue("blue.500", "gray.600");

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
			left={0}
			position="sticky"
			top={0}
			bottom={0}
			h="100vh"
			boxShadow={"0px 0px 2px black"}
			w={navSize == "small" ? "75px" : "200px"}
			flexDir="column"
			justifyContent="space-between"
			bgColor={navBgColor}
		>
			<Flex
				p={"5%"}
				flexDir="column"
				alignItems={navSize == "small" ? "center" : "flex-start"}
				as="nav"
			>
				<IconButton
					aria-label="Toggle Theme"
					icon={
						colorMode == "light" ? (
							<MoonIcon color={"blue.900"} />
						) : (
							<SunIcon color={"orange.400"} />
						)
					}
					onClick={toggleColorMode}
					mt={2}
					w={navSize == "small" ? "50%" : "100%"}
					bgColor={themeBgColor}
				/>
				<IconButton
					aria-label="Menu Button"
					background={"none"}
					mt={5}
					_hover={{ background: "none" }}
					icon={<FiMenu />}
					color={navTextColor}
					w={navSize == "small" ? "50%" : "100%"}
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
					active={scrollY < 714.4000244140625 ? true : false}
					location="aboutme"
				/>
				<NavItem
					navSize={navSize}
					icon={MdOutlineDescription}
					title="Experience"
					active={scrollY >= 714.4000244140625 && scrollY < 2080 ? true : false}
					location="experience"
				/>
				<NavItem
					navSize={navSize}
					icon={MdOutlineSchool}
					title="Education"
					active={scrollY >= 2080 && scrollY < 2612 ? true : false}
					location="education"
				/>
				<NavItem
					navSize={navSize}
					icon={FiStar}
					title="Projects"
					active={
						scrollY >= 2612 && scrollY < 3156
							? true
							: false
					}
					location="projects"
				/>
				<NavItem
					navSize={navSize}
					icon={GiSkills}
					title="Skills"
					active={scrollY >= 3156 ? true : false}
					location="skills"
				/>
			</Flex>

			<Flex flexDir={"column"}>
				<Divider display={navSize == "small" ? "none" : "200px"} mb={5} />
				<Flex align="center">
					<Link
						to="aboutme"
						activeClass="active"
						spy={true}
						smooth={true}
						duration={500}
					>
						<Avatar size="sm" src="personal_photo.png" ml={2} mb={2} />
					</Link>
					<Flex
						direction={"column"}
						ml={4}
						mb={4}
						display={navSize == "small" ? "none" : "flex"}
						mr={4}
					>
						<Heading as="h3" size={"sm"} color={navTextColor}>
							Randy Nguyen
						</Heading>
						<Text color={navTextColor}>Technical Consultant II</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SideBar;
