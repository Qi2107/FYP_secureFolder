import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { auth, storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { Video } from 'expo-av';

const VideoSite = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
    });
  
    console.log('Result:', result);
  
    if (!result.canceled && result.assets.length > 0) {
      // Use the first selected asset
      const selectedAsset = result.assets[0];
      setSelectedVideo(selectedAsset);
  
      // Access the URI using selectedAsset.uri
      uploadVideo(selectedAsset.uri);
    } else {
      // Handle the case where no video is selected or the selection is canceled
      // You can display a message or take any other appropriate action here
      console.log('No video selected or selection canceled');
    }
  };

  const uploadVideo = async () => {
    setUploading(true);

    const blob = await fetch(selectedVideo.uri).then((response) => response.blob());
    const filename = selectedVideo.uri.substring(selectedVideo.uri.lastIndexOf('/') + 1);
    const currentUser = auth.currentUser?.email;
    const folderName = '' + currentUser + '';
    const subfolderName = 'Videos';
    const storageRef = ref(storage, `${folderName}/${subfolderName}/${filename}`);

    await uploadBytes(storageRef, blob);

    setUploading(false);
    Alert.alert('Video has been uploaded!');
    const uri = !null
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>Click on the icon below to upload a video!</Text>
      <TouchableOpacity onPress={pickVideo} style={{ marginTop: 30 }}>
        <Image source={require('../assets/upload.png')} style={styles.uploadIcon} />
      </TouchableOpacity>
      <View style={styles.mediaContainer}>
        {selectedVideo ? (
          <View>
            <Text styles={styles.selectedVideo}>Selected Video:</Text>
            <Text>{selectedVideo.filename}</Text>
            <Video
              source={{ uri: selectedVideo.uri }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              style={{ width: 350, height: 250 }}
            />
          </View>
        ) : (
          <Text styles={styles.selectedVideo}>No video selected</Text>
        )}
        <TouchableOpacity style={styles.uploadButton} onPress={uploadVideo}>
          <Text style={styles.buttonText}>Upload this video</Text>
        </TouchableOpacity>
      </View>

      {uploading && (
        <View style={styles.uploadingContainer}>
          <Text>Uploading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  uploadIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
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
  mediaContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  uploadingContainer: {
    marginTop: 20,
  },
  selectedVideo: {
    fontSize: 30,
  },
};

export default VideoSite;
