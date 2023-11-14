import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Alert, ImageBackground } from 'react-native'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const SignUpScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const handleSignUp = () => {
    if (!email) {
      Alert.alert("Email Cannot Be Empty", "Please enter your email.");
      return;
    }

    if (!password) {
      Alert.alert("Password Cannot Be Empty", "Please enter a password.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);

        sendEmailVerification(userCredentials.user);
        navigation.navigate("Login");
        Alert.alert("Email Verification", "An email verification has been sent to you.")
      })
      .catch(error => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Email Already Registered", "This email has been registered with us. Please proceed to log in with this account, or look for the verification email to verify the account.");
        } else if (error.code === "auth/weak-password") {
          Alert.alert("Weak Password", "The password should be at least 6 characters long.");
        } else {
          // Handle other error cases
          console.error("Registration Error:", error);
          Alert.alert("Registration Error", "An error occurred during registration. Please try again later.");
        }
      });
  };

  return (
    <ImageBackground source={require('../assets/signup.jpg')} style={styles.imageBackground}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? 'padding' : 'height'}
      >
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.signInLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default SignUpScreen

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
    marginBottom: 20,
    color: 'white',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: 'grey',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: '#0782F9',
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0660B8',
  },
  buttonOutlineText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  signInContainer: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  signInText: {
    fontSize: 16,
    color: "white",
    textShadowColor: 'black',
    textShadowOffset: { width: -2, height: 0 },
    textShadowRadius: 5,
  },
  signInLink: {
    fontSize: 16,
    color: "cyan",
    fontWeight: "bold",
    marginLeft: 4,
    textDecorationLine: "underline",
    textShadowColor: 'grey',
    textShadowOffset: { width: -2, height: 0 },
    textShadowRadius: 5,
  },
})