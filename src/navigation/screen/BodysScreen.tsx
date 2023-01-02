import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  HStack,
  Flex,
  Image,
  Center,
  ScrollView,
  Heading,
  IconButton,
  CloseIcon,
} from 'native-base';
import {capitalize, lowerCase} from 'lodash';
import {Header, PatientMode} from '../../component/header';
import PressWrap from '../../component/Pressable';
const headImg = require('../../images/bodys/head.png');
const neckImg = require('../../images/bodys/neck.png');
const chestImg = require('../../images/bodys/chest.png');
const abdomenImg = require('../../images/bodys/abdomen.png');
const upperLimbImg = require('../../images/bodys/upper_limb.png');
const lowerLimbImg = require('../../images/bodys/lower_limb.png');

const heartImg = require('../../images/chest/heart.png');
const lungImg = require('../../images/chest/lung.png');
const esophagusImg = require('../../images/neck/esophagus.png');
const throatImg = require('../../images/neck/throat.png');
const thyroidImg = require('../../images/neck/thyroid_gland.png');
const faceImg = require('../../images/head/face.png');
const armImg = require('../../images/upper/arm.png');
const elbowImg = require('../../images/upper/elbow.png');
const handImg = require('../../images/upper/hand.png');
const shoulderImg = require('../../images/upper/shoulder.png');

const partsImg = [
  heartImg,
  lungImg,
  esophagusImg,
  throatImg,
  thyroidImg,
  faceImg,
  armImg,
  elbowImg,
  handImg,
  shoulderImg,
];

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

type Part =
  | typeof HEAD_PART
  | typeof NECK_PART
  | typeof CHEST_PART
  | typeof ABDOMEN_PART
  | typeof UPPER_LIMB_PART
  | typeof LOWER_LIMB_PART;

function Body({part}: {part: Part; goBack: () => void}) {
  const imageSrc =
    part === HEAD_PART
      ? headImg
      : part === NECK_PART
      ? neckImg
      : part === CHEST_PART
      ? chestImg
      : part === ABDOMEN_PART
      ? abdomenImg
      : part === UPPER_LIMB_PART
      ? upperLimbImg
      : part === LOWER_LIMB_PART
      ? lowerLimbImg
      : null;
  return (
    <>
      <Center mt={5}>
        <Heading size="md" color="primary.600" bold>
          {capitalize(lowerCase(part))}
        </Heading>
      </Center>
      <Box alignItems="center" my={5}>
        <Flex>
          <Image
            height={300}
            resizeMode="contain"
            source={imageSrc}
            alt={part}
          />
        </Flex>
      </Box>
    </>
  );
}

function BodysScreen({navigation, route}) {
  console.log('body screen navigation', navigation);
  const {mode, part} = route.params;
  console.log('body screen route params', route.params);
  return (
    <NativeBaseProvider>
      <ScrollView p="2" w="100%" bg="white" safeAreaY={20}>
        <Header />
        <PatientMode mode={mode} />
        <Center mt={3}>Please click on the discomfort area</Center>
        <Body part={part} goBack={() => navigation.goBack()} />
      </ScrollView>

      <Box bg="light.200" position="static" bottom={0}>
        <ScrollView
          horizontal
          w={['100%']}
          overScrollMode="always"
          scrollPerfTag="always"
          nestedScrollEnabled={true}>
          <HStack
            px={2}
            space={4}
            height="80px"
            w="100%"
            alignItems="center"
            alignContent="center">
            {partsImg.map((value, index) => {
              return (
                <PressWrap
                  onPress={() => {
                    //todo navigate to symptoms page
                    console.log('todo navigate to symptoms page');
                  }}>
                  <Center
                    height={10}
                    s
                    width={20}
                    key={index}
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center">
                    <Image
                      height={'64px'}
                      resizeMode="contain"
                      source={value}
                      alt="body"
                    />
                  </Center>
                </PressWrap>
              );
            })}
          </HStack>
        </ScrollView>
        <Center bg="white">
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
