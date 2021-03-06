import React from "react";
import { Box, Heading, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Logo } from "../Logo";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);


const NavBar = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="white"
    
      {...props}
    >
      <Flex align="center" mr={5}>
      <Logo/>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          NFT<span style={{color:'#05D5FF'}}>Alley</span> 
        </Heading>
      </Flex>
      <Spacer /> 
      <Box display={{ base: "block", md: "none" }}  onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      
      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>
      <ColorModeSwitcher justifySelf="flex-end" />
     
    </Flex>
  );
};

export default NavBar;