import * as React from 'react';
import {
  Box,
  HStack,
  Flex,
  Text,
  InfoIcon,
  VStack,
  Input,
  SearchIcon,
  Divider,
  Image,
} from 'native-base';
import PressWrap from './pressable';
import {
    FEMALE_MODE,
    MALE_MODE, PatientModeType,
    PEDIATRIC_MODE,
} from '../navigation/screen/BodyScreen';
const logoSmImg = require('../images/logo_sm.png');
const maleImg = require('../images/male.png');
const maleActiveImg = require('../images/male_active.png');
const femaleImg = require('../images/female.png');
const femaleActiveImg = require('../images/female_active.png');
const childImg = require('../images/child.png');
const childActiveImg = require('../images/child_active.png');

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
          placeholder="Enter your symptoms"
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

export function PatientMode({
  mode,
  onPress,
}: {
  mode?: PatientModeType;
  onPress?: (mode: string) => void;
}) {
  return (
    <Box
      key={mode}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      mt={3}
      mx={10}>
      <PressWrap
        onPress={() => {
          if (onPress) {
            onPress(MALE_MODE);
          }
        }}>
        <Image
          width="56px"
          height="56px"
          borderRadius={100}
          source={mode == MALE_MODE ? maleActiveImg : maleImg}
          alt="male"
        />
      </PressWrap>

      <PressWrap
        onPress={() => {
          if (onPress) {
            onPress(FEMALE_MODE);
          }
        }}>
        <Image
          width="56px"
          height="56px"
          borderRadius={100}
          source={mode == FEMALE_MODE ? femaleActiveImg : femaleImg}
          alt="female"
        />
      </PressWrap>

      <PressWrap
        onPress={() => {
          if (onPress) {
            onPress(PEDIATRIC_MODE);
          }
        }}>
        <Image
          width="56px"
          height="56px"
          borderRadius={100}
          source={mode == PEDIATRIC_MODE ? childActiveImg : childImg}
          alt="child"
        />
      </PressWrap>
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
