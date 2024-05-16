import { HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} padding={4} bg="gray.100" width="100%">
      <Link as={NavLink} to="/" exact>
        Home
      </Link>
      <Link as={NavLink} to="/library">
        Prompt Library
      </Link>
      <Link as={NavLink} to="/editor">
        Prompt Editor
      </Link>
      <Link as={NavLink} to="/sandbox">
        Prompt Sandbox
      </Link>
      <Link as={NavLink} to="/forums">
        Discussion Forums
      </Link>
    </HStack>
  );
};

export default Navigation;
