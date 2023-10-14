import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Welcome from './screens/Welcome';
import SignUp from './screens/SignUp';
import Setting from './screens/Settings';
import RateApp from './screens/RateApp';
import SignOut from './screens/SignOut';
import PhotoScreen from './screens/PhotoScreen';
import Video from './screens/VideoScreen';
import File from './screens/FileScreen';



const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Welcome'>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Welcome" component={Welcome} options={{ headerShown: false,drawerLabel: () => null, drawerItemStyle: { display: 'none' } }}/>
        <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false,drawerLabel: () => null, drawerItemStyle: { display: 'none' }  }}/>
        <Drawer.Screen name="SignUp" component={SignUp} options={{ headerShown: false,drawerLabel: () => null, drawerItemStyle: { display: 'none' }  }} />
        <Drawer.Screen name="Photo" component={PhotoScreen} options={{ headerShown: false,drawerLabel: () => null, drawerItemStyle: { display: 'none' } }}/>
        <Drawer.Screen name="Video" component={Video} options={{ headerShown: false,drawerLabel: () => null, drawerItemStyle: { display: 'none' }  }} />
        <Drawer.Screen name="File" component={File} options={{ headerShown: false,drawerLabel: () => null, drawerItemStyle: { display: 'none' }  }} />
        <Drawer.Screen name="RateApp" component={RateApp}/>
        <Drawer.Screen name="Settings" component={Setting}/>
        <Drawer.Screen name="SignOut" component={SignOut}/>
      </Drawer.Navigator>
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

