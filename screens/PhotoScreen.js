import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PhotoScreen = () => {
  const navigation = useNavigation();

  const navigateToUpload = () => {
    navigation.navigate("PhotoUpload");
  };

  const navigateToDownload = () => {
    navigation.navigate("PhotoDownload");
  };

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity style={styles.item} onPress={navigateToUpload}>
          <Text style={styles.itemText}>Upload Photos</Text>
          <Image source={require('../assets/upload.png')} style={styles.icons} />
        </TouchableOpacity>
      </View>

      <View style={styles.row2}>
        <TouchableOpacity style={styles.item} onPress={navigateToDownload}>
          <Text style={styles.itemText}>Download Photos</Text>
          <Image source={require('../assets/download.png')} style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  item: {
    alignItems: 'center',
  },
  itemText: {
    marginTop: 20,
    fontSize: 25,
    marginBottom: 15,
  },
  icons: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default PhotoScreen;
