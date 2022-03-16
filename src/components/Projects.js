import React from 'react'

import { Box, Heading, Image, VStack, Container, Text, HStack} from '@chakra-ui/react'


function Projects() {

  return (
    <>
    <Box padding='20px'>
    <Heading padding='20px' textAlign='center'>Projects </Heading>   
    <VStack>
    <Box >
      <HStack>
    <Container>
      <Heading textAlign='center' p={3}>Rōpū</Heading>
        <Text borderWidth='1px' borderRadius='lg' fontSize='2xl' p={5}>
        Rōpu is a reddit like platform for students to share knowledge, content, questions, events and to connect with other students. This was my final group project for my Enspiral Dev Academy graduation  
        </Text>
      </Container>
    <Image boxSize='80vh' wiborderWidth='1px' borderRadius='lg' src='/ropu.png'></Image>
    </HStack>
  </Box>
  <Box w='100px' h='100px' bg='tomato'>
    2
  </Box>
  <Box w='100px' h='100px' bg='pink.100'>
    3
  </Box>
</VStack>

</Box>
    </>
  )
}

export default Projects

