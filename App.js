import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
    <Home />
    </>
  );
}

