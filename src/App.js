import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';


import GradientBackground from './components/GradientBackground';
import NavBar from './components/NavBar';
import ProductContainer from './ProductContainer';

const newTheme = {
  ...theme,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }
}
function App() {
  
  return (
    <ChakraProvider theme={newTheme}>
    
      <Box textAlign="center" fontSize="xl">
      <GradientBackground/>
      <NavBar/>
      
        <Grid minH="100vh" pt={15} >
         
          <VStack spacing={8} >
           
            <Text fontSize="6xl" as='b'  mt={10} textTransform='uppercase' color='white' display={{base:'none',md:'block'}}>
              Welcome to NFT Alley.
            </Text>
          </VStack>
          <Box textAlign='left' ml={10} mb={30} mt={150} fontSize="2xl">
          <Text>Products</Text>
          <Flex mt={30}>
          <ProductContainer/>
          </Flex>
          
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
