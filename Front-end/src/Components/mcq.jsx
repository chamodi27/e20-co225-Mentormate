import React from 'react';
import Navbar from './Navbar';
import { Card, CardHeader, CardBody, Heading, Text, CardFooter, Button, Box, Radio, RadioGroup, Stack, HStack } from '@chakra-ui/react';

function Mcq({ question, options }) {
  return (
    <>
      <Card border="1px solid black" borderColor="black" bg="gray.400">
        <CardHeader>
          <Heading size="md" borderBottom="1px solid black" pb={2}>
          {typeof question === 'string' && question.includes('<')
            ? <Text fontSize="lg" mb={4} dangerouslySetInnerHTML={{ __html: question }} />
            : <Text fontSize="lg" mb={4}>{question}</Text>}
          </Heading>
        </CardHeader>

        <CardBody align="start">
          <Box>
            <RadioGroup>
              <Stack spacing={4}>
                {options.map((option, index) => (
                  <HStack alignItems="start" key={index}>
                    <Radio
                      value={option.value}
                      sx={{
                        ".chakra-radio__control": {
                          borderColor: "black",
                          _checked: {
                            bg: "solid gray",
                            borderColor: "black",
                          },
                        },
                      }}
                    />
                    {typeof option.label === 'string' && option.label.includes('<')
                    ? <span dangerouslySetInnerHTML={{ __html: option.label }} />
                    : <Box>{option.label}</Box>}
                  </HStack>
                ))}
              </Stack>
            </RadioGroup>
          </Box>
        </CardBody>

        <CardFooter ml="auto" display="flex" justifyContent="flex-end" gap={2}>
          <Button colorScheme="blue" bg="blue" borderRadius="5px" color="white">
            Confirm
          </Button>
          <Button colorScheme="green" bg="green" borderRadius="5px" color="white">
            Review
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default Mcq;
