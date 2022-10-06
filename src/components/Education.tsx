import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { educationData } from "../utils/education";

const Education = () => {
	return (
		<>
			<Heading size={"2xl"} mb={10}>
				Education
			</Heading>
			<Flex flexDir={"column"} mb={5}>
				<Heading size={"lg"} mb={3}>
					{educationData[0].school}
				</Heading>
				<Flex>
					<Text as="i">{educationData[0].degree} | {educationData[0].major}</Text>
					<Text ml={"auto"} mr={5}>
						{educationData[0].graduation}
					</Text>
				</Flex>
			</Flex>
		</>
	);
};

export default Education;
