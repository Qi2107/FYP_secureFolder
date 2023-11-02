import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Welcome from './screens/Welcome';
import SignUp from './screens/SignUp';
import RateApp from './screens/RateApp';
import SignOut from './screens/SignOut';
import PhotoScreen from './screens/PhotoScreen';
import VideoScreen from './screens/VideoScreen';
import PhotoUpload from './screens/PhotoUpload';
import VideoUpload from './screens/VideoUpload';
import PhotoDownload from './screens/PhotoDownload';
import VideoDownload from './screens/VideoDownload';
import PhotoDelete from './screens/PhotoDelete';
import VideoDelete from './screens/VideoDelete';
import AboutUs from './screens/AboutUs';
import ChangePassword from './screens/ChangePassword';
import ForgetPasswordScreen from './screens/ForgetPassword';
import Request from './screens/Request';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Welcome'>
        <Drawer.Screen name="Welcome" component={Welcome} options={{ headerShown: false, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="SignUp" component={SignUp} options={{ headerShown: false, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Forget" component={ForgetPasswordScreen} options={{ headerShown: false, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabelStyle: { fontSize: 18 } }} />
        <Drawer.Screen name="PhotoScreen" component={PhotoScreen} options={{ title: 'Photos', drawerLabelStyle: { fontSize: 18 } }} />
        <Drawer.Screen name="VideoScreen" component={VideoScreen} options={{ title: 'Videos', drawerLabelStyle: { fontSize: 18 } }} />
        <Drawer.Screen name="PhotoUpload" component={PhotoUpload} options={{ title: 'Upload Photos', drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="VideoUpload" component={VideoUpload} options={{ title: 'Upload Videos', drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="PhotoDownload" component={PhotoDownload} options={{ title: 'Download Photos', drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="VideoDownload" component={VideoDownload} options={{ title: 'Download Videos', drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="PhotoDelete" component={PhotoDelete} options={{ title: 'Delete Photos', drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="VideoDelete" component={VideoDelete} options={{ title: 'Delete Videos', drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Change Password" component={ChangePassword} options={{ title: 'Change Password', drawerLabelStyle: { fontSize: 18 } }} />
        <Drawer.Screen name="Request" component={Request} options={{ title: 'Request Disable/Delete', drawerLabelStyle: { fontSize: 18 } }} />
        <Drawer.Screen name="About Us" component={AboutUs} options={{ title: 'About Us', drawerLabelStyle: { fontSize: 18 } }} />
        <Drawer.Screen name="Rate Us" component={RateApp} options={{ drawerLabelStyle: { fontSize: 18 } }}/>
        <Drawer.Screen name="Sign Out" component={SignOut} options={{ drawerLabelStyle: {color: 'red', fontSize: 18, fontWeight: 'bold' } }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
