import React from 'react'
import {Logo} from '../Logo'

import { Box, Heading,  Flex, HStack} from '@chakra-ui/react'

import { ColorModeSwitcher } from '../ColorModeSwitcher'

function Header() {
  
  return (
    <>
 
    <Box
        zIndex='sticky'
        position='fixed'
        top='0'
        width='full'
        shadow='sm'
        height='8vh'
      >
        
   <Flex paddingX='6' paddingY='4'>
     <Box flex = '1'>
       <HStack spacing='7'>
         <Logo boxSize='60px'/>
         <Box alignSelf='center'>
         <Heading size='2xl' >Angela Yen | Software Developer</Heading>
         </Box>
         <HStack align='right'>
      <Box marginLeft='70vh' justifySelf="flex-end">
       <ColorModeSwitcher  margin='1vh'/> 
       </Box> 
       </HStack>
       </HStack>
     </Box>
   </Flex>
      </Box>

   
    </>
  )
}

export default Header
