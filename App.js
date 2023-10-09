import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDrawer from './screens/myDrawer';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import  Welcome  from './screens/Welcome';
import SignUp from './screens/SignUp';
import SettingsScreen from './screens/SettingsScreen';
import RateUsScreen from './screens/RateUsScreen';
import PhotoSite from './screens/PhotoSite';
import VideoSite from './screens/VideoSite';
import FileSite from './screens/FileSite';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="RateUs" component={RateUsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PhotoSite" component={PhotoSite} options={{ title: 'Photos' }} />
        <Stack.Screen name="VideoSite" component={VideoSite} options={{ title: 'Videos' }} />
        <Stack.Screen name="FileSite" component={FileSite} options={{ title: 'Files' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
