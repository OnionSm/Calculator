import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainScreen from './MainScreen'




const Stack = createStackNavigator()

export default function Index()
{
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name = "MainScreen" component={MainScreen}/>
      </Stack.Navigator>  
  );
}

