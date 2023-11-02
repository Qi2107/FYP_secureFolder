import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";

const storage = getStorage();

const PhotoDelete = () => {
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
        <ScrollView>
            <View style={styles.container}>
                <View>
                    {photos.map((photo, index) => (
                        <View key={index} style={styles.photoFrame}>
                            <Image source={{ uri: photo.url }} style={styles.photoImage} />
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => deletePhoto(photo.ref, index)}>
                                <Text style={styles.deleteText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default PhotoDelete;

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
