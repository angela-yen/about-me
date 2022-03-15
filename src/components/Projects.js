import React from 'react'

import { Box, Heading, Image, VStack} from '@chakra-ui/react'


function Projects() {

  return (
    <>
    <Box padding='20px'>
    <Heading padding='20px' textAlign='center'>Projects </Heading>   
    <VStack>
    <Box >
    <Image src='/ropu.png'></Image>

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

