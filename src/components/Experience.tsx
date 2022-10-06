import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { experienceData } from "../utils/experience";

const Experience = () => {
	return (
		<>
			<Heading size={"2xl"} mb={10}>
				Experience
			</Heading>
			{experienceData.map((experience) => {
				return (
					<Flex key={experience.key} 
                    flexDir="column"
                    mb={5}>
						<Heading size={"lg"}
                        mb={3}>{experience.company}</Heading>
						<Flex mb={3}>
							<Text as="i">{experience.title}</Text>
							<Text ml={"auto"} mr={5}>
								{experience.date}
							</Text>
						</Flex>
						<UnorderedList>
							{experience.description.map((desc) => {
								return <ListItem key={desc.descKey}>{desc.desc}</ListItem>;
							})}
						</UnorderedList>
					</Flex>
				);
			})}
		</>
	);
};

export default Experience;
