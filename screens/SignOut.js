import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const SignOutScreen =() => {
    const navigation = useNavigation();

    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.navigate('Login');
        })
        .catch((error) => alert(error.message));
    };
  
    return (
      <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
};

export default SignOutScreen;

const styles = StyleSheet.create({
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
    button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  });