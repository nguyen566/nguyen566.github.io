import { Divider, Flex, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import NavBar from "../components/Navbar";
import Project from "../components/Project";
import SideBar from "../components/Sidebar";
import Skill from "../components/Skill";
import useWindowSize from "../hooks/Windowsize";

const Home: NextPage = ({}) => {
	const bgColor = useColorModeValue("gray.100", "gray.800");
	const size = useWindowSize();

	return (
		<Flex flexDir={size.width > 980 ? "row" : "column"} >
			{size.width > 980 ? <SideBar /> : <NavBar />}
			<Flex bgColor={bgColor} w='100%'>
				<Flex flexDir={"column"} ml={"5"} w='100%'>
					<div id="aboutme" className="center-screen">
						<About />
					</div>
					<Divider borderColor="gray.400" />
					<div id="experience" className="section">
						<Experience />
					</div>
					<Divider borderColor="gray.400" />
					<div id="education" className="section">
						<Education />
					</div>
					<Divider borderColor="gray.400" />
					<div id="projects" className="section">
						<Project />
					</div>
					<Divider borderColor="gray.400" />
					<div id="skills" className="section">
						<Skill />
					</div>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Home;
