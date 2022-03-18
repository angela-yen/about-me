import React from 'react'

import { Box, Text, Grid, VStack, Heading, Center} from '@chakra-ui/react'



function AboutMe() {
  
  return (
    <>
      <Center>
     <Box maxW='4xl' borderWidth='5px' borderRadius='lg' overflow='hidden'>
     
       <Grid  minH="35vh" p={3}>
        
          <VStack spacing={6}>
            <Heading>
              Nice to Meet You!
            </Heading>
            <Text fontSize='xl'>
            I am a software developer passionate about bringing diversity and curiosity into the industry. To me, diversity means empowering people who bring stories and knowledge that hold value and unique perspectives. I have always had a strength and interest in logical thinking and problem solving, which initially sparked my desire to study mathematics. Equally, I have a passion for bringing people together and using the power of technology to solve social issues. In the future, I see myself contributing to the tech section through creating software that involves wellbeing, connecting people and bringing the human into technology.
            </Text>

          </VStack>
        </Grid> 
   
      </Box>
      </Center>
    </>
  )
}

export default AboutMe
