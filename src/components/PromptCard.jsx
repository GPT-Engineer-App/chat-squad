import { Box, Text, Flex, Tag, TagLabel, Button } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

const PromptCard = ({ prompt }) => {
  const copyPrompt = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" _hover={{ bg: "gray.100", shadow: "md" }}>
      <Text fontSize="xl" fontWeight="bold">
        {prompt.title}
      </Text>
      <Text>{prompt.description}</Text>
      <Text mt={2}>Author: {prompt.author}</Text>
      <Flex mt={2} wrap="wrap">
        {prompt.tags.map((tag) => (
          <Tag size="sm" key={tag} mr={2} mb={2}>
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </Flex>
      <Button mt={2} leftIcon={<FaCopy />} onClick={() => copyPrompt(prompt.text)}>
        Copy Prompt
      </Button>
    </Box>
  );
};

export default PromptCard;
