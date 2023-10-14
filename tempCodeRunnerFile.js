import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Welcome from './screens/Welcome';
import SignUp from './screens/SignUp';
import Setting from './screens/Settings';
import RateApp from './screens/RateApp';
import SignOut from './screens/SignOut';
import Photo from './screens/PhotoScreen';
import Video from './screens/VideoScreen';
import File from './screens/FileScreen';

