import { Box, Input, Button, Text, Flex, Tag, TagLabel, Container, VStack } from "@chakra-ui/react";
import { useState } from "react";
import PromptCard from "../components/PromptCard";

const PromptLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPrompts, setFilteredPrompts] = useState([]);
  const [prompts, setPrompts] = useState([
    { id: 1, title: "Prompt 1", description: "Description 1", author: "Author 1", tags: ["tag1", "tag2"], text: "Prompt text 1" },
    { id: 2, title: "Prompt 2", description: "Description 2", author: "Author 2", tags: ["tag2", "tag3"], text: "Prompt text 2" },
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = prompts.filter((prompt) => prompt.title.includes(e.target.value) || prompt.description.includes(e.target.value));
    setFilteredPrompts(filtered);
  };

  return (
    <Container centerContent>
      <Box width="100%" maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Input placeholder="Search prompts..." value={searchQuery} onChange={handleSearch} />
        </Flex>
        <VStack spacing={4} width="100%">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default PromptLibrary;
