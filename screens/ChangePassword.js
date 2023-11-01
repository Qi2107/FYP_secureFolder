import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ChangePassword = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation()

    const handleResetPassword = () => {
        if (email.length === 0) {
            Alert.alert('Error', 'Please enter your email address.');
            return;
        }

        const currentEmail = auth.currentUser.email;

        if (email != currentEmail) {
            Alert.alert('Wrong Email', 'Please enter your email address correctly');
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    Alert.alert('Password Reset Email Sent', 'Check your email to reset your password.');
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
        <View style={styles.container}>
            <Text style={styles.title}>Change Password</Text>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
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