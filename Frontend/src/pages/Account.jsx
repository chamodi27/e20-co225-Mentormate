import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  Input,
  Divider,
  List,
  ListItem,
  Avatar,
  Heading,
  Stack,
  useColorModeValue,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormHelperText,
  Input as ChakraInput,
  Select,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import { FaUserEdit, FaSignOutAlt, FaCalendarAlt, FaMapMarkerAlt, FaLanguage, FaEnvelope, FaCreditCard, FaLock } from 'react-icons/fa';
import apiServices from '../services/apiServices';  // Make sure to import your API services.

function Account() {
  // Managing state for active section, profile picture, password modal, card details modal, and form data
  const [activePage, setActivePage] = useState('profile'); // Tracks if we're on profile or progress page
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/80');
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isCardDetailsOpen, setIsCardDetailsOpen] = useState(false);
  const [editing, setEditing] = useState(null); // track currently editing field
  const [formData, setFormData] = useState({
    name: 'Firstname Lastname',
    dob: '07 July 2005',
    address: 'Give your address here',
    language: 'English',
    email: 'ikakodesign@gmail.com',
  });
  const [error, setError] = useState('');

  // FUNCTION FOR API CALLING
  // Fetching user profile data when the page loads
  useEffect(() => {
    const fetchProfile = () => {
      apiServices.get('/account')
        .then(response => {
          setFormData({
            name: response.data.name,
            dob: response.data.dob,
            address: response.data.address,
            language: response.data.language,
            email: response.data.email,
          });
          setProfilePicture(response.data.profilePicture || 'https://via.placeholder.com/80');
        })
        .catch(error => {
          setError(error.response?.data?.error || "An error occurred while fetching profile data");
        });
    };

    fetchProfile();
  }, []); // Runs only once when the component mounts

  // This handles form submission for profile updates
  const handleProfPage = () => {
    setEditing(false); // Disable editing after submission
    apiServices.post('/profile', formData)
      .then(response => {
        console.log('Profile updated successfully:', response.data);
      })
      .catch(error => {
        setError(error.response?.data?.error || "An error occurred while updating the profile");
      });
  };

  // Functions for handling state
  const handleEditClick = (field) => {
    setEditing(field);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    handleProfPage();  // Save the updated profile information
    setEditing(null);
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleOpenChangePassword = () => setIsChangePasswordOpen(true);
  const handleCloseChangePassword = () => setIsChangePasswordOpen(false);

  const handleOpenCardDetails = () => setIsCardDetailsOpen(true);
  const handleCloseCardDetails = () => setIsCardDetailsOpen(false);

  return (
    <Box bg={useColorModeValue('gray.300', 'gray.800')} minH="100vh" p={6}>
      {/* Navbar */}
      <Box mb={8}>
        <Text fontSize="2xl" fontWeight="bold" color="blue.700">My Account</Text>
      </Box>

      <HStack align="flex-start" spacing={6}>
        {/* Sidebar */}
        <VStack
          spacing={4}
          p={6}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          rounded="lg"
          w="300px"
        >
          {/* User's Profile Picture */}
          <Avatar size="xl" src={profilePicture} mb={4} />
          <Input
            type="file"
            id="profile-picture-upload"
            accept="image/*"
            display="none"
            onChange={handleProfilePictureChange}
          />
          {/* Button to upload a new profile picture */}
          <Button
            onClick={() => document.getElementById('profile-picture-upload').click()}
            variant="outline"
            colorScheme="blue"
          >
            Change Profile Picture
          </Button>
          <Heading size="md">{formData.name}</Heading>
          <Text color="gray.500">{formData.email}</Text>

          <Divider />

          {/* Sidebar Navigation Links */}
          <List spacing={4} textAlign="left" w="full">
            <ListItem fontWeight={activePage === 'profile' ? "bold" : "normal"}>
              <Link onClick={() => setActivePage('profile')}>My Profile</Link>
            </ListItem>
            <ListItem fontWeight={activePage === 'progress' ? "bold" : "normal"}>
              <Link onClick={() => setActivePage('progress')}>My Progress</Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleOpenCardDetails}>Billing & Payments</Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleOpenChangePassword}>Change Password</Link>
            </ListItem>
          </List>
        </VStack>

        {/* Content Area - Switch between My Profile and My Progress */}
        {activePage === 'profile' ? (
          <Box
            flex={1}
            p={6}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="lg"
            rounded="lg"
          >
            {/* Header and Sign Out Button */}
            <HStack justify="space-between" mb={6}>
              <Heading size="lg">My Profile</Heading>
              <Button leftIcon={<FaSignOutAlt />} colorScheme="red">
                Sign Out
              </Button>
            </HStack>

            {/* Introductory Text */}
            <Text mb={6}>
              Manage your personal information, including phone numbers and email addresses where you can be contacted.
            </Text>

            {/* List of Editable Profile Fields */}
            <Stack spacing={4}>
              <ProfileCard
                icon={FaUserEdit}
                title="Name"
                description={formData.name}
                type="text"
                isEditing={editing === 'name'}
                onEditClick={() => handleEditClick('name')}
                onSave={handleSave}
                onChange={handleInputChange}
              />
              <ProfileCard
                icon={FaCalendarAlt}
                title="Date of Birth"
                description={formData.dob}
                type="date"
                isEditing={editing === 'dob'}
                onEditClick={() => handleEditClick('dob')}
                onSave={handleSave}
                onChange={handleInputChange}
              />
              <ProfileCard
                icon={FaMapMarkerAlt}
                title="Address"
                description={formData.address}
                type="address"
                isEditing={editing === 'address'}
                onEditClick={() => handleEditClick('address')}
                onSave={handleSave}
                onChange={handleInputChange}
              />
              <ProfileCard
                icon={FaLanguage}
                title="Language"
                description={formData.language}
                type="dropdown"
                isEditing={editing === 'language'}
                onEditClick={() => handleEditClick('language')}
                onSave={handleSave}
                onChange={handleInputChange}
              />
              <ProfileCard
                icon={FaEnvelope}
                title="Contactable at"
                description={formData.email}
                type="email"
                isEditing={editing === 'email'}
                onEditClick={() => handleEditClick('email')}
                onSave={handleSave}
                onChange={handleInputChange}
              />
            </Stack>
          </Box>
        ) : (
          <Box
            flex={1}
            p={6}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="lg"
            rounded="lg"
          >
            <Heading size="lg" mb={6}>My Progress</Heading>

            <Box mb={6} p={6} bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" rounded="lg">
              <HStack justify="space-between" mb={4}>
                <Text fontSize="xl" fontWeight="bold">Overall Grade</Text>
                <Box
                  borderRadius="full"
                  bg="green.200"
                  w={16}
                  h={16}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text fontSize="2xl" fontWeight="bold">A</Text>
                </Box>
              </HStack>

              <Text fontSize="sm" color="gray.500">Keep up the good work! You're excelling in your courses.</Text>
            </Box>

            {/* Circular progress bar */}
            <Box textAlign="center">
              <CircularProgress value={80} size="120px" color="green.400">
                <CircularProgressLabel>80%</CircularProgressLabel>
              </CircularProgress>
              <Text mt={4} fontSize="xl">Course Completion</Text>
            </Box>
          </Box>
        )}
      </HStack>

      {/* Modal for changing password */}
      <Modal isOpen={isChangePasswordOpen} onClose={handleCloseChangePassword}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Form for changing password */}
            <FormControl>
              <FormLabel>Current Password</FormLabel>
              <ChakraInput type="password" />
              <FormLabel mt={4}>New Password</FormLabel>
              <ChakraInput type="password" />
              <FormLabel mt={4}>Confirm New Password</FormLabel>
              <ChakraInput type="password" />
              <Button mt={6} colorScheme="blue" onClick={handleCloseChangePassword}>Submit</Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Modal for card details */}
      <Modal isOpen={isCardDetailsOpen} onClose={handleCloseCardDetails}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Billing & Payments</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Display the user's saved payment details */}
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <ChakraInput type="text" placeholder="**** **** **** 1234" />
              <FormHelperText>We only store the last four digits of your card.</FormHelperText>
              <Button mt={6} colorScheme="blue" onClick={handleCloseCardDetails}>Close</Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Account;

