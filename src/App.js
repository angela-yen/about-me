import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Box>
      <Header />
        <Box marginTop='20' paddingY='6' paddingX='12'>
         <AboutMe />
       </Box>
    </Box>
  );
}

export default App;
