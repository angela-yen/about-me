import React from 'react'

import {Box, Link, Button} from '@chakra-ui/react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

function SideBar() {
  
  return (
    <>
 
    <Box
        position='fixed'
        top='45vh'
        width='100px'
        height='full'
        right='5px'
        p={10}
      >
          <Link href='https://www.linkedin.com/in/angela-yen/'>
              <Button background='none'> 
                <FaLinkedinIn size={20}/>
            </Button>
          </Link>
          <Link href='https://github.com/angela-yen'>
              <Button background='none'> 
                <FaGithub size={20}/>
            </Button>
          </Link>
          <Link href='mailto:angela.yen0210@gmail.com'>
              <Button background='none'> 
                <FiMail size={20}/>
            </Button>
          </Link>
      </Box>

   
    </>
  )
}

export default SideBar
