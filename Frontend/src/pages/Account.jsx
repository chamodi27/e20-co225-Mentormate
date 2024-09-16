import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
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
} from '@chakra-ui/react';
import { FaUserEdit, FaSignOutAlt, FaCalendarAlt, FaMapMarkerAlt, FaLanguage, FaEnvelope } from 'react-icons/fa';

function Account() {
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/80');
  
  const handleEditClick = (field) => {
    alert(`Edit ${field} clicked`);
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

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} minH="100vh" p={6}>
      {/* Navbar */}
      <Box mb={8}>
        {/* Placeholder Navbar */}
        <Text fontSize="xl" fontWeight="bold" color="blue.600">My Account</Text>
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
          <Avatar size="xl" src={profilePicture} mb={4} />
          <Input
            type="file"
            id="profile-picture-upload"
            accept="image/*"
            display="none"
            onChange={handleProfilePictureChange}
          />
          <Button
            onClick={() => document.getElementById('profile-picture-upload').click()}
            variant="outline"
            colorScheme="blue"
          >
            Change Profile Picture
          </Button>
          <Heading size="md">Firstname Lastname</Heading>
          <Text color="gray.500">name@gmail.com</Text>

          <Divider />
          
          <List spacing={4} textAlign="left" w="full">
            <ListItem fontWeight="bold" color="blue.500">My Profile</ListItem>
            <ListItem>Billing & Payments</ListItem>
          </List>
        </VStack>

        {/* Content */}
        <Box
          flex={1}
          p={6}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          rounded="lg"
        >
          <HStack justify="space-between" mb={6}>
            <Heading size="lg">My Profile</Heading>
            <Button leftIcon={<FaSignOutAlt />} colorScheme="red">
              Sign Out
            </Button>
          </HStack>

          <Text mb={6}>
            Manage your personal information, including phone numbers and email addresses where you can be contacted.
          </Text>

          <Stack spacing={4}>
            <ProfileCard
              icon={FaUserEdit}
              title="Name"
              description="Your name"
              onEditClick={() => handleEditClick('Name')}
            />
            <ProfileCard
              icon={FaCalendarAlt}
              title="Date of Birth"
              description="07 July 2005"
              onEditClick={() => handleEditClick('Date of Birth')}
            />
            <ProfileCard
              icon={FaMapMarkerAlt}
              title="Address"
              description="Give your address here"
              onEditClick={() => handleEditClick('Address')}
            />
            <ProfileCard
              icon={FaLanguage}
              title="Language"
              description="English (UK)"
              onEditClick={() => handleEditClick('Language')}
            />
            <ProfileCard
              icon={FaEnvelope}
              title="Contactable at"
              description="ikakodesign@gmail.com"
              onEditClick={() => handleEditClick('Email')}
            />
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
}

const ProfileCard = ({ icon, title, description, onEditClick }) => (
  <HStack
    p={4}
    bg={useColorModeValue('gray.100', 'gray.600')}
    rounded="md"
    boxShadow="md"
    justify="space-between"
  >
    <HStack spacing={4}>
      <Icon as={icon} boxSize={6} color="blue.500" />
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">{title}</Text>
        <Text color="gray.500">{description}</Text>
      </VStack>
    </HStack>
    <Button size="sm" colorScheme="blue" onClick={onEditClick}>
      Edit
    </Button>
  </HStack>
);

export default Account;
