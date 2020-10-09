import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Chat" component={ChatScreen}  />
    </Stack.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
