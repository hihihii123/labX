import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', }}>
      <Text style={{fontSize: 50,}}>Welcome to LabX!</Text>
      <Button 
        title='Book an appointment or lab'
        onPress={() => navigation.push('Book an appointment')}
        />
    </View>
  );
}
function LabBookPage({ navigation }) {
  return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center', }}>
          <Text>Placeholder</Text>
      </View>
  );
}

export default function Home() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Home'
          component={HomeScreen}
          options={{headerShown: false}}
          />
        <Drawer.Screen
          name='Book an appointment'
          component={LabBookPage}
          options={{headerShown: false}}
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
