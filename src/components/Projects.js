import React from 'react'

import { Box, Heading, Image, VStack, Container, Text, HStack, Link, Button} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'


function Projects() {

  return (
    <>
      <Box padding='20px'>
        <Heading padding='20px' textAlign='center'>☕️ Projects </Heading>   
        <Text textAlign='center' fontSize='xl'>
          Here are a few projects I have worked on, in the process of working on and proud of! 
        </Text>
        <VStack>
          <Box>
            <HStack>
              <Container>
                <Heading textAlign='center' p={3}>Rōpū</Heading>
                <Text borderWidth='3px' borderRadius='lg' fontSize='xl' p={5}>
                  Rōpū is a social media platform for students to share knowledge, content, questions, events and to connect with other students. The layout and format took inspirations from HackerRank and Reddit that aims to be simplistic and asseccible to create a easy to use interface.  
                  <br />
                  <br />
                  This was  created along with 4 other team memebers over a week. My role in this project was creating front end compoenents and deployment of the application. During this time, we encountered a few stressful moments where the application broke and we had a bug that was a result of renaming a componenet. Frequent communication and git management was the key to resolving these issues.
                  <br />
                  <br />
                  The original project was hosted on Heroku Server, however is no long deployed.
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
                    {/* <Box>
                        <Link href='https://ropu-app.herokuapp.com/'>
                        <Button background='none'> <FaLink />&nbsp;  Live Website</Button></Link>
                        </Box> */}
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
                <Heading textAlign='center' p={3}>Lemonade Stand</Heading>
                <Text borderWidth='3px' borderRadius='lg' fontSize='xl' p={5}>
                  I created this app as part of learning Ruby from scratch. The app is a game like sequence of questions and events that occur within the CLI. Each day you have x amount of money to purchase lemons and sugars, dependant on the temperature of the day - it will calculate how many cups you sell. At the end of the day, it caculates whether you have enough money to continue to the following day or if you have lost the game.   
                  <br />
                  <br />
                  This app was written soley in Ruby.
                  <br />
                  <HStack p={3}>
                    <Box borderWidth='3px' borderRadius='lg'  p={3}> 
                      Ruby
                    </Box>
                  </HStack>
                </Text>
                  <HStack top='10px'>
                    <Box>
                      <Link href='https://github.com/angela-yen/lemonade_stand'>
                      <Button background='none' p={5}> <FaGithub /> &nbsp;  Github Code</Button></Link>
                    </Box>
                  </HStack>
              </Container>
              <Image boxSize='80vh' src='/lemonadestand.png'></Image>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Container>
                <Heading textAlign='center' p={3} >Pupparazzi</Heading>
                <Text borderWidth='3px' borderRadius='lg' fontSize='xl' p={5}>
                  Pupparazzi is an application that allows for people to update the owners and the name of the animals.
                  <br />
                  <br />
                  This project was an exercise to practice using Express Routers and server side rendering for a Web application.
                  <br />
                  <br />
                  The original project was hosted on Heroku Server, however is no long deployed.
                  <br />
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
                  {/* <Box>
                    <Link href='https://pupparazzi-ange.herokuapp.com/'>
                    <Button background='none'> <FaLink /> &nbsp;  Live Website</Button></Link>
                  </Box> */}
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
                <Text borderWidth='3px' borderRadius='lg' fontSize='xl' p={5}>
                  A beanbag booking system where you can double click on the beanbags, write your name on it and have it stored on the bag of your desires! If you refresh the page you will see that the beanbags will randomise in colour!
                  <br />
                  <br />
                  This project was created with 3 other people as practice for using react componenets. During this experiences, I was mainly working on the frontend of the project creating redux components. 
                  <br />
                  <br />
                  The original project was hosted on Heroku Server, however is no long deployed.
                  <br />
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
                  {/* <Box>
                    <Link href='http://beanbagscramble.herokuapp.com/'>
                    <Button background='none'> <FaLink /> &nbsp;  Live Website</Button></Link>
                  </Box> */}
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
                <Heading textAlign='center' p={3}>Lumieer - E-Commerce Site</Heading>
                <Text borderWidth='3px' borderRadius='lg' fontSize='xl' p={5}>
                  I built a shopify E-Commerce website for my friend&apos;s small business. It was an opportunity for me to learn how to use Node.js and React.js with shopify. I found th experience challenging at times. However, I problem solved through looking at other developer&apos;s solutions and reading doccumentation. 
                  <br />
                  <br />
                  The project was sucessfully developed and hosted on shopify as an E-Commerce platform however, has since been taken down. 
                  <br />
                  <HStack p={3}>
                    <Box borderWidth='3px' borderRadius='lg'  p={3}> 
                      React
                    </Box>
                    <Box borderWidth='3px' borderRadius='lg'  p={3}> 
                      Node.js
                    </Box>
                    <Box  borderWidth='3px' borderRadius='lg' p={3}> 
                      Shopify
                    </Box>
                  </HStack>
                </Text>
                <HStack top='10px'>
                  <Box>
                    <Link href='https://github.com/angela-yen/lumineer'>
                    <Button background='none' p={5}> <FaGithub /> &nbsp;  Github Code</Button></Link>
                  </Box>
                </HStack>
              </Container>
            </HStack>
          </Box>
          <Box>
            <HStack spacing={5}>
              <Container>
                <Heading textAlign='center'  p={3}>MusoChat</Heading>
                <Text borderWidth='3px' borderRadius='lg' fontSize='xl' p={5}>
                  This is my experiement project that I am currenty working on. The app consuming the Spotify Web API and encorporates at chat engine API that allows users to sit in a chat room and discuss music while listening to it. 
                  <br />
                  <br />
                  This project is in it&apos;s early days and is occuring simultaniously with other projects. This is more of an interest project for me therefore, is currently taking lower priority in terms of tasks.
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

