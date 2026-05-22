import {
	Box,
	Flex,
	Heading,
	IconButton,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt, } from "react-icons/fa";
import { projectData } from "../utils/projects";

const Project = () => {
	return (
		<>
			<Heading size={"2xl"} mt={5} mb={6}>
				Projects
			</Heading>
			<Flex flexDir="column" mb={5}>
				{projectData.map((project) => {
					return (
						<Box key={project.key}>
							<Heading size={"lg"} mb={3}>
								{project.name}
							</Heading>
							<Text as="i" mb={3}>
								{project.type}
							</Text>
							<Flex justifyContent={"start"} mb={3} flexDir={['column', 'column', 'column', 'row']}>
								{project.skills.map((skill) => {
									return (
										<Text key={skill.skillKey} mr={3}>
											{skill.skillDesc}
										</Text>
									);
								})}
							</Flex>
							<UnorderedList>
								{project.description.map((desc) => {
									return <ListItem key={desc.descKey}>{desc.desc}</ListItem>;
								})}
							</UnorderedList>
							<Flex my={5} alignItems="center" gap="1rem">
								<IconButton
									as="a"
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Project github"
									icon={<FaGithub size={30} />}
								/>
								{project.deployed !== undefined ? (
									<IconButton
										as="a"
										href={project.deployed}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Deployed project"
										icon={<FaExternalLinkAlt size={30} />}
									/>
								) : null}
							</Flex>
						</Box>
					);
				})}
			</Flex>
		</>
	);
};

export default Project;
