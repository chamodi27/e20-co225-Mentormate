import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useNavigate } from 'react-router-dom';

const ChatContainer = ({ messages, onSendMessage }) => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };

  // Detect if it's mobile view
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" height="100vh" bg="gray.800">
      <Flex
        align="center"
        justify={isMobile ? 'center' : 'flex-start'} // Center text on mobile
        position="relative"
        p="3"
      >
        {!isMobile && (
          <Text
            onClick={handleLogoClick}
            cursor="pointer"
            color="gray.300"
            fontSize="2xl"
          >
            MentorMate
          </Text>
        )}
        {isMobile && (
          <Text
            onClick={handleLogoClick}
            cursor="pointer"
            color="gray.300"
            fontSize="2xl"
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
          >
            MentorMate
          </Text>
        )}
      </Flex>

      <Flex direction="column" flex="1" overflow="hidden">
        <MessageList messages={messages} />
        <Box
          position="relative"
          bottom="0"
          width="100%"
          bg="gray.800"
          p="4"
          borderTop="0px"
          borderColor="gray.600"
        >
          <MessageInput onSendMessage={onSendMessage} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ChatContainer;
