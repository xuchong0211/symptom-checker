import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BodyScreen from "./screen/BodyScreen";
import OrganScreen from "./screen/OrganScreenScreen";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Body" component={BodyScreen} />
        <Stack.Screen name="Organ" component={OrganScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
