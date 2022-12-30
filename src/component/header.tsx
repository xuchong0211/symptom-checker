import * as React from 'react';
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
import {useState} from 'react';
const logoSmImg = require('../images/logo_sm.png');
const maleImg = require('../images/male.png');
const maleActiveImg = require('../images/male_active.png');
const femaleImg = require('../images/female.png');
const femaleActiveImg = require('../images/female_active.png');
const childImg = require('../images/child.png');
const childActiveImg = require('../images/child_active.png');
const bodyImg = require('../images/body.png');
const bodyFemaleImg = require('../images/body_female.png');

export function Header() {
  return (
    <Flex w="100%" bg="white">
      <HStack space={3} w="100%" justifyContent="space-between">
        <Box>
          <Image width={6} height={6} shadow={8} source={logoSmImg} alt="RHC" />
        </Box>
        <HStack alignItems="center" alignContent="center">
          <InfoIcon color="primary.600" />
          <Text pl={1} fontSize="xs" color="primary.600">
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

export function PatientMode() {
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
