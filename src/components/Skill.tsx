import { Heading, Flex, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { skillData } from "../utils/skills";

const Skill = () => {
	return (
		<>
			<Heading size={"2xl"} mb={10}>
				Skills
			</Heading>
			{skillData.map((skill) => {
				return (
					<Flex key={skill.key} flexDir="column" mb={5}>
						<Heading size={"md"} mb={3} as="i">
							{skill.name}
						</Heading>
						<Flex justifyContent={"flex-start"} mb={3}>
							{skill.skills.map((skill) => {
								return (
									<Text key={skill.skillKey} mr={3}>
										{skill.desc}
									</Text>
								);
							})}
						</Flex>
					</Flex>
				);
			})}
		</>
	);
};

export default Skill;
