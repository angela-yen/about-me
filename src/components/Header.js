import React from 'react'

import { Box, Heading, Grid, Flex} from '@chakra-ui/react'

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
        height='7vh'
      >
          <Flex>
          
           <Grid minH="100vh" p={3}>  
           <Heading justifyContent='space center'>Angela Yen</Heading>  
           </Grid>
           <ColorModeSwitcher justifySelf="flex-end" margin='1vh'/> 
           </Flex>
      </Box>
    </>
  )
}

export default Header