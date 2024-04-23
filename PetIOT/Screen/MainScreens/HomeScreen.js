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
          <Text style = {styles.tipsText}>Food remain</Text>
          <FoodRemainBackgroundCard />
          <Text style = {styles.tipsText}>Tips</Text>
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
      marginBottom: 10,
  },
  logoContainer: {
      marginRight: 10,
      marginLeft: 10,
  },
  header: {
      flex: 1,
      marginBottom: 10,
  },
  headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
  },
  imageScrollView: {
      marginVertical: 10,
      marginBottom: 20,
  },
  image: {
      width: 264,
      height: 205,
      borderRadius: 10,
      marginRight: 10,
  },
  tipsText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '700', 
    lineHeight: 20,
    letterSpacing: 0.10,
    marginLeft: 10,
},
});
