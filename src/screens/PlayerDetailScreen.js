//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, FlatList, SafeAreaView } from 'react-native';
import playerItem from '../components/PlayerItem';


export default function PlayerDetailScreen({route, navigation}) {
  
        const { name, imageURL, features } = route.params

//navigation.setOptions({name: name})
navigation.setOptions({title: name})

  return (
    <SafeAreaView style={styles.container}>
  <Image source={{uri: imageURL}} style={styles.image} />
 <Text style={styles.heading}>  About Player... </Text>
    <FlatList
        data={features}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <Text style={styles.stepItem}>{item}</Text>;
        }}
    />
</SafeAreaView>
  );
      }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  image:{
      height: 300
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 10
},
stepItem: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20
}
});