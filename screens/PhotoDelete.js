import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";

const storage = getStorage();

const PhotoDelete = () => {
    const [photos, setPhotos] = useState([]);
    const [userEmail, setUserEmail] = useState(null);
    const [deletePhotoRef, setDeletePhotoRef] = useState(null);

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
                        photoUrls.push({
                            url: photoUrl,
                            ref: itemRef,
                        });
                    }
                    setPhotos(photoUrls);
                })
                .catch((error) => {
                    console.error("Error listing photos:", error);
                });
        }
    }, [userEmail]);

    const confirmDeletePhoto = (photoRef) => {
        setDeletePhotoRef(photoRef);

        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete this photo?",
            [
                {
                    text: "Delete",
                    onPress: () => deletePhoto(photoRef),
                },
                {
                    text: "Cancel",
                    onPress: () => setDeletePhotoRef(null),
                    style: "cancel",
                },
            ]
        );
    };

    const deletePhoto = async (photoRef, index) => {
        try {
            await deleteObject(photoRef);

            const updatedPhotos = [...photos];
            updatedPhotos.splice(index, 1);
            setPhotos(updatedPhotos);
            Alert.alert("Image deleted", "Image has been deleted!");
        } catch (error) {
            console.error("Error deleting photo:", error);
            Alert.alert("An error occurred when deleting image.");
        }
    };

    return (
        <ImageBackground source={require('../assets/photodelete.jpg')} style={styles.imageBackground}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        {photos.map((photo, index) => (
                            <View key={index} style={styles.photoFrame}>
                                <Image source={{ uri: photo.url }} style={styles.photoImage} />
                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => confirmDeletePhoto(photo.ref)}>
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

export default PhotoDelete;

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
        marginTop: 120,
    },
    photoFrame: {
        marginBottom: 10,
        borderStyle: "solid",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden",
    },
    photoImage: {
        width: 250,
        height: 250,
    },
    deleteButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: 10,
    },
    deleteText: {
        fontSize: 20,
        color: 'black',
    },
});
