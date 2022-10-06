import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { projectData } from "../utils/projects";

const Project = () => {
	return (
		<>
			<Heading size={"2xl"} mb={10}>
				Projects
			</Heading>
			{projectData.map((project) => {
				return (
					<Flex key={project.key} flexDir="column" mb={5}>
						<Heading size={"lg"} mb={3}>
							{project.name}
						</Heading>
						<Text as="i" mb={3}>{project.type}</Text>
						<Flex justifyContent={'flex-start'} mb={3}>
							{project.skills.map((skill) => {
								return <Text key={skill.skillKey}
                                mr={3}>{skill.skillDesc}</Text>;
							})}
						</Flex>
						<UnorderedList>
							{project.description.map((desc) => {
								return <ListItem key={desc.descKey}>{desc.desc}</ListItem>;
							})}
						</UnorderedList>
					</Flex>
				);
			})}
		</>
	);
};

export default Project;
