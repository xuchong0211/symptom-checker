import * as React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NativeBaseProvider,
  Box,
  HStack,
  Container,
  Flex,
  HamburgerIcon,
  Text,
  InfoIcon,
  VStack,
  Input,
  Icon,
  SearchIcon,
  Spacer,
  Avatar,
  Divider,
  Image,
  Center,
  AspectRatio,
  ScrollView,
  Fab,
} from 'native-base';
const maleImg = require('../images/male.png');
const maleActiveImg = require('../images/male_active.png');
const femaleImg = require('../images/female.png');
const femaleActiveImg = require('../images/female_active.png');
const childImg = require('../images/child.png');
const childActiveImg = require('../images/child_active.png');
const bodyImg = require('../images/body.png');

function Header() {
  return (
    <Flex w="100%" bg="white">
      <HStack space={3} w="100%" justifyContent="space-between">
        <Box>RHC</Box>
        <HStack alignItems="center" alignContent="center">
          <InfoIcon />
          <Text pl={1} fontSize="xs">
            Word Version
          </Text>
        </HStack>
      </HStack>

      <VStack w="100%" space={1} alignSelf="center" mt={3}>
        <Input
          placeholder="enter your symptoms"
          width="100%"
          borderWidth="0"
          borderRadius="md"
          bg="muted.200"
          py="1"
          px="1"
          fontSize="14"
          InputLeftElement={
            <SearchIcon
              m="1"
              ml="3"
              size="5"
              color="black"
              as={<SearchIcon />}
            />
          }
        />
      </VStack>
    </Flex>
  );
}

function Patients() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      mt={3}
      mx={10}>
      <Image
        width="56px"
        height="56px"
        borderRadius={100}
        source={maleActiveImg}
        alt="male"
      />
      <Image
        width="56px"
        height="56px"
        borderRadius={100}
        source={femaleImg}
        alt="female"
      />
      <Image
        width="56px"
        height="56px"
        borderRadius={100}
        source={childImg}
        alt="child"
      />
      <Divider
        w="200%"
        mx="-100"
        position="absolute"
        top="50%"
        zIndex={-4}
        shadow="1"
        thickness="0.2"
        bg="dark.800"
      />
    </Box>
  );
}

function Body() {
  const xOffset = -90;
  const fabProps = {
    renderInPortal: false,
    p: 2,
    shadow: 3,
    borderRadius: 10,
    size: 'sm',
    bg: 'lightBlue.100',
    text: {
      color: 'lightBlue.800',
    },
  };
  return (
    <Box alignItems="center" height="100%" my={5}>
      <Flex>
        <Image width={150} height={550} source={bodyImg} alt="body" />

        <Fab
          {...fabProps}
          bottom={450}
          left={xOffset}
          width={20}
          label="Neck"
        />

        <Fab
          {...fabProps}
          left={xOffset}
          bottom={350}
          width={20}
          label="Upper limb"
        />

        <Fab
          {...fabProps}
          left={xOffset}
          bottom={275}
          width={20}
          label="Abdomen"
        />

        <Fab
          {...fabProps}
          right={xOffset}
          bottom={495}
          width={20}
          label="Head"
        />
        <Fab
          {...fabProps}
          right={xOffset}
          bottom={390}
          width={20}
          label="Chest"
        />
        <Fab
          {...fabProps}
          right={xOffset}
          bottom={160}
          width={90}
          label="Lower limb"
        />
      </Flex>
    </Box>
  );
}

function HomeScreen() {
  return (
    <NativeBaseProvider>
      <ScrollView p="2" w="100%" bg="white" safeAreaY={20}>
        <Header />
        <Patients />
        <Center mt={3}>Please click on the discomfort area</Center>
        <Body />
      </ScrollView>
    </NativeBaseProvider>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
