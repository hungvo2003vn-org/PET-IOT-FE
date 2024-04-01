import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import TipsBackgroundCard from '../Components/Home/TipsBackgroundCard';
import FoodRemainBackgroundCard from '../Components/Home/FoodRemainBackgroundCard';

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
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Good morning user</Text>
            </View>

            {/* ScrollView */}
            <ScrollView horizontal>
                {imagePaths.map((image, index) => (
                <Image key={index} source={image} style={styles.image} />))}
            </ScrollView>
            <FoodRemainBackgroundCard/>
            <TipsBackgroundCard/>

        </ScrollView>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 10, 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 264,
    height: 205,
    borderRadius: 10,
    marginRight: 10, 
  },
});
