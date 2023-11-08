import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const sceneryImage = require('../assets/scenery.jpg');
  const photosImage = require('../assets/photos.png');
  const videosImage = require('../assets/videos.png');

  const navigateToPhotos = () => {
    navigation.navigate("PhotoScreen");
  };

  const navigateToVideos = () => {
    navigation.navigate("VideoScreen");
  };

  return (
    <ImageBackground source={sceneryImage} style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.item} onPress={navigateToPhotos}>
          <Image source={photosImage} style={styles.icon} />
            <Text style={styles.itemText}>Photos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={navigateToVideos}>
          <Image source={videosImage} style={styles.icon} />
            <Text style={styles.itemText}>Videos</Text>
          </TouchableOpacity>
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  icon: {
    width: 120,
    height: 120,
  },
  item: {
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  itemText: {
    marginTop: 10,
    fontSize: 25,
    color: '#F3F3F3',
  },
});

export default HomeScreen;
