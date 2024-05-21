import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LabBookPage from './bookLab';
import React, { useState } from 'react';
import Sec1Homepage from './sec1Land';
import { Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
import Sec2Homepage from './sec2Land';
import ForumPage from './forum';

function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', }}>
      <Text style={{fontSize: 50,}}>Welcome to LabX!</Text>
      <Button 
        title='Book an appointment or lab'
        onPress={() => navigation.navigate('Book an appointment')}
        />
    </View>
  );
}


export default function Home({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' tabBarBadge = {{focused: true, color: 'Red', size: 11}}>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: "Launchpad",
            tabBarIcon: () => (<Entypo name="home" size={24} color="black" />),
          }}
          />
        <Tab.Screen
          name='Book an appointment'
          component={LabBookPage}
    
          />
        <Tab.Screen
          name='Sec 1 Science'
          component={Sec1Homepage}
    
          />
        <Tab.Screen 
          name='Sec 2 Science'
          component={Sec2Homepage}
          />
        <Tab.Screen
          name='Forum'
          component={ForumPage}
          />
      </Tab.Navigator>
    </NavigationContainer>
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
