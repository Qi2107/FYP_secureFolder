import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { Video } from "expo-av";

const storage = getStorage();

const VideoDelete = () => {
    const [videos, setVideos] = useState([]);
    const [userEmail, setUserEmail] = useState(null);
    const [deleteVideoRef, setDeleteVideoRef] = useState(null);

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
                        videoData.push({ url: videoUrl, ref: itemRef });
                    }
                    setVideos(videoData);
                })
                .catch((error) => {
                    console.error("Error listing videos:", error);
                });
        }
    }, [userEmail]);

    const confirmDeleteVideo = (videoRef) => {
        setDeleteVideoRef(videoRef);

        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete this video?",
            [
                {
                    text: "Delete",
                    onPress: () => deleteVideo(videoRef),
                },
                {
                    text: "Cancel",
                    onPress: () => setDeleteVideoRef(null),
                    style: "cancel",
                },
            ]
        );
    };

    const deleteVideo = async (videoRef) => {
        try {
            await deleteObject(videoRef);
            setVideos((prevVideos) => prevVideos.filter((video) => video.ref !== videoRef));
            Alert.alert("Video Deleted", "Video has been deleted!");
        } catch (error) {
            console.error("Error deleting video:", error);
            Alert.alert("An error occurred when deleting the video.");
        }
        setDeleteVideoRef(null);
    };

    return (
        <ImageBackground source={require('../assets/videodelete.jpg')} style={styles.imageBackground}>
            <ScrollView>
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
                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => confirmDeleteVideo(videoData.ref)}
                                >
                                    <Text style={styles.deleteText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default VideoDelete;

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
        marginTop: 130,
    },
    videoFrame: {
        marginBottom: 10,
        borderStyle: "solid",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden",
    },
    videoThumbnail: {
        width: 280,
        height: 250,
    },
    deleteButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        padding: 10,
    },
    deleteText: {
        fontSize: 20,
        color: "black",
    },
});
