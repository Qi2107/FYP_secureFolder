import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ImageBackground } from 'react-native';

const AboutUs = () => {

    const members = [
        { name: 'Tan Ngan Teng Jasper', id: '7224552' },
        { name: 'Jasper Cheah Zhi Wei', id: '7343716' },
        { name: 'Ng Hanqing, Lamont', id: '7559811' },
        { name: 'Aung Khant Kyaw', id: '7084729' },
        { name: 'Chua Yong Qi', id: '7673619' },
    ];

    const handleWebPress = () => {
        const webURL = 'https://fyp3s309.wixsite.com/secretsecureapp/';
        Linking.openURL(webURL);
    };

    const handleInstagramPress = () => {
        const instagramURL = 'https://www.instagram.com/23s309fyp/';
        Linking.openURL(instagramURL);
    };

    const handleTwitterPress = () => {
        const twitterURL = 'https://twitter.com/fyp23s309/';
        Linking.openURL(twitterURL);
    };

    return (
        <ImageBackground source={require('../assets/aboutus.jpg')} style={styles.imageBackground}>
            <View style={styles.container}>
                <View style={styles.aboutContainer}>
                    <Text style={styles.groupName}>
                        FYP-23-S3-09
                    </Text>

                    <View style={styles.memberInfo}>
                        <Text style={styles.doneBy}>
                            App done by:
                        </Text>
                        <Text style={styles.memberHeader}>
                            UOW ID                      Name
                        </Text>
                        {members.map((member, index) => (
                            <View style={styles.memberRow} key={index}>
                                <Text style={styles.uowId}>{member.id + '\t\t-\t\t' + member.name}</Text>
                            </View>
                        ))}
                    </View>



                    <Text style={styles.paragraph}>
                        A group of university students trying their best to work together to create a Secret secure folder app to allow users to store their photos and videos.
                    </Text>

                    <View style={styles.contact}>
                        <Text style={styles.contactText}>
                            Contact Us via Email or Visit Our Website
                        </Text>
                        <Text style={styles.contactEmail}>
                            Email: fyp3s309@gmail.com
                        </Text>
                    </View>
                    <View style={styles.web}>
                        <TouchableOpacity
                            onPress={handleWebPress}
                        >
                            <Text style={styles.webText}>
                                fyp3s309.wixsite.com/secretsecureapp
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomContainer}>
                        <Text style={styles.smText}>
                            Follow our social media for more information!
                        </Text>
                        <View style={styles.smButtonRow}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleInstagramPress}
                            >
                                <Image source={require('../assets/igImage.png')} style={styles.buttonImage} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleTwitterPress}
                            >
                                <Image source={require('../assets/xImage.png')} style={styles.buttonImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
        marginTop: 110,
    },
    aboutContainer: {
        flex: 1,
        alignItems: 'center',
    },
    memberInfo: {
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 30,
        padding: 10,
    },
    doneBy: {
        fontSize: 18,
        color: 'white',
        textShadowColor: 'white',
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 5,
    },
    memberHeader: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 5,
    },
    uowId: {
        fontSize: 21,
        color: 'white',
        textShadowColor: 'grey',
        textShadowOffset: { width: -2, height: 0 },
        textShadowRadius: 5,
    },
    groupName: {
        marginBottom: 10,
        fontSize: 50,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2.5, height: -2 },
        textShadowRadius: 5,
        width: '100%',
    },
    contact: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
    },
    contactEmail: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    paragraph: {
        fontSize: 24,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: 'white',
        padding: 10,
    },
    web: {
        fontSize: 18,
    },
    webText: {
        fontSize: 17,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: 'cyan',
    },
    smText: {
        textAlign: 'center',
        marginBottom: 10,
        color: 'white',
    },
    smButtonRow: {
        flexDirection: 'row',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 10,
    },
    button: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    buttonImage: {
        width: 50,
        height: 50,
        borderRadius: 15,
    },
});

export default AboutUs;
