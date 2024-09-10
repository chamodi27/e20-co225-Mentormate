import React from 'react';
import { Box, Image, Text, Heading, Card, CardBody, ChakraProvider } from '@chakra-ui/react';


function UnitCard({ imageSrc, text, link }) {
    const handleClick = () => {
        if (window.history) {
            window.history.pushState(null, '', link);
        }
    };

    return (
        <ChakraProvider>
        <Box maxW="240px" onClick={handleClick} cursor="pointer" >
            <Card>
                <Image
                    src={imageSrc}
                    alt="Card image"
                    objectFit="cover"
                    w="100%"
                    h="140px"
                    
                    backgroundColor="gray.200"
                />
                <CardBody bg="gray.300" p={4}>
                    <Text textAlign="center" fontSize="lg" fontWeight="bold">
                        {text}
                    </Text>
                </CardBody>
            </Card>
        </Box>
        </ChakraProvider>
    );
}

export default UnitCard;
