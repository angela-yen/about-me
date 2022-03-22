import React from 'react'

import { Box, Heading, HStack, UnorderedList, ListItem} from '@chakra-ui/react'

function Interests() {

  return (
    <>
    <Box padding='20px'>
        <Heading textAlign='center'p={5}>🔍 Interests </Heading>
        <HStack>
          <Box p={5}>
            <Heading fontSize='lg'>
              Tech
            </Heading>
            <Box>
              <UnorderedList> 
              <ListItem>Learning TypeScript </ListItem>
            
                <ListItem>Creating APIs</ListItem>
                <ListItem>Technology helping mental health</ListItem>
                <ListItem>Software targeting social issues</ListItem>
              </UnorderedList>
            </Box>
            </Box>
            <Box p={5}>
            <Heading fontSize='lg'>
              Hobbies
            </Heading>
         <Box>
           <UnorderedList>
             <ListItem>
               Ocean Swimming
             </ListItem>
             <ListItem> Bouldering
             </ListItem>
             <ListItem>EDM Music Mixing</ListItem>
             <ListItem>Exploring Coffee Shops</ListItem>
           </UnorderedList>
         </Box>
          </Box>
        </HStack>
  

</Box>
    </>
  )
}

export default Interests

