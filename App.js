import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native';

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

const CustomDrawerContent = (props) => {
  return (

    <ImageBackground source={require('./assets/drawer.jpg')} style={styles.drawerBackground}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image source={require('./assets/secretIcon.png')} style={styles.secretIcon}/>
          <Text style={styles.drawerHeaderText}>Secret</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </ImageBackground>

  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 24,
          },
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <Ionicons
                name="menu"
                size={40}
                color="white"
                style={{ marginLeft: 16 }}
                onPress={() => navigation.openDrawer()}
              />
            );
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Welcome" component={Welcome} options={{ headerShown: false, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="SignUp" component={SignUp} options={{ headerShown: false, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Forget" component={ForgetPasswordScreen} options={{ headerShown: false, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerTransparent: true, drawerLabelStyle: { fontSize: 20, fontWeight: 'bold', color: 'black', textShadowColor: 'white', textShadowOffset: { width: -1, height: 0 }, textShadowRadius: 5, } }} />
        <Drawer.Screen name="PhotoScreen" component={PhotoScreen} options={{ title: 'Photos', headerTransparent: true, drawerLabelStyle: { fontSize: 20, fontWeight: 'bold', color: 'black', textShadowColor: 'white', textShadowOffset: { width: -1, height: 0 }, textShadowRadius: 5, } }} />
        <Drawer.Screen name="VideoScreen" component={VideoScreen} options={{ title: 'Videos', headerTransparent: true, drawerLabelStyle: { fontSize: 20, fontWeight: 'bold', color: 'black', textShadowColor: 'white', textShadowOffset: { width: -1, height: 0 }, textShadowRadius: 5, } }} />
        <Drawer.Screen name="PhotoUpload" component={PhotoUpload} options={{ title: 'Upload Photos', headerTransparent: true, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="VideoUpload" component={VideoUpload} options={{ title: 'Upload Videos', headerTransparent: true, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="PhotoDownload" component={PhotoDownload} options={{ title: 'Download Photos', headerTransparent: true, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="VideoDownload" component={VideoDownload} options={{ title: 'Download Videos', headerTransparent: true, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="PhotoDelete" component={PhotoDelete} options={{ title: 'Delete Photos', headerTransparent: true, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="VideoDelete" component={VideoDelete} options={{ title: 'Delete Videos', headerTransparent: true, drawerLabel: () => null, drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Change Password" component={ChangePassword} options={{ title: 'Change Password', headerTransparent: true, drawerLabelStyle: { fontSize: 20, fontWeight: 'bold', color: 'black', textShadowColor: 'white', textShadowOffset: { width: -1, height: 0 }, textShadowRadius: 5, } }} />
        <Drawer.Screen name="Request" component={Request} options={{ title: 'Request Disable/Delete', headerTransparent: true, drawerLabelStyle: { fontSize: 20, fontWeight: 'bold', color: 'black', textShadowColor: 'white', textShadowOffset: { width: -1, height: 0 }, textShadowRadius: 5, } }} />
        <Drawer.Screen name="About Us" component={AboutUs} options={{ title: 'About Us', headerTransparent: true, drawerLabelStyle: { fontSize: 20, fontWeight: 'bold', color: 'black', textShadowColor: 'white', textShadowOffset: { width: -1, height: 0 }, textShadowRadius: 5, } }} />
        <Drawer.Screen name="Rate Us" component={RateApp} options={{ title: 'Rate Us', headerTransparent: true, drawerLabelStyle: { fontSize: 20, fontWeight: 'bold', color: 'black', textShadowColor: 'white', textShadowOffset: { width: -1, height: 0 }, textShadowRadius: 5, } }} />
        <Drawer.Screen name="Sign Out" component={SignOut} options={{ title: 'Sign Out', headerTransparent: true, drawerLabelStyle: { color: 'red', fontSize: 20, fontWeight: 'bold', textShadowColor: 'white', textShadowOffset: { width: -1, height: 0 }, textShadowRadius: 5, } }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerBackground: {
    flex: 1,
    width: 280,
    height: 790,
  },
  drawerHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    flexDirection: 'row',
    marginTop: 22,
    marginBottom: 5,
  },
  secretIcon: {
    width: 50,
    height: 50,
    marginTop: 9,
    marginLeft: 2,
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 8,
  },
});