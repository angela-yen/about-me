import React from 'react'

import { Box, Text, Grid, VStack, Heading, Flex, Center} from '@chakra-ui/react'



function AboutMe() {
  
  return (
    <>
      <Center>
     <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
     
       <Grid  minH="20vh" p={3}>
        
          <VStack spacing={6}>
            <Heading>
              Hi there! 
            </Heading>
            <Text>
            I am a software developer passionate about bringing diversity and curiosity into the industry. To me, diversity means empowering people who bring stories and knowledge that hold value and unique perspectives. I have always had a strength and interest in logical thinking and problem solving, which initially sparked my desire to study mathematics. Equally, I have a passion for bringing people together and using the power of technology to solve social issues. In the future, I see myself contributing to the tech section through creating software that involves wellbeing, connecting people and bringing the human into technology.
            </Text>

          </VStack>
        </Grid> 
   
      </Box>
      </Center>
    </>
  )
}

export default AboutMe



// function AirbnbExample() {
//     const property = {
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'Rear view of modern home with pool',
//       beds: 3,
//       baths: 2,
//       title: 'Modern home in city center in the heart of historic Los Angeles',
//       formattedPrice: '$1,900.00',
//       reviewCount: 34,
//       rating: 4,
//     }
  
//     return (
//       <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
//         <Image src={property.imageUrl} alt={property.imageAlt} />
  
//         <Box p='6'>
//           <Box display='flex' alignItems='baseline'>
//             <Badge borderRadius='full' px='2' colorScheme='teal'>
//               New
//             </Badge>
//             <Box
//               color='gray.500'
//               fontWeight='semibold'
//               letterSpacing='wide'
//               fontSize='xs'
//               textTransform='uppercase'
//               ml='2'
//             >
//               {property.beds} beds &bull; {property.baths} baths
//             </Box>
//           </Box>
  
//           <Box
//             mt='1'
//             fontWeight='semibold'
//             as='h4'
//             lineHeight='tight'
//             isTruncated
//           >
//             {property.title}
//           </Box>
  
//           <Box>
//             {property.formattedPrice}
//             <Box as='span' color='gray.600' fontSize='sm'>
//               / wk
//             </Box>
//           </Box>
  
//           <Box display='flex' mt='2' alignItems='center'>
//             {Array(5)
//               .fill('')
//               .map((_, i) => (
//                 <StarIcon
//                   key={i}
//                   color={i < property.rating ? 'teal.500' : 'gray.300'}
//                 />
//               ))}
//             <Box as='span' ml='2' color='gray.600' fontSize='sm'>
//               {property.reviewCount} reviews
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     )
//   }