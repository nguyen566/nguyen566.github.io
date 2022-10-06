import { Divider, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Project from "../components/Project";
import SideBar from "../components/Sidebar";
import Skill from "../components/Skill";
import { about } from "../utils/about";

export const getStaticProps = async () => {
	return {
		props: {
			aboutData: about,
		},
	};
};

const Home: NextPage = ({}) => {
	return (
		<Flex>
			<SideBar />
			<Flex flexDir={"column"} w={"100%"} ml={5}>
				<div id="aboutme" className="center-screen">
					<About />
				</div>
				<Divider mb={10}/>
				<div id="experience" className="section">
					<Experience />
				</div>
				<Divider mb={10}/>
				<div id="education" className="section">
					<Education />
				</div>
				<Divider mb={10}/>
				<div id="projects" className="section">
					<Project />
				</div>
				<Divider mb={10}/>
				<div id="skills" className="section">
					<Skill />
				</div>
			</Flex>
		</Flex>
	);
};

export default Home;
