import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowRightIcon } from '@chakra-ui/icons';
import Navbar from "../components/Navbar";


const Home = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <Box>
            <Navbar />
            
            <Heading as='h1' >Home Page</Heading>
            <Text
                cursor={'pointer'}
                fontSize={'2xl'}
                onClick={() => navigate('/chat')}
            >
                Chat with your mentor
            </Text>
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
