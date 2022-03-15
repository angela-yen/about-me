import React from 'react'

import { Box, Center, Image, Text, HStack} from '@chakra-ui/react'


function Footer() {
  
  return (
    <>
 
    <Box align='center'>
           <Center p={8}>
        Made with  <Image boxSize='15px' src='/chakraUi.png'></Image> + <Image boxSize='15px' src='/logo192.png'></Image> | Angela Yen 2021 <Image boxSize='15px' src='/logo.png'></Image>
        </Center>
        
    </Box>

   
    </>
  )
}

export default Footer
