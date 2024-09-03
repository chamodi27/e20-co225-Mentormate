import { Box, Button, Heading,IconButton,Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowRightIcon } from '@chakra-ui/icons';

const Home = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleClick = () => {
        navigate('/login'); // Use navigate to programmatically route to the login page
    }

    return (
        <Box>
            <Heading as='h1'>Home Page</Heading>
            <Button colorScheme='blue' variant='ghost' onClick={handleClick}>
                Login
            </Button>
            <Text
            cursor={'pointer'} 
            fontSize={'2xl'}
            onClick={() => navigate('/chat')}
            >Chat with you mentor</Text>
            <IconButton
                aria-label="send"
                icon={<ArrowRightIcon />}
                isRound={true}
                variant={'ghost'}
                colorScheme="blue"

            />

        </Box>
    );
}

export default Home;
