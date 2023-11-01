import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  const goToChangePassword = () => {
    navigation.navigate('Change Password');
  };

  const goToAboutUs = () => {
    navigation.navigate('About Us');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToAboutUs}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: '90%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    fontFamily: 'sans-serif',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Settings;