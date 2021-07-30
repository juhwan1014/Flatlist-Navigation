import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PlayerDetailScreen from './src/screens/PlayerDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Players" component={HomeScreen} />
        <Stack.Screen name="PlayerDetails" component={PlayerDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

