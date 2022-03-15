import React from 'react'

import { Box, Heading, Grid, Flex, StackDivider, VStack} from '@chakra-ui/react'

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
    <VStack
  spacing={1}>
<Box>
    <Heading top='4' align='center' justifyContent='space center'>Angela Yen</Heading>  
  </Box>
  <Box>
  
  </Box>
<Box>
  <Heading size='md' align='center'>Software Developer</Heading> 
  </Box>
</VStack>
<ColorModeSwitcher justifySelf="flex-end" margin='1vh'/>
      </Box>

   
    </>
  )
}

export default Header