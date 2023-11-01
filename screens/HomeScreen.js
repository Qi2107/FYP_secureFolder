import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToPhotos = () => {
    navigation.navigate("PhotoScreen");
  };

  const navigateToVideos = () => {
    navigation.navigate("VideoScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.item} onPress={navigateToPhotos}>
          <Icon name="photo" size={150} />
          <Text style={styles.itemText}>Photos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={navigateToVideos}>
          <Icon name="videocam" size={150} />
          <Text style={styles.itemText}>Videos</Text>
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
    fontSize: 25,
  },
});

export default HomeScreen;
