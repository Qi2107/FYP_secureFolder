import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';
import { useNavigation, CommonActions } from '@react-navigation/native';

const SignOut =() => {
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
      <View style={styles.container}>
        <Text style={styles.emailText}>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={SignOutAlert} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
};

export default SignOut;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    sidebarButton: {
      position: 'absolute',
      top: 10,
      left: 10,
      padding: 10,
      zIndex: 1,
    },
    emailText: {
      fontSize: 20,
    },
    button: {
      backgroundColor: 'red',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 22,
    },
  });