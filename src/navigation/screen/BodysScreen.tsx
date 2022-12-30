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
  Heading,
  IconButton,
  CloseIcon,
  Pressable,
} from 'native-base';
import {useState} from 'react';
import {capitalize, lowerCase, range} from 'lodash';
import {Header, PatientMode} from '../../component/header';
const headImg = require('../../images/bodys/head.png');
const neckImg = require('../../images/bodys/neck.png');
const chestImg = require('../../images/bodys/chest.png');
const abdomenImg = require('../../images/bodys/abdomen.png');
const upperLimbImg = require('../../images/bodys/upper_limb.png');
const lowerLimbImg = require('../../images/bodys/lower_limb.png');

const HEAD_PART = 'head';
const NECK_PART = 'neck';
const CHEST_PART = 'chest';
const ABDOMEN_PART = 'abdomen';
const UPPER_LIMB_PART = 'upper_limb';
const LOWER_LIMB_PART = 'lower_limb';

export const BODY_PART = {
  head: {key: HEAD_PART, label: 'Head'},
  neck: {key: NECK_PART, label: 'Neck'},
  chest: {key: CHEST_PART, label: 'Chest'},
  abdomen: {key: ABDOMEN_PART, label: 'Abdomen'},
  upper_limb: {key: UPPER_LIMB_PART, label: 'Upper limb'},
  lower_limb: {key: LOWER_LIMB_PART, label: 'Lower limb'},
};

type Mode =
  | typeof HEAD_PART
  | typeof NECK_PART
  | typeof CHEST_PART
  | typeof ABDOMEN_PART
  | typeof UPPER_LIMB_PART
  | typeof LOWER_LIMB_PART;

function Body({mode}: {mode: Mode}) {
  const imageSrc =
    mode === HEAD_PART
      ? headImg
      : mode === NECK_PART
      ? neckImg
      : mode === CHEST_PART
      ? chestImg
      : mode === ABDOMEN_PART
      ? abdomenImg
      : mode === UPPER_LIMB_PART
      ? upperLimbImg
      : mode === LOWER_LIMB_PART
      ? lowerLimbImg
      : null;
  return (
    <>
      <Center mt={5}>
        <Heading size="md" color="primary.600" bold>
          {capitalize(lowerCase(mode))}
        </Heading>
      </Center>
      <Box alignItems="center" my={5}>
        <Flex>
          <Image
            height={300}
            resizeMode="contain"
            source={imageSrc}
            alt={mode}
          />
        </Flex>
      </Box>
    </>
  );
}

function BodysScreen({navigation, route}) {
  console.log('body screen navigation 1111111111', navigation);
  const {mode} = route.params;
  console.log('body screen route params 222222222222222', route.params);
  return (
    <NativeBaseProvider>
      <ScrollView p="2" w="100%" bg="white" safeAreaY={20}>
        <Header />
        <PatientMode />
        <Center mt={3}>Please click on the discomfort area</Center>
        <Body mode={mode} goBack={() => navigation.goBack()} />
      </ScrollView>

      <Box bg="light.50" position="static" bottom={0}>
        <ScrollView horizontal w={['100%']}>
          <HStack
            px={2}
            boxSize={22}
            space={4}
            height="80px"
            w="100%"
            alignItems="center"
            alignContent="center">
            {range(10).map((value, index) => {
              return (
                <Pressable
                  onPressIn={() => {
                    console.log('ssssssssssssssssss');
                  }}>
                  {({isHovered, isFocused, isPressed}) => {
                    return (
                      <Box
                        maxW="96"
                        shadow="3"
                        bg={
                          isPressed
                            ? 'coolGray.200'
                            : isHovered
                            ? 'coolGray.200'
                            : 'coolGray.100'
                        }
                        style={{
                          transform: [
                            {
                              scale: isPressed ? 0.9 : 1,
                            },
                          ],
                        }}>
                        <Center
                          bg="primary.100"
                          height={10}
                          width={20}
                          key={index}
                          justifyContent="center"
                          alignItems="center"
                          alignContent="center">
                          {value}
                        </Center>
                      </Box>
                    );
                  }}
                </Pressable>
              );
            })}
          </HStack>
        </ScrollView>
        <Center mb={1}>
          <IconButton
            size="sm"
            variant="layout"
            icon={<CloseIcon />}
            onPress={() => {
              console.log('back');
              navigation.goBack();
            }}
          />
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

export default BodysScreen;
