import React from 'react';
import { Link as RouterLink, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';
import { Box, Flex, HStack, Button, Text, Link, useColorModeValue } from '@chakra-ui/react';

function Navbar() {
    const navigate = useNavigate(); // Initialize the navigate function

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });

        return (
            <Link
                as={RouterLink}
                to={to}
                px={3}
                py={2}
                rounded="md"
                //bg={isActive ? "blue.400" : "transparent"}
                color={isActive ? "white" : "inherit"}
                _hover={{
                    //bg: useColorModeValue("blue.400", "blue.600"),
                    //color: "white"
                }}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <Box as="nav" bg={useColorModeValue("gray.800", "gray.900")} px={4} py="3px" position="fixed" width="100%" zIndex={10}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Text
                    as={RouterLink}
                    to="/"
                    fontSize="2xl"
                    fontWeight="bold"
                    color="white"
                    _hover={{ color: "blue.300" }}
                >
                    MentorMate
                </Text>

                <HStack as="ul" spacing="8px" listStyleType="none" alignItems="center">
                    <CustomLink to="/explore">
                        <Button
                        colorScheme="blue"
                        variant="outline"
                        size="sm"
                        >
                        Explore
                        </Button>
                    </CustomLink>

                    <Link as={RouterLink} to="/account">
                        <Button
                        colorScheme="blue"
                        variant="outline"
                        size="sm"
                        >
                        Account
                        </Button>
                    </Link>

                    <Button
                        onClick={() => navigate('/login')}
                        colorScheme="blue"
                        variant="outline"
                        size="sm"
                    >
                        Login
                    </Button>

                    <Link as={RouterLink} to="/signup">
                        <Button colorScheme="blue" size="sm">
                            Signup
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Box>
    );
}

export default Navbar;
