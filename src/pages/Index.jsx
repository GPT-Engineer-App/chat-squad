import { useState } from "react";
import { Box, Button, Container, HStack, Input, Text, VStack, Avatar, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="70vh" overflowY="auto" border="1px solid #e2e8f0" borderRadius="md" p={4}>
          {messages.map((message, index) => (
            <HStack key={index} spacing={3} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}>
              {message.sender !== "user" && <Avatar name="Agent" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZ2VudCUyMGF2YXRhcnxlbnwwfHx8fDE3MTU4NDAwODd8MA&ixlib=rb-4.0.3&q=80&w=1080" />}
              <Box bg={message.sender === "user" ? "blue.500" : "gray.200"} color={message.sender === "user" ? "white" : "black"} px={4} py={2} borderRadius="md">
                <Text>{message.text}</Text>
              </Box>
              {message.sender === "user" && <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTczMDg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" />}
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your message..." />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
