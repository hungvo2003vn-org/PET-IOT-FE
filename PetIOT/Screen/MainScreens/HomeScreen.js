import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import TipsBackgroundCard from '../Components/Home/TipsBackgroundCard';
import FoodRemainBackgroundCard from '../Components/Home/FoodRemainBackgroundCard';
import Logo from '../../assets/Home/logo.svg';

const imagePaths = [
  require('../../assets/Home/Image.jpg'),
  require('../../assets/Home/Image.jpg'),
  require('../../assets/Home/Image.jpg'),
  require('../../assets/Home/Image.jpg'),
  require('../../assets/Home/Image.jpg'),
  require('../../assets/Home/Image.jpg'),
];

export default function HomeScreen() {
  return (
      <ScrollView contentContainerStyle={styles.container}>
          {/* Logo and Header */}
          <View style={styles.logoHeaderContainer}>
              <View style={styles.logoContainer}>
                  <Logo width={50} height={50} />
              </View>
              <View style={styles.header}>
                  <Text style={styles.headerText}>Good morning user</Text>
              </View>
          </View>

          {/* Horizontal ScrollView for Images */}
          <ScrollView horizontal style={styles.imageScrollView}>
              {imagePaths.map((image, index) => (
                  <Image key={index} source={image} style={styles.image} />
              ))}
          </ScrollView>

          {/* Other Components */}
          <FoodRemainBackgroundCard />
          <TipsBackgroundCard />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingTop: 20,
  },
  logoHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 10,
  },
  logoContainer: {
      marginRight: 10,
  },
  header: {
      flex: 1,
      marginTop: 20,
      marginBottom: 10,
  },
  headerText: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  imageScrollView: {
      marginVertical: 10,
  },
  image: {
      width: 264,
      height: 205,
      borderRadius: 10,
      marginRight: 10,
  },
});
