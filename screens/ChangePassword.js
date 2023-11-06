import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ChangePassword = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation()

    const handleResetPassword = () => {
        if (email.length === 0) {
            Alert.alert('Email Cannot Be Empty', 'Please enter your email address.');
            return;
        }

        const currentEmail = auth.currentUser.email;

        if (email != currentEmail) {
            Alert.alert('Wrong Email', 'Please enter your email address correctly');
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    Alert.alert('Change Password Email Sent', 'Check your email to change your password.');
                })
                .then(() => {
                    navigation.navigate("Home");
                })
                .catch((error) => {
                    Alert.alert('Error', error.message);
                });

            setEmail('');
        }
    };

    return (
        <ImageBackground source={require('../assets/changepassword.jpg')} style={styles.imageBackground}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                    <Text style={styles.buttonText}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

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
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'grey',
        fontSize: 18,
    },
    button: {
        backgroundColor: 'red',
        width: '80%',
        padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#960000',
        alignItems: 'center',
        marginTop: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default ChangePassword;
