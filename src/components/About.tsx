import {
	Flex,
	Heading,
	IconButton,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { about } from "../utils/about";
import { SocialIcon } from "react-social-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const About = () => {
	const btnGitColor = useColorModeValue("gray", "white");

	return (
		<Flex flexDir={"column"}>
			<Heading size="3xl" mb={2}>
				{about[0].name}
			</Heading>
			<Text fontSize={"3xl"} mb={2}>
				{about[0].title}
			</Text>
			<Text fontSize="2xl" mb={10}>
				{about[0].address} - {about[0].email}
			</Text>
			<Text fontSize="lg" mb={10}>
				{about[0].description}
			</Text>
			<Text fontSize="lg" mb={10} color="blue">
				<Link href={"Randy_Nguyen_Resume.pdf"}>
					<a target={"_blank"}>View Resume as PDF</a>
				</Link>
			</Text>
			<Flex flexDir={"row"} my={10} justifyContent="start" gap="1rem">
				<IconButton
					as="a"
					href={about[0].linkedin}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					icon={<FaLinkedin size={40} />}
				/>
				<IconButton
					as="a"
					href={about[0].github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Github"
					icon={<FaGithub size={40} />}
				/>
			</Flex>
		</Flex>
	);
};

export default About;
