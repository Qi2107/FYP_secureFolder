import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, ImageBackground, Alert } from 'react-native'
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('')
  const navigation = useNavigation()

  const ForgetPassword = () => {

    if (!email) {
      Alert.alert("Email Cannot Be Empty", "Please enter your email.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Reset Email", "Reset email has been sent if you have a registered account with that email.");
        navigation.navigate("Login");
      })
      .catch(error => {
        if (error.code === "auth/invalid-email") {
          Alert.alert("Invalid Email", "Please enter a valid email.")
        } else {
          console.error("Reset Password Error:", error);
          Alert.alert("Error", "An error occurred while trying to reset your password. Please try again later.");
        }
      });
  };

  return (
    <ImageBackground source={require('../assets/forgetpassword.jpg')} style={styles.imageBackground}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? 'padding' : 'height'}
      >
        <Text style={styles.title}>Forget Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={ForgetPassword}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Send password reset email</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default ForgetPasswordScreen

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 5,
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})