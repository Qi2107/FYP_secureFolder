import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { auth, storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import * as FileSystem from 'expo-file-system';

const PhotoScreen = () => {

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  // Upload Media Files
  const uploadMedia = async () => {

    if (!image) {
      Alert.alert('No Image Selected', 'Please select an image before clicking the upload button.');
      return;
    }

    setUploading(true);

    try {
      const { uri } = await FileSystem.getInfoAsync(image);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = (e) => {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      });

      const filename = image.substring(image.lastIndexOf('/') + 1);
      const currentUser = auth.currentUser?.email;
      const folderName = '' + currentUser + ''
      const subfolderName = 'Photos';
      const storageRef = ref(storage, `${folderName}/${subfolderName}/${filename}`);

      await uploadBytes(storageRef, blob);

      setUploading(false);
      Alert.alert('Photo uploaded', 'Photo has been uploaded!');
      setImage(null);
    }

    catch (error) {
      console.error(error);
      setUploading(false);
    }
  }

  return (
    <ImageBackground source={require('../assets/photoupload.jpg')} style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.textContainer}>Click on the icon below to upload a photo!</Text>
        <TouchableOpacity onPress={pickImage} style={{ marginTop: 30 }}>
          <Image source={require('../assets/upload.png')} style={styles.uploadIcon} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {image && <Image source={{ uri: image }}
            style={{ width: 300, height: 300 }}
          />}
          <TouchableOpacity style={styles.uploadButton} onPress={uploadMedia}>
            <Text style={styles.buttonText}>Upload this photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default PhotoScreen;

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
    marginTop: 150,
  },
  textContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 300,
    height: 400,
    marginTop: 10,
  },
  uploadIcon: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 150,
    background: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center',
  }
})