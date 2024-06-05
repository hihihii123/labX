import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LabBookPage from './bookLab';
import Sec1Homepage from './sec1Land';
import { Entypo } from '@expo/vector-icons';
import Sec2Homepage from './sec2Land';
import ForumPage from './forum';
import Login from './Login';
import { UserContext } from './usercontextslave';
import React from 'react';
import ISS from './ISS';
import Consult from './Consult';


const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.MainPage}>
      <Text style={{fontSize: 50, color: '#FFF'}}>Welcome to LabX!</Text>
      <Button 
        title='Book an appointment or lab'
        onPress={() => navigation.navigate('Book an appointment')}
        />
    </View>
  );

  
}

export default function Home() {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer style={{backgroundColor: '#393E43', flex: 1}}>
        <Tab.Navigator initialRouteName='Home' tabBarBadge = {{focused: true, color: 'Red', size: 11}} screenOptions={{tabBarStyle: {backgroundColor: '#818a94'}, tabBarInactiveTintColor: '#000', tabBarActiveTintColor: '#EEE', headerStyle: {backgroundColor: '#393E43'}, headerTintColor: '#FFF'}}>
          <Tab.Screen
            name='Consultation'
            component={Consult}
            
            options={{
              tabBarLabel: "Consultation",
              tabBarIcon: () => (<Entypo name="home" size={24} color="white" />),
              
              
            }}
            />
          <Tab.Screen
            name='Forum'
            component={ForumPage}
            options={{ tabBarLabel: 'Forum' }}

            />
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{ tabBarLabel: 'Home' }}
            />
          <Tab.Screen 
            name='ISS'
            component={ISS}
            options={{ tabBarLabel: 'ISS' }}
            />
          <Tab.Screen
            name='Settings'
            component={Login}
            options={{ tabBarLabel: 'Login' }}
            />
   
        </Tab.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
export const styles = StyleSheet.create({
  MainPage: {
    flex: 1,
    backgroundColor: '#393E43',
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#FFF',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 50,
    color: '#FFF',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  }
});