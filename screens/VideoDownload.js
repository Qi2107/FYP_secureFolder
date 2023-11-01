import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { shareAsync } from 'expo-sharing';
import { Video } from "expo-av"; // Import Video from expo-av

const storage = getStorage();

const VideoDownload = () => {
    const [videos, setVideos] = useState([]);
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
            const videosRef = ref(storage, `${userEmail}/Videos`);

            listAll(videosRef)
                .then(async (res) => {
                    const videoData = [];
                    for (const itemRef of res.items) {
                        const videoUrl = await getDownloadURL(itemRef);
                        videoData.push({ url: videoUrl });
                    }
                    setVideos(videoData);
                })
                .catch((error) => {
                    console.error("Error listing videos:", error);
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

    const downloadVideo = async (videoUrl) => {

        try {
            const filenameFull = videoUrl.substring(videoUrl.lastIndexOf("/") + 1);
            const startIndex = filenameFull.indexOf("Videos%2F") + 8;
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
                    videoUrl,
                    `${directory}${filename}`,
                    {
                        headers: {
                            "MyHeader": "MyValue"
                        }
                    }
                );

                if (result.status === 200) {
                    save(result.uri, filename, result.headers["content-type"]);
                    Alert.alert("Video has been stored in mobile.")
                } else {
                    console.error("Error downloading video: Status code", result.status);
                    Alert.alert("An error occurred when downloading video.")
                }
            } else {
                Alert.alert("Permission not granted to save into mobile!")
                console.error("Permission denied to save to CAMERA_ROLL");
            }

        } catch (error) {
            Alert.alert("An error occurred when downloading video.")
            console.error("Error downloading video", error);
        }
    };

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View>
                    {videos.map((videoData, index) => (
                        <View key={index} style={styles.videoFrame}>
                            <Video
                                source={{ uri: videoData.url }}
                                shouldPlay={false}
                                isMuted={true}
                                resizeMode="cover"
                                style={styles.videoThumbnail}
                            />
                            <TouchableOpacity style={styles.downloadButton} onPress={() => downloadVideo(videoData.url)}>
                                <Text style={styles.downloadText}>Download</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default VideoDownload;

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    videoFrame: {
        marginBottom: 10,
        borderStyle: "solid",
        borderColor: "#00EDA5",
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden",
    },
    videoThumbnail: {
        width: 280,
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
