import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LabBookPage from './bookLab';


const Drawer = createDrawerNavigator();

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


export default function Home() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen
          name='Home'
          component={HomeScreen}
         
          />
        <Drawer.Screen
          name='Book an appointment'
          component={LabBookPage}
    
          />
      </Drawer.Navigator>
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
