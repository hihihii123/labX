import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './Home';


export default function ISS() {
    return (
        <View style={styles.MainPage}>
            <Text style={{fontSize: 50, color: '#FFF'}}>Welcome ISS Page</Text>
            <Pressable
                style={{backgroundColor: '#FFF', padding: 10, borderRadius: 5, marginTop: 10}}
                onPress={() => alert('Book an appointment')}
                >
                <Text style={{color: '#000'}}>Book an appointment</Text>
            </Pressable>
        </View>
    );
}