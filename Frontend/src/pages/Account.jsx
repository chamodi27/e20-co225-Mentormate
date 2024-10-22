import React, { useEffect, useState } from 'react';
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
import apiServices from '../services/apiServices';
import { FaSignOutAlt,FaCalendarAlt, FaMapMarkerAlt, FaLanguage, FaEnvelope } from 'react-icons/fa';



function Account() {
  const [activePage, setActivePage] = useState('profile');
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/80');
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    name: 'Firstname Lastname',
    dob: '07 July 2005',
    address: 'Give your address here',
    language: 'English',
    email: 'example@email.com',
  });

  const [unitsProgress, setUnitsProgress] = useState([]);
  const [finalGrade, setFinalGrade] = useState(0);
  const [error, setError] = useState('');

  const fetchUnitsData = () => {
    apiServices.get('/profile')
      .then(response => {
        const { student, final_grade, unit_marks } = response.data;
        console.log(response.data);

        setFormData((prev) => ({ ...prev, name: student.name, email: student.email }));
        setFinalGrade(final_grade);

        const unitDetails = unit_marks.map((unit) => ({
          unitId: unit.unit_id,
          unitName: unit.unit_name,
          unitProgress: unit.unit_progress,
          averageMarks: unit.average_marks,
        }));

        setUnitsProgress(unitDetails);
      })
      .catch(error => {
        setError(error.response?.data?.error || "Error fetching unit data");
      });
  };

  useEffect(() => {
    fetchUnitsData();
  }, []);

  const handleEditClick = (field) => {
    setEditing(field);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
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

  return (


    <Box bg={useColorModeValue('gray.300', 'gray.800')} minH="100vh" p={6}>
      <Box mb={8}>
        <Text fontSize="2xl" fontWeight="bold" color="blue.700">
          My Account
        </Text>
      </Box>

      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}

      <HStack align="flex-start" spacing={6}>
        <VStack
          spacing={4}
          p={6}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          rounded="lg"
          w="300px"
        >
          <Avatar size="xl" src={profilePicture} mb={4} />
          <input
            type="file"
            id="profile-picture-upload"
            style={{ display: 'none' }}
            onChange={handleProfilePictureChange}
          />
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

          <List spacing={4} textAlign="left" w="full">
            <ListItem fontWeight={activePage === 'profile' ? 'bold' : 'normal'}>
              <Link onClick={() => setActivePage('profile')}>My Profile</Link>
            </ListItem>
            <ListItem fontWeight={activePage === 'progress' ? 'bold' : 'normal'}>
              <Link onClick={() => setActivePage('progress')}>My Progress</Link>
            </ListItem>
          </List>
        </VStack>

        {activePage === 'profile' ? (
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

            <Stack spacing={4}>
              <ProfileCard
                title="Name"
                description={formData.name}
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
                <Box borderWidth="1px" borderRadius="lg" p={4} bg={useColorModeValue('blue.100', 'blue.900')}>
                  <Text fontSize="2xl">{finalGrade}</Text>
                </Box>
              </HStack>
              {unitsProgress.map((unit) => (
                <Box key={unit.unitId} mb={4}>
                  <Text fontSize="lg" fontWeight="bold">{unit.unitName}</Text>
                  <Text>Progress: {unit.unitProgress}%</Text>
                  <Text>Average Marks: {unit.averageMarks}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </HStack>
    </Box>
  );
}

// Reusable Profile Card Component
function ProfileCard({ icon, title, description, type, isEditing, onEditClick, onSave, onChange }) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" bg={useColorModeValue('gray.50', 'gray.700')} boxShadow="sm">
      <HStack justify="space-between" align="center">
        <HStack spacing={4} align="center">
          <Icon as={icon} w={6} h={6} color="blue.500" />
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="lg" fontWeight="bold">{title}</Text>
            {isEditing ? (
              <Input
                name={title.toLowerCase()}
                type={type === 'dropdown' ? 'text' : type}
                placeholder={title.toLowerCase()}
                onChange={onChange}
              />
            ) : (
              <Text>{description}</Text>
            )}
          </VStack>
        </HStack>
        {isEditing ? (
          <Button colorScheme="blue" onClick={onSave}>Save</Button>
        ) : (
          <Button variant="outline" onClick={onEditClick}>Edit</Button>
        )}
      </HStack>
    </Box>
    
  );
}

export default Account;
