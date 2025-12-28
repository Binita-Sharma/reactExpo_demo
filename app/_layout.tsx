import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { Header } from '@react-navigation/elements';

const Rootlayout = () =>{
  return (

<Stack screenOptions={{headerShown: false}}>
<Stack.Screen name="index"/>
<Stack.Screen name="login"/>
<Stack.Screen name="signup"/>

  
</Stack>

);
};
export default Rootlayout;