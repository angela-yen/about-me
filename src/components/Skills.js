import React from 'react'

import { Box, HStack, Heading, Image} from '@chakra-ui/react'

function Skills() {

  return (
    <>
    <Box padding='20px'>
    <Heading padding='20px' textAlign='center'>🛠 Skills </Heading>   

    <HStack spacing='24px'>
   
      <Image boxSize='70px' src='/js.png'></Image>
      <Image boxSize='70px' src='/html.png'></Image>
      <Image boxSize='70px' src='/css.png'></Image>
      
      <Image boxSize='70px' src='/logo192.png'></Image>
            
      <Image boxSize='70px' src='/redux.png'></Image>

      <Image boxSize='70px' src='/nodejs.png'></Image>
      
</HStack>

</Box>
    </>
  )
}

export default Skills

