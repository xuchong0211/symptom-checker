import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  Flex,
  Image,
  Center,
  ScrollView,
  Fab,
} from 'native-base';
import {useState} from 'react';
import {Header, PatientMode} from '../../component/header';
import {BODY_PART} from './BodysScreen';
const bodyFemaleImg = require('../../images/body_female.png');

function Body({onPress}: {onPress: (mode: string) => void}) {
  const xOffset = -20;
  const fabProps = {
    renderInPortal: false,
    p: 2,
    shadow: 3,
    borderRadius: 10,
    size: 'sm',
    bg: 'lightBlue.100',
    _text: {
      color: 'lightBlue.800',
    },
    _pressed: {
      _text: {
        color: 'lightBlue.100',
      },
    },
  };
  return (
    <Box alignItems="center" height="100%" my={5}>
      <Flex>
        <Image
          height={550}
          resizeMode="contain"
          source={bodyFemaleImg}
          alt="body"
        />
        <Fab
          {...fabProps}
          bottom={450}
          left={xOffset}
          width={20}
          label={BODY_PART.neck.label}
          onPress={() => onPress(BODY_PART.neck.key)}
        />

        <Fab
          {...fabProps}
          left={xOffset}
          bottom={352}
          width={20}
          label={BODY_PART.upper_limb.label}
          onPress={() => onPress(BODY_PART.upper_limb.key)}
        />

        <Fab
          {...fabProps}
          left={xOffset}
          bottom={275}
          width={20}
          label={BODY_PART.abdomen.label}
          onPress={() => onPress(BODY_PART.abdomen.key)}
        />

        <Fab
          {...fabProps}
          right={xOffset}
          bottom={495}
          width={20}
          label={BODY_PART.head.label}
          onPress={() => onPress(BODY_PART.head.key)}
        />
        <Fab
          {...fabProps}
          right={xOffset}
          bottom={390}
          width={20}
          label={BODY_PART.chest.label}
          onPress={() => onPress(BODY_PART.chest.key)}
        />
        <Fab
          {...fabProps}
          right={xOffset}
          bottom={160}
          width={90}
          label={BODY_PART.lower_limb.label}
          onPress={() => onPress(BODY_PART.lower_limb.key)}
        />
      </Flex>
    </Box>
  );
}

export const MALE_MODE = 'MALE_MODE';
export const FEMALE_MODE = 'FEMALE_MODE';
export const PEDIATRIC_MODE = 'PEDIATRIC_MODE';

function HomeScreen({navigation}) {
  const [mode, setMode] = useState(MALE_MODE);
  return (
    <NativeBaseProvider>
      <ScrollView p="2" w="100%" bg="white" safeAreaY={20}>
        <Header />
        <PatientMode />
        <Center mt={3}>Please click on the discomfort area</Center>
        <Body onPress={mode => navigation.navigate('Body', {mode})} />
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default HomeScreen;
