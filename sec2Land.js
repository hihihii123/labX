import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

const Stack = createNativeStackNavigator();

function Sec2Home({ navigation }) {
    return(
        <View>
            <Text>Placeholder</Text>
            <Button
                title='Go to placeholder'
                onPress={() => navigation.navigate('Sec 2 Placeholder')}
                />
        </View>
    );
}
function Sec2HomeB({ navigation }) {
    return(
        <View>
            <Text>Placeholderrrrrrrrr</Text>
        </View>
    );
}
export default function Sec2Homepage({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    title='Sec 2 Home'
                    component={Sec2Home}
                    />
                <Stack.Screen
                    title='Sec 2 placeholder'
                component={Sec2HomeB}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

