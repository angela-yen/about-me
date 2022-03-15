import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'

function App() {
  return (
    <Box>
      <Header marginTop = '20' marginBottom = '20' />
        <Box marginTop='20' paddingY='6' paddingX='12'>
         <AboutMe />
         </Box>
         <Box>
         <Skills />
       </Box>
    </Box>
  );
}

export default App;
