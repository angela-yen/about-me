import React from 'react'

import { Box, SimpleGrid, Flex, HStack, Heading} from '@chakra-ui/react'


function Skills() {

  return (
    <>
    <Box>
    <Heading>These are my skills</Heading>   

    <HStack spacing='24px'>
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</HStack>

</Box>
    </>
  )
}

export default Skills