import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Heading, Text, CardFooter, Button, Textarea } from '@chakra-ui/react';
import ChatModal from './ChatModal'; // Import the ChatModal component

function qUnitText({ question,UnitNo,QuestionNo}) {
  // Step 1: Create a state to store the user's answer
  const [answer, setAnswer] = useState('');

  // Step 2: Update the answer state as the user types
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <>
      <Card border="1px solid" borderColor="gray.200" bg="gray.500">
        <CardHeader>
          <Heading size="md" borderBottom="1px solid black" pb={2}>
            {typeof question === 'string' && question.includes('<')
              ? <Text fontSize="lg" mb={4} dangerouslySetInnerHTML={{ __html: question }} />
              : <Text fontSize="lg" mb={4}>{question}</Text>}
          </Heading>
        </CardHeader>

        <CardBody>
          {/* Step 2: Bind the Textarea to the answer state */}
          <Textarea 
            placeholder="Type your answer here..." 
            size="md" 
            resize="none" 
            value={answer} // Bind to the state
            onChange={handleAnswerChange} // Update state on change
          />
        </CardBody>

        <CardFooter ml="auto" display="flex" justifyContent="flex-end" gap={2}>
          {/* Submit button stays the same */}
          <Button colorScheme="blue" bg="blue.400" borderRadius="5px" color="white">
            Submit
          </Button>

          {/* Step 3: Pass both question and answer to ChatModal */}
          <ChatModal question={question} answer={answer} />
        </CardFooter>
      </Card>
    </>
  );
}

export default qUnitText;
