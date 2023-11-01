import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { shareAsync } from 'expo-sharing';

const storage = getStorage();

const PhotoDownload = () => {
    const [photos, setPhotos] = useState([]);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email); 
            }
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        if (userEmail) {
            const photosRef = ref(storage, `${userEmail}/Photos`);

            listAll(photosRef)
                .then(async (res) => {
                    const photoUrls = [];
                    for (const itemRef of res.items) {
                        const photoUrl = await getDownloadURL(itemRef);
                        photoUrls.push(photoUrl);
                    }
                    setPhotos(photoUrls);
                })
                .catch((error) => {
                    console.error("Error listing photos:", error);
                });
        }
    }, [userEmail]);

    const save = async (uri, filename, mimetype) => {
        if (Platform.OS === "android") {
            const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
            
            if (permissions.granted) {
                const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
                await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
                    .then(async (uri) => {
                        await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
                    })
                    .catch(e => console.log(e));
            } else {
                shareAsync(uri);
            }
        } else {
            shareAsync(uri);
        }
    };

    const downloadPhoto = async (photoUrl) => {

        try {
            const filenameFull = photoUrl.substring(photoUrl.lastIndexOf("/") + 1);
            const startIndex = filenameFull.indexOf("Photos%2F") + 9; 
            const endIndex = filenameFull.indexOf("?alt");

            const filename = filenameFull.substring(startIndex, endIndex);

            const directory = `${FileSystem.documentDirectory}Firebase Downloads/`;
            const directoryInfo = await FileSystem.getInfoAsync(directory);

            if (!directoryInfo.exists) {
                await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
            }

            const { status } = await MediaLibrary.requestPermissionsAsync()

            if (status === "granted") {
                const result = await FileSystem.downloadAsync(
                    photoUrl,
                    `${directory}${filename}`,
                    {
                        headers: {
                            "MyHeader": "MyValue"
                        }
                    }
                );

                if (result.status === 200) {
                    save(result.uri, filename, result.headers["content-type"]);
                    Alert.alert("Image has been stored in mobile.")
                } else {
                    console.error("Error downloading photo: Status code", result.status);
                    Alert.alert("An error occurred when downloading image.")
                }
            } else {
                Alert.alert("Permission not granted to save into mobile!")
                console.error("Permission denied to save to CAMERA_ROLL");
            }

        } catch (error) {
            Alert.alert("An error occurred when downloading image.")
            console.error("Error downloading photo", error);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    {photos.map((photoUrl, index) => (
                        <View key={index} style={styles.photoFrame}>
                            <Image source={{ uri: photoUrl }} style={styles.photoImage} />
                            <TouchableOpacity style={styles.downloadButton} onPress={() => downloadPhoto(photoUrl)}>
                                <Text style={styles.downloadText}>Download</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default PhotoDownload;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoFrame: {
        marginBottom: 10,
        borderStyle: "solid",
        borderColor: "#00EDA5",
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden",
    },
    photoImage: {
        width: 250,
        height: 250,
    },
    downloadButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00EDA5',
        padding: 10,
    },
    downloadText: {
        fontSize: 20,
        color: 'black',
    },
});
