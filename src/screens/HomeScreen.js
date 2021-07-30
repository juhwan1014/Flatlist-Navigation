//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PlayerItem from '../components/PlayerItem';



export default function HomeScreen({navigation}) {
    const players = [
        { name: "HeungMin Son", features: ["","Left Wing Forward", "Number 7"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F111505.jpg&scode=default_face_profile_big_p" },
        { name: "Harry Kane", features: ["","Center Forward", "Number 10"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F108579.jpg&scode=default_face_profile_big_p" },
        { name: "Lucas Moura", features: ["","Right Wing Forward", "Number 27"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F149710.jpg&scode=default_face_profile_big_p" },
        { name: "Tanguy Ndombele", features: ["","Center Attacking Midfielder", "Number 28"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F1012411.jpg&scode=default_face_profile_big_p" },
        { name: "Pierre-Emile Højbjerg", features: ["","Defensive Midfielder", "Number 5"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F149593.jpg&scode=default_face_profile_big_p" },
        { name: "Toby Alderweireld", features: ["","Center Defender", "Number 4"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F44575.jpg&scode=default_face_profile_big_p" },
        { name: "Davinson Sanchez", features: ["","Center Defender", "Number 6"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F566102.jpg&scode=default_face_profile_big_p" },
        { name: "Ben Davies", features: ["","Left Wing Defender", "Number 33"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F94758.jpg&scode=default_face_profile_big_p" },
        { name: "Serge Aurier", features: ["","Right Wing Defender", "Number 24"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F105697.jpg&scode=default_face_profile_big_p" },
        { name: "Hugo Lloris", features: ["","GoalKeeper", "Number 1"], imageURL: "https://img1.daumcdn.net/thumb/S200x200/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F9048.jpg&scode=default_face_profile_big_p" }
    
     ]

navigation.setOptions({title: 'Tottenham Hotspurs Football Players'})

const showDetail = (player) => {
    navigation.navigate('PlayerDetails', player);
   
  }


  return (
    <SafeAreaView style={styles.container}>
    <FlatList
        keyExtractor={player => player.name}
        data={players}
        renderItem={({ item }) => {
          return (
              <TouchableOpacity onPress= {()=> {showDetail(item) }}>
          <PlayerItem player={item} />
          </TouchableOpacity>
          );
        }}
    />
</SafeAreaView>
  );
      }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});