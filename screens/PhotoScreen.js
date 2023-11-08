import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PhotoScreen = () => {
  const navigation = useNavigation();

  const navigateToUpload = () => {
    navigation.navigate("PhotoUpload");
  };

  const navigateToDownload = () => {
    navigation.navigate("PhotoDownload");
  };

  const navigateToDelete = () => {
    navigation.navigate("PhotoDelete");
  };

  return (
    <ImageBackground source={require('../assets/photography.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.row1} onPress={navigateToUpload}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Upload Photos</Text>
            <Image source={require('../assets/upload.png')} style={styles.icons} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row2} onPress={navigateToDownload}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Download Photos</Text>
            <Image source={require('../assets/download.png')} style={styles.icons} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row3} onPress={navigateToDelete}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Delete Photos</Text>
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
    borderColor: 'white',
    padding: 10,
    width: '80%',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white',
    padding: 10,
    width: '80%',
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white',
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
    borderColor: 'white',
    color: 'white',
    textShadowColor: 'maroon',
    textShadowOffset: { width: -2, height: 0 },
    textShadowRadius: 5,
  },
  icons: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default PhotoScreen;
