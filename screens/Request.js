import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { firestore } from '../firebase';
import { auth } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const Request = () => {
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [action, setAction] = useState('Disable');

    const handleRequest = async () => {
        try {
            const currentUserEmail = auth.currentUser?.email; // Get current user's email
            if (!currentUserEmail || currentUserEmail.toLowerCase() !== email.toLowerCase()) {
                Alert.alert("Invalid Email", "The provided email does not match the current user's email, you can only request to disable/delete your own account!");
                return;
            }

            const feedbackData = {
                email: currentUserEmail,
                reason,
                action,
                timestamp: new Date().toISOString(),
            };

            const docRef = await addDoc(collection(firestore, 'requests'), feedbackData);

            console.log('Request added to Firestore.', docRef.id);
            Alert.alert("Request submitted", "Request has been submitted!")
        } catch (error) {
            console.error('Error adding request:', error);
        }
    };

    return (
        <ImageBackground source={require('../assets/request.jpg')} style={styles.backgroundImage}>

            <View style={styles.container}>

                <Text style={styles.title}>Request to Disable/Delete Account</Text>

                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        title="Disable"
                        size={32}
                        textStyle={{ fontSize: 20 }}
                        checked={action === 'Disable'}
                        onPress={() => setAction('Disable')}
                    />
                    <CheckBox
                        title="Delete"
                        size={32}
                        textStyle={{ fontSize: 20 }}
                        checked={action === 'Delete'}
                        onPress={() => setAction('Delete')}
                    />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    style={styles.textArea}
                    placeholder="Reason"
                    value={reason}
                    onChangeText={(text) => setReason(text)}
                    multiline={true}
                    textAlignVertical="top"
                />

                <TouchableOpacity style={styles.submitButton} onPress={handleRequest}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        textDecorationLine: 'underline',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        margin: 10,
    },
    checkbox: {
        width: '30%',
    },
    input: {
        width: '80%',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F9F9F9'
    },
    textArea: {
        width: '80%',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#F9F9F9'
    },
    submitButton: {
        backgroundColor: '#0782F9',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0660B8',
        width: '80%',
        padding: 15,
        marginBottom: 50,
    },
    submitText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});

export default Request;
