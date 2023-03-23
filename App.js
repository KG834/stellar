import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import DailyPicScreen from './screens/DailyPic';
import HomeScreen from './screens/Home';
import StarMapScreen from './screens/StarMap';
import { Component } from 'react';
export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" screenOptions={{
         headerShown:false
       }}>
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
         <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
         <Stack.Screen name="StarMap" component={StarMapScreen}/>
   
   
   
   
       </Stack.Navigator>
   
      </NavigationContainer>
     );
  }
  
}


