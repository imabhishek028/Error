import React, {useState} from 'react';
import PressButton from './PressButton';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
const Stack=createStackNavigator();
function ScreenA(){
  return(
    <View>
      <Text>
        Screen A
      </Text>
    </View>
  )
}
function App(){
  return(
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
        name="Screen A"
        component={ScreenA}
        />
       </Stack.Navigator>
    </NavigationContainer>
  )
}




export default App;
