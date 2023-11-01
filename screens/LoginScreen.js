import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Alert } from 'react-native'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        if (user.emailVerified) {
          console.log('Logged in with:', user.email);
          navigation.navigate("Home");
        } else {
          Alert.alert("Email not verified",
          "Please check your email for a verification link.",
          [
            {
              text: "Resend Verification",
              onPress: () => {
                sendEmailVerification(userCredentials.user);
                Alert.alert("Email Verification", "An email verification has been sent to you.")
              }
            },
            {
              text: "Cancel",
              style: "cancel"
            }
          ]
        );
      }
    })
      .catch(error => alert("Wrong Email or Password Entered!"))
  }

  return (
    <SafeAreaView
      style={styles.container}
      behavior={Platform.OS === "ios" ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Login</Text>
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
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Forget")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Forget Password?</Text>
        </TouchableOpacity>

        <View style={styles.regView}>
          <Text style={styles.regText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.regLink}>Register now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
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
    backgroundColor: 'silver',
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
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  regView: {
    marginTop: 12,
    flexDirection: 'row',
  },
  regText: {
    color: 'black',
    fontSize: 16,
  },
  regLink: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: "underline",
  },
})