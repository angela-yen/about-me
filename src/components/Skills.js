import React from 'react'

import { Box, HStack, Heading, Image, VStack} from '@chakra-ui/react'

function Skills() {

  return (
    <>
      <Box padding='20px'>
        <Heading padding='20px' textAlign='center'>🛠 Skills </Heading>   
        <VStack>
          <HStack spacing='24px'>
            <Image boxSize='70px' src='/ruby.png'></Image>
            <Image boxSize='70px' src='/rails.png'></Image>
            <Image boxSize='70px' src='/mariadb.png'></Image>    
            <Image boxSize='70px' src='/rspec.png'></Image>            
            <Image boxSize='70px' src='/raygun.png'></Image>        
          </HStack>
          <HStack spacing='24px'>
              <Image boxSize='70px' src='/js.png'></Image>
              <Image boxSize='70px' src='/html.png'></Image>
              <Image boxSize='70px' src='/css.png'></Image>
              <Image boxSize='70px' src='/logo192.png'></Image>
              <Image boxSize='70px' src='/redux.png'></Image>
              <Image boxSize='70px' src='/nodejs.png'></Image>
            </HStack>
        </VStack>
      </Box>
    </>
  )
}

export default Skills

