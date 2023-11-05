import { View, Image, Text, Pressable, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const Welcome = ({ navigation }) => {

    return (
        <ImageBackground source={require('../assets/welcome.jpg')} style={styles.imageBackground}>
            <View style={styles.container}>

                <Image
                    source={require('../assets/welcomeSecret.png')}
                    style={styles.image}
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate("SignUp")}
                    style={styles.button}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>Already have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.signInLink}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}

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
    image: {
        width: 200,
        height: 200,
    },
    button: {
        marginTop: 10,
        width: "45%",
        backgroundColor: '#CA8A00',
        borderColor: '#001156',
        borderRadius: 10,
        borderWidth: 1,
    },
    signUpText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        padding: 12,
    },
    signInContainer: {
        flexDirection: "row",
        marginTop: 12,
        justifyContent: "center",
    },
    signInText: {
        fontSize: 16,
        color: 'white',
    },
    signInLink: {
        fontSize: 16,
        color: 'cyan',
        fontWeight: "bold",
        marginLeft: 4,
        textDecorationLine: "underline",
    },
});

export default Welcome

