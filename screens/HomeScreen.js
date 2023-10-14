import React from 'react';
import { StyleSheet, View, Text, Button,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToPhotos = () => {
    navigation.navigate("Photo");
  };

  const navigateToVideos = () => {
    navigation.navigate("Video");
  };

  const navigateToFiles = () => {
    navigation.navigate("File");
  };


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.item} onPress={navigateToPhotos}>
          <Icon name="photo" size={50} />
          <Text style={styles.itemText}>Photos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={navigateToVideos}>
          <Icon name="videocam" size={50} />
          <Text style={styles.itemText}>Videos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.item} onPress={navigateToFiles}>
          <Icon name="description" size={50} />
          <Text style={styles.itemText}>Files</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.item} onPress={navigateToUniversalFolder}>
          <Icon name="folder" size={50} />
          <Text style={styles.itemText}>Universal Folder</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  item: {
    alignItems: 'center',
  },
  itemText: {
    marginTop: 10,
  },
});

export default HomeScreen;
