import React from 'react'
import {StyleSheet, Text, View, Image, Button} from 'react-native'

export default function playerItem({player}){
return(
    <View style = {styles.container}>
      <Text style = {styles.text}>{player.name}</Text>
      <Image style = {styles.image} source = {{uri: player.imageURL}}/>
    </View>
);
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    image:{
        width: 75,
        height: 75
    },
    text: {
        paddingRight: 10
    }
})