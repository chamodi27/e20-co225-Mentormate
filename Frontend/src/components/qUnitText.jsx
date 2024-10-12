import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Heading, Text, CardFooter, Button, Textarea, Box } from '@chakra-ui/react';
import ChatModal from './ChatModal'; // Import the ChatModal component
import { color } from 'framer-motion';
import apiServices from '../services/apiServices';
import MarkdownRenderer from './MarkdownRenderer';

function qUnitText({ question,UnitNo,QuestionNo}) {
  // Step 1: Create a state to store the user's answer
  const [answer, setAnswer] = useState('');
  const [marks,setMarks] = useState(null);
  const [submit,setSubmit] = useState(false)

  // Step 2: Update the answer state as the user types
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handlesubmit = () => {
    apiServices.post('/grade',{student_answer:answer,question:question})
    .then(response =>{
      setMarks(response.data.message)
      setSubmit(true)
    })
    .catch(error=>{
      console.log(error)
    })
  };

  return (
    <>
      <Card border="1px solid" borderColor="gray.200" bg="gray.400">
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
            _placeholder={{color: 'gray.800'}}
            color={'black'}
            size="md" 
            resize="none" 
            value={answer} // Bind to the state
            onChange={handleAnswerChange} // Update state on change
            focusBorderColor='blue.800'
          />
        </CardBody>

        <CardFooter ml="auto" display="flex" justifyContent="flex-end" gap={2}>
          {/* Submit button stays the same */}
          <Button colorScheme="blue" bg="blue.400" borderRadius="5px" color="white" onClick={handlesubmit}>
            Submit
          </Button>

          {/* Step 3: Pass both question and answer to ChatModal */}
          <ChatModal question={question} answer={answer} unit_no={UnitNo} question_no={QuestionNo} />
        </CardFooter>
      </Card>
      {submit && (
        <Box
          bg="gray.800"
          w="100%"
          p={4}
          color="white"
        >
          Evaluation of your answer: 
          <MarkdownRenderer content={marks} />
        </Box>
      )}
    </>
  );
}

export default qUnitText;
