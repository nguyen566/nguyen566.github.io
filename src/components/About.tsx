import { Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { about } from "../utils/about";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const About = () => {
	return (
		<Flex
			display={"flex"}
			alignItems={"left"}
			flexDir={"column"}
		>
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
            <Text fontSize="lg" mb={10}>
				Insert Link to Resume as PDF
			</Text>
			<Flex flexDir={"row"} mt={10} justifyContent=''>
				<Link href={about[0].linkedin}>
					<IconButton
						aria-label="LinkedIn"
						icon={
							<SocialIcon
								url="https://linkedin.com/in/jaketrent"
								style={{ height: 60, width: 60 }}
							/>
						}
						borderRadius={"50%"} 
                        mr={6}
					/>
				</Link>
                <Link href={about[0].github}>
					<IconButton
						aria-label="Github"
						icon={
							<SocialIcon
								url="https://github.com/in/jaketrent"
								style={{ height: 60, width: 60 }}
                                bgColor='ghostwhite'
							/>
						}
						borderRadius={"50%"}
					/>
				</Link>
			</Flex>
		</Flex>
	);
};

export default About;
