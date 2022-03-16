import React from 'react'

import { Box, Heading, Image, VStack, Container, Text, HStack, Link, Button} from '@chakra-ui/react'
import { FaLink, FaGithub } from 'react-icons/fa'


function Projects() {

  return (
    <>
    <Box padding='20px'>
    <Heading padding='20px' textAlign='center'>Projects </Heading>   
    <Text textAlign='center'>
      Here are some of the projects I am proud of and ones that I am currently working towards finishing.
    </Text>
    <VStack>
    <Box >
      <HStack>
    <Container>
      <Heading textAlign='center' p={3}>Rōpū</Heading>
        <Text borderWidth='1px' borderRadius='lg' fontSize='xl' p={5}>
        Rōpu is a reddit like platform for students to share knowledge, content, questions, events and to connect with other students. This was my final group project for my Enspiral Dev Academy graduation. 
        </Text>
       
  <HStack top='10px'>
    <Box>
        <Link href='https://ropu-app.herokuapp.com/'>
        <Button background='none'> <FaLink />  Live Website</Button></Link>
        </Box>
        <Box>
        <Link href='https://github.com/angela-yen/Ropu'>
        <Button background='none' p={5}> <FaGithub />  Github Code</Button></Link>
        </Box>
        </HStack>
      </Container>
    <Image boxSize='80vh' wiborderWidth='1px' borderRadius='lg' src='/ropu.png'></Image>
    </HStack>
  </Box>
  <Box width='90vh'>
  <Heading textAlign='center' p={3}>MusoChat</Heading>
        <Text borderWidth='1px' borderRadius='lg' fontSize='xl' p={5}>
        This is my experiement project that I am currenty working on. The app consuming the Spotify Web API and encorporates at chat engine API that allows users to sit in a chat room and discuss music while listening to it. 
        </Text>
       
        
        <Link href='https://github.com/angela-yen/MusoChat'>
        <Button background='none' p={5}> <FaGithub />  Github Code</Button></Link>
        

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

