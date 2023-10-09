import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((error) => alert(error.message));
  };

  const openDrawer = () => {
    console.log('Opening Drawer'); // Add this line for debugging
    navigation.openDrawer();
  };

  const navigateToPhotoScreen = () => {
    navigation.navigate('PhotoSite'); // Navigate to the "PhotoSite" screen
  };

  const navigateToVideoScreen = () => {
    navigation.navigate('VideoSite'); // Navigate to the "VideoSite" screen
  };

  const navigateToFileScreen = () => {
    navigation.navigate('FileSite'); // Navigate to the "FileSite" screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.sidebarButton}>
        <Text style={{ fontSize: 30 }}>☰</Text>
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Upload Your Items</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToPhotoScreen}
          >
            <Text style={styles.buttonText}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToVideoScreen}
          >
            <Text style={styles.buttonText}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToFileScreen}
          >
            <Text style={styles.buttonText}>Files</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 55,
    fontWeight: 'bold',
  },
  sidebarButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 1,
    marginTop: 30,
  },
  button: {
    width: 350,
    height: 120,
    backgroundColor: '#009FD2', // Customize the button background color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 50, // Adjust the fontSize as needed
    color: 'white', // Customize the text color
    fontStyle: 'italic',
  },
});
