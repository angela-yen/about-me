import React from 'react';
import { Box, VStack, Image } from '@chakra-ui/react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Interests from './components/Interests';

function App() {
  return (
    <Box>
      <Header marginTop = '20' marginBottom = '60vh' />
      <SideBar marginTop='60vh'/>
        <Box marginTop='20' paddingY='6' paddingX='12'>
          <VStack spacing={10}>
        <Image src='/ange.png'></Image>
         <AboutMe padding='60vh' />
         <Skills />
         <Projects />
         <Interests />
       </VStack>
       </Box>
       <Box>
       <Footer align='center' />
       </Box>
    </Box>
  );
}

export default App;
