// src/components/Sidebar.jsx
import { Box, VStack, Text, Drawer, DrawerOverlay, DrawerContent, DrawerBody, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Sidebar = ({ threads, onSelectThread, isMobile }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Sidebar"
            variant="outline"
            onClick={toggleDrawer}
            colorScheme='whiteAlpha'
            position="absolute"
            top="10px"
            left="10px"
          />
          
          <Drawer isOpen={isDrawerOpen} placement="left" onClose={closeDrawer}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerBody bg={'gray.900'}>
                  <VStack align="start" spacing="4">
                    <Text fontSize="xl" mb="4" color={'white'}>Chat Threads</Text>
                    {threads.map((thread) => (
                      <Box
                        key={thread.id}
                        p="1"
                        bg="gray.700"
                        color={'white'}
                        width="100%"
                        borderRadius="md"
                        _hover={{ bg: 'gray.300' }}
                        cursor="pointer"
                        onClick={() => { 
                          onSelectThread(thread);
                          closeDrawer(); // Close drawer after selecting
                        }}
                      >
                        {thread.title || `Chat created at ${new Date(thread.created_at).toLocaleString()}`}
                      </Box>
                    ))}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) : (
        <Box
          width="250px"
          bg="gray.900"
          color="white"
          height="100vh"
          p="4"
          overflowY="auto"
        >
          <VStack align="start" spacing="4">
            <Text fontSize="xl" mb="4">Chat Threads</Text>
            {threads.map((thread) => (
              <Box
                key={thread.id}
                p="1"
                bg="gray.800"
                width="100%"
                borderRadius="md"
                _hover={{ bg: 'gray.600' }}
                cursor="pointer"
                onClick={() => onSelectThread(thread)}
              >
                {thread.title || `Chat created at ${new Date(thread.created_at).toLocaleString()}`}
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
