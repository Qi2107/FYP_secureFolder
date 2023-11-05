import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { auth } from '../firebase';
import { useNavigation, CommonActions } from '@react-navigation/native';

const SignOut = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Welcome' }],
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  const SignOutAlert = () =>
    Alert.alert('Confirm Sign Out', 'Are you sure you wish to sign out of this account?', [
      {
        text: 'Sign Out',
        onPress: handleSignOut,
      },
      {
        text: 'Cancel',
        onPress: () => navigation.navigate('Home'),
      },
    ]);

  return (
    <ImageBackground source={require('../assets/signout.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.emailText}>{auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={SignOutAlert} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignOut;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 1,
  },
  emailText: {
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'red',
    width: '60%',
    padding: 15,
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#960000',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});