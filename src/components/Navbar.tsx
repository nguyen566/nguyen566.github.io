import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { FiStar } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { MdOutlineDescription, MdOutlineSchool } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { Link } from "react-scroll";

const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const navBgColor = useColorModeValue("blue.600", "gray.700");
	const themeBgColor = useColorModeValue("blue.500", "gray.600");

	return (
		<Flex
			position="sticky"
			top={0}
			w={['100%']}
			h={14}
			boxShadow={"0px 0px 2px black"}
			flexDir="row"
			bgColor={navBgColor}
			zIndex={1}
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
				m={1}
				w={"5%"}
				bgColor={themeBgColor}
			/>
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<HamburgerIcon />}
					variant="outline"
					my={1}
					mr={1}
					ml={"auto"}
				/>
				<MenuList>
					<Link to="aboutme" spy={true} smooth={true} duration={500}>
						<MenuItem icon={<SiAboutdotme />}>About Me</MenuItem>
					</Link>
					<Link to="experience" spy={true} smooth={true} duration={500}>
						<MenuItem icon={<MdOutlineDescription />}>Experience</MenuItem>
					</Link>
					<Link to="education" spy={true} smooth={true} duration={500}>
						<MenuItem icon={<MdOutlineSchool />}>Education</MenuItem>
					</Link>
					<Link to="projects" spy={true} smooth={true} duration={500}>
						<MenuItem icon={<FiStar />}>Projects</MenuItem>
					</Link>
					<Link to="skills" spy={true} smooth={true} duration={500}>
						<MenuItem icon={<GiSkills />}>Skills</MenuItem>
					</Link>
				</MenuList>
			</Menu>
		</Flex>
	);
};

export default NavBar;
