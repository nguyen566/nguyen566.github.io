import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { educationData } from "../utils/education";

const Education = () => {
	return (
		<>
			<Heading size={"2xl"} mt={5} mb={4}>
				Education
			</Heading>
			<Flex flexDir={"column"} mb={5}>
				<Heading size={"lg"}>
					{educationData[0].school}
				</Heading>
				<Flex>
					<Text as="i">{educationData[0].degree} | {educationData[0].major}</Text>
					
				</Flex>
			</Flex>
		</>
	);
};

export default Education;
