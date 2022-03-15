import React from 'react'

import { Box, HStack, Heading, Image,Container, Text} from '@chakra-ui/react'

function Skills() {

  return (
    <>
    <Box padding='20px'>
    <Heading padding='20px' textAlign='center'>🛠 Skills </Heading>   

    <HStack spacing='24px'>
   
      <Image boxSize='70px' src='/js.png'></Image>
  <Box w='100px' h='100px' bg='tomato'>
    2
  </Box>
  <Box w='100px' h='100px' bg='pink.100'>
    3
  </Box>
</HStack>

</Box>
    </>
  )
}

export default Skills

