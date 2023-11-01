import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

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
                        UOW ID       Name    
                    </Text>
                    {members.map((member, index) => (
                        <View style={styles.memberRow} key={index}>
                            <Text style={styles.uowId}>{member.id + '\t\t-\t\t' + member.name}</Text>
                        </View>
                    ))}
                </View>

                

                <Text style={styles.paragraph}>
                    A group of university students trying their best to work together for this Final Year Project on creating a Secure app.
                </Text>

                <View style={styles.contact}>
                    <Text style={styles.contactText}>
                        Contact Us via Email
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    aboutContainer: {
        flex: 1,
        alignItems: 'center',
    },
    memberInfo: {
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 30,
        padding: 10,
        backgroundColor: "silver",
    },
    doneBy: {
        fontSize: 18,
    },
    memberHeader: {
        fontSize: 21,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    uowId: {
        fontSize: 21,
        color: 'black',
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
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactText: {
        textAlign: 'center',
        fontSize: 18,
    },
    contactEmail: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraph: {
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    web: {
        marginTop: 20,
    },
    webText: {
        fontSize: 17,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: 'blue',
    },
    smText: {
        textAlign: 'center',
        marginBottom: 10,
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
        marginBottom: 15, 
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
