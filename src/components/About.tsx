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
			<Flex flexDir={"row"} my={10} justifyContent="">
				<IconButton
					aria-label="LinkedIn"
					icon={
						<SocialIcon network="linkedin" style={{ height: 60, width: 60 }} />
					}
					borderRadius={"50%"}
					mr={6}
					onClick={() => {
						window.open(about[0].linkedin);
					}}
				/>
				<IconButton
					aria-label="Github"
					icon={
						<SocialIcon
							network="github"
							style={{ height: 60, width: 60 }}
							bgColor={btnGitColor}
						/>
					}
					borderRadius={"50%"}
					onClick={() => {
						window.open(about[0].github);
					}}
				/>
			</Flex>
		</Flex>
	);
};

export default About;
