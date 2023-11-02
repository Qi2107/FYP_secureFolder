import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
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
          <Image source={require('../assets/bin.png')} style={styles.iconBin} />
        </View>
      </TouchableOpacity>
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
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
    width: '90%',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
    width: '90%',
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
    width: '90%',
  },
  item: {
    alignItems: 'center',
  },
  itemText: {
    marginTop: 10,
    fontSize: 25,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  icons: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  iconBin: {
    width: 80,
    height: 80,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default VideoScreen;
