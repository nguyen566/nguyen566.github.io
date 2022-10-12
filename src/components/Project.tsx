import {
	Box,
	Flex,
	Heading,
	IconButton,
	ListItem,
	Text,
	UnorderedList,
	useColorModeValue,
} from "@chakra-ui/react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
import { projectData } from "../utils/projects";

const Project = () => {
	const btnBgColor = useColorModeValue("gray", "white");
	const btnColor = useColorModeValue("white", "black");
	const btnGitColor = useColorModeValue("gray", "white");

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
							<Flex my={5} alignItems="center">
								<IconButton
									aria-label="Github"
									icon={
										<SocialIcon
											network="github"
											style={{ height: 50, width: 50 }}
											bgColor={btnGitColor}
										/>
									}
									borderRadius={"50%"}
									mr={5}
									size="lg"
									onClick={() => {
										window.open(project.github);
									}}
								/>
								{project.deployed !== undefined ? (
									<IconButton
										aria-label="External Weblink"
										icon={
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												size="xl"
												color={btnColor}
											/>
										}
										bgColor={btnBgColor}
										borderRadius={"50%"}
										size="lg"
										onClick={() => {
											window.open(project.deployed);
										}}
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
