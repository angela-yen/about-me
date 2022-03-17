import React from 'react'

import { Box, Center, Image} from '@chakra-ui/react'


function Footer() {
  
  return (
    <>
 
    <Box align='center'>
           <Center p={8}>
        Made with &nbsp; <Image boxSize='15px' src='/chakraUi.png'></Image> &nbsp;  + &nbsp;  <Image boxSize='15px' src='/logo192.png'></Image> &nbsp; | Angela Yen 2021 &nbsp;  <Image boxSize='15px' src='/logo.png'></Image>
        </Center>
        
    </Box>

   
    </>
  )
}

export default Footer




