import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/welcome.jpg")}
                style={styles.image}
            />

            <Button
                title="Sign Up"
                onPress={() => navigation.navigate("SignUp")}
                style={styles.button}
            />

            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Already have an account ?</Text>
                <Pressable
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.signInLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white, // Set background color to white
    },
    image: {
        height: 500,
        width: 500,
    },
    button: {
        marginTop: 22,
        width: "45%",
    },
    signInContainer: {
        flexDirection: "row",
        marginTop: 12,
        justifyContent: "center",
    },
    signInText: {
        fontSize: 16,
        color: COLORS.black,
    },
    signInLink: {
        fontSize: 16,
        color: COLORS.blue,
        fontWeight: "bold",
        marginLeft: 4,
    },
});

export default Welcome;
