import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VideoScreen = () => {
  const navigation = useNavigation();

  const navigateToUpload = () => {
    navigation.navigate("VideoUpload");
  };

  const navigateToDownload = () => {
    navigation.navigate("VideoDownload");
  };

  const navigateToDelete = () => {
    navigation.navigate("VideoDelete");
  };

  return (
    <ImageBackground source={require('../assets/videography.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.row1} onPress={navigateToUpload}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Upload Videos</Text>
            <Image source={require('../assets/upload.png')} style={styles.icons} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row2} onPress={navigateToDownload}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Download Videos</Text>
            <Image source={require('../assets/download.png')} style={styles.icons} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row3} onPress={navigateToDelete}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Delete Videos</Text>
            <Image source={require('../assets/bin.png')} style={styles.icons} />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row1: {
    marginTop: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'maroon',
    padding: 10,
    width: '80%',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'maroon',
    padding: 10,
    width: '80%',
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'maroon',
    padding: 10,
    width: '80%',
  },
  item: {
    alignItems: 'center',
  },
  itemText: {
    marginTop: 10,
    fontSize: 25,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: 'maroon',
    color: 'maroon',
    textShadowColor: 'white',
    textShadowOffset: { width: -2, height: 0 },
    textShadowRadius: 5,
  },
  icons: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default VideoScreen;
