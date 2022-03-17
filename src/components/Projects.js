import React from 'react'

import { Box, Heading, Image, VStack, Container, Text, HStack, Link, Button} from '@chakra-ui/react'
import { FaLink, FaGithub } from 'react-icons/fa'


function Projects() {

  return (
    <>
    <Box padding='20px'>
    <Heading padding='20px' textAlign='center'>Projects </Heading>   
    <Text textAlign='center' fontSize='xl'>
      Here are a few projects I am proud of! 
    </Text>
    <VStack>
    <Box>
      <HStack>
    <Container>
      <Heading textAlign='center' p={3}>Rōpū</Heading>
        <Text borderWidth='1px' borderRadius='lg' fontSize='xl' p={5}>
        Rōpu is a social media platform for students to share knowledge, content, questions, events and to connect with other students. The layout and format took inspirations from HackerRank and Reddit that aims to be simplistic and asseccible to create a easy to use interface.  
        <br />
        <br />
        This was  created along with 4 other team memebers over a week. My role in this project was creating front end compoenents and deployment of the application. During this time, we encountered a few stressful moments where the application broke and we had a bug that was a result of renaming a componenet. Frequent communication and git management was the key to resolving these issues.
        <br />
        <HStack p={3}>
        <Box borderWidth='3px' borderRadius='lg'  p={3}> 
        Supabase
        </Box>
        <Box  borderWidth='3px' borderRadius='lg' p={3}> 
        React 
        </Box>
        <Box  borderWidth='3px' borderRadius='lg'  p={3}> 
        Chakra UI
        </Box>
        </HStack>
        </Text>
       
  <HStack top='10px'>
    <Box>
        <Link href='https://ropu-app.herokuapp.com/'>
        <Button background='none'> <FaLink />&nbsp;  Live Website</Button></Link>
        </Box>
        <Box>
        <Link href='https://github.com/angela-yen/Ropu'>
        <Button background='none' p={5}> <FaGithub /> &nbsp;  Github Code</Button></Link>
        </Box>
        </HStack>
      </Container>
    <Image boxSize='80vh' src='/ropu.png'></Image>
    </HStack>
  </Box>

  <Box>
      <HStack>
    <Container>
      <Heading textAlign='center' p={3}>Pupparazzi</Heading>
        <Text borderWidth='1px' borderRadius='lg' fontSize='xl' p={5}>
        Pupparazzi is an application that allows for people to update the owners and the name of the animals.
        <br />
        This project was an exercise to practice using Express Routers and server side rendering for a Web application.
        <HStack p={3}>
        <Box  borderWidth='3px' borderRadius='lg' p={3}> 
        React 
        </Box>
        <Box  borderWidth='3px' borderRadius='lg'  p={3}> 
        CSS
        </Box>
        </HStack>
        </Text>
       
  <HStack top='10px'>
    <Box>
        <Link href='https://pupparazzi-ange.herokuapp.com/'>
        <Button background='none'> <FaLink /> &nbsp;  Live Website</Button></Link>
        </Box>
        <Box>
        <Link href='https://github.com/angela-yen/pupparazzi'>
        <Button background='none' p={5}> <FaGithub />&nbsp;   Github Code</Button></Link>
        </Box>
        </HStack>
      </Container>
    <Image boxSize='80vh' src='/pupparazzi.png'></Image>
    </HStack>
  </Box>

  <Box>
      <HStack>
    <Container>
      <Heading textAlign='center' p={3}>Beanbag Booking System</Heading>
        <Text borderWidth='1px' borderRadius='lg' fontSize='xl' p={5}>
        Friday group project using react and random generator to create bean bag booking system and scrambler
        <HStack p={3}>
        <Box borderWidth='3px' borderRadius='lg'  p={3}> 
        React
        </Box>
        <Box  borderWidth='3px' borderRadius='lg' p={3}> 
        CSS
        </Box>
        </HStack>
        </Text>
       
  <HStack top='10px'>
    <Box>
        <Link href='http://beanbagscramble.herokuapp.com/'>
        <Button background='none'> <FaLink /> &nbsp;  Live Website</Button></Link>
        </Box>
        <Box>
        <Link href='https://github.com/angela-yen/bean-bag-scramble'>
        <Button background='none' p={5}> <FaGithub /> &nbsp;  Github Code</Button></Link>
        </Box>
        </HStack>
      </Container>
    <Image boxSize='80vh' src='/beanbag.png'></Image>
    </HStack>
  </Box>
  <Box>
      <HStack>
    <Container>
      <Heading textAlign='center' p={3}>MusoChat</Heading>
        <Text borderWidth='1px' borderRadius='lg' fontSize='xl' p={5}>
        This is my experiement project that I am currenty working on. The app consuming the Spotify Web API and encorporates at chat engine API that allows users to sit in a chat room and discuss music while listening to it. 
        <br />
        <HStack p={3}>
        <Box borderWidth='3px' borderRadius='lg'  p={3}> 
        React 
        </Box>
        <Box  borderWidth='3px' borderRadius='lg' p={3}> 
        React Chat Engine 
        </Box>
        <Box  borderWidth='3px' borderRadius='lg' p={3}> 
        Spotify Web Api
        </Box>
        </HStack>
        </Text>
       
  <HStack top='10px'>
        <Box>
        <Link href='https://github.com/angela-yen/MusoChat'>
        <Button background='none' p={5}> <FaGithub /> &nbsp; Github Code</Button></Link>
        </Box>
        </HStack>
      </Container>
    </HStack>
  </Box>

</VStack>

</Box>
    </>
  )
}

export default Projects

