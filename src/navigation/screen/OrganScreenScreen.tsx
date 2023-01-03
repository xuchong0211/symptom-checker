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
import PressWrap from '../../component/pressable';
import {
  PatientModeType,
  FEMALE_MODE,
  MALE_MODE,
  PEDIATRIC_MODE
} from "./BodyScreen";
const headImg = require('../../images/bodys/head.png');
const neckImg = require('../../images/bodys/neck.png');
const chestImg = require('../../images/bodys/chest.png');
const abdomenImg = require('../../images/bodys/abdomen.png');
const upperLimbImg = require('../../images/bodys/upper_limb.png');
const lowerLimbImg = require('../../images/bodys/lower_limb.png');

//head
const brainImg = require('../../images/organ/head/brain.png');
const faceImg = require('../../images/organ/head/face.png');
const earImg = require('../../images/organ/head/ear.png');
const mouthImg = require('../../images/organ/head/mouth.png');
const eyeImg = require('../../images/organ/head/eye.png');

//neck
const esophagusImg = require('../../images/organ/neck/esophagus.png');
const throatImg = require('../../images/organ/neck/throat.png');
const thyroidImg = require('../../images/organ/neck/thyroid_gland.png');

//chest
const heartImg = require('../../images/organ/chest/heart.png');
const lungImg = require('../../images/organ/chest/lung.png');

const armImg = require('../../images/organ/upper/arm.png');
const elbowImg = require('../../images/organ/upper/elbow.png');
const handImg = require('../../images/organ/upper/hand.png');
const shoulderImg = require('../../images/organ/upper/shoulder.png');

const organImages = [
  brainImg,
  earImg,
  mouthImg,
  eyeImg,
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
  head: {key: HEAD_PART, label: capitalize(lowerCase(HEAD_PART))},
  neck: {key: NECK_PART, label: capitalize(lowerCase(NECK_PART))},
  chest: {key: CHEST_PART, label: capitalize(lowerCase(CHEST_PART))},
  abdomen: {key: ABDOMEN_PART, label: capitalize(lowerCase(ABDOMEN_PART))},
  upper_limb: {key: UPPER_LIMB_PART, label: capitalize(lowerCase(UPPER_LIMB_PART))},
  lower_limb: {key: LOWER_LIMB_PART, label: capitalize(lowerCase(LOWER_LIMB_PART))},
};

type PartType =
  | typeof HEAD_PART
  | typeof NECK_PART
  | typeof CHEST_PART
  | typeof ABDOMEN_PART
  | typeof UPPER_LIMB_PART
  | typeof LOWER_LIMB_PART;


function Body({part}: {part: PartType}) {
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

function OrganSelections({mode, part, goBack}: {goBack: () => void, part: PartType, mode: PatientModeType}){
  console.log("organ selections mode", mode, part);
  return <Box bg="light.200" position="static" bottom={0}>
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
        {organImages.map((value, index) => {
          return (
              <PressWrap
                  key={index}
                  onPress={() => {
                    //todo navigate to symptoms page
                    console.log('todo navigate to symptoms page');
                  }}>
                <Center
                    height={10}
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
            goBack();
          }}
      />
    </Center>
  </Box>
}

function OrganScreen({navigation, route} : {navigation: any, route: any}) {
  console.log('body screen navigation', navigation);
  const {mode, part} = route.params;
  console.log('body screen route params', route.params);
  const goBack= () => navigation.goBack();
  return (
    <NativeBaseProvider>
      <ScrollView p="2" w="100%" bg="white" safeAreaY={20}>
        <Header />
        <PatientMode mode={mode} />
        <Center mt={3}>Please click on the discomfort area</Center>
        <Body part={part} />
      </ScrollView>
      <OrganSelections {...{mode, part, goBack}}/>
    </NativeBaseProvider>
  );
}

export default OrganScreen;
