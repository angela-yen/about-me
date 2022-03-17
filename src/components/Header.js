import React from 'react'
import Logo from '../Logo'

import { Box, Heading,  Flex, HStack, Spacer} from '@chakra-ui/react'

import { ColorModeSwitcher } from '../ColorModeSwitcher'

function Header() {
  
  return (
    <>
 
    <Box
        zIndex='sticky'
        // position='fixed'
        top='0'
        width='full'
        shadow='sm'
        height='13vh'
        bg='solid'
      >
        
   <Flex paddingX='6' paddingY='4'>
     <Box flex = '1'>
       <HStack spacing='7'>
         <Logo />
         <Box >
         <Heading size='2xl' >Angela Yen | Software Developer</Heading>
         </Box>
           <Spacer />
      <Box >
       <ColorModeSwitcher /> 
       </Box> 
       </HStack>
     </Box>
   </Flex>
      </Box>

   
    </>
  )
}

export default Header
