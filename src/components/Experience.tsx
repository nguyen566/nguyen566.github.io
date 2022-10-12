import {
	Box,
	Flex,
	Heading,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { experienceData } from "../utils/experience";

const Experience = () => {
	return (
		<>
			<Heading size={"2xl"} mt={5}>
				Experience
			</Heading>
			<Flex flexDir="column">
				{experienceData.map((experience) => {
					return (
						<Box key={experience.key} my={5}>
							<Heading size={"lg"} mb={3}>
								{experience.company}
							</Heading>
							<Flex mb={3} flexDir={['column', 'row', 'row', 'row']}>
								<Text as="i">{experience.title}</Text>
								<Text ml={[null, "auto", "auto", "auto"]} mr={[null, 5, 5, 5]}>
									{experience.date}
								</Text>
							</Flex>
							<UnorderedList>
								{experience.description.map((desc) => {
									return <ListItem key={desc.descKey}>{desc.desc}</ListItem>;
								})}
							</UnorderedList>
						</Box>
					);
				})}
			</Flex>
		</>
	);
};

export default Experience;
