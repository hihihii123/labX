import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ForumHomePage() {
    return(
        <Stack.Navigator initialRouteName='ForumHome' screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='ForumHome'
                component={ForumPull}
                />
        </Stack.Navigator>
    );
}

function ForumPull() {
    const [data, setData] = useState(null);
    const getMoviesFromApiAsync = async () => {
        try {
          const response = await fetch('https://firebasestorage.googleapis.com/v0/b/labx-sst.appspot.com/o/data.json?alt=media&token=9b2cfd4f-6cf1-41b3-8e33-051b653afa43');
          const json = await response.json();
          setData(json);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
    };
    useEffect(() => {
        getMoviesFromApiAsync();
    }, []);
    return (
        <View>
        {(data !== null) ? (
            <View>
                <FlatList
                    data={data.sec1.postData}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.content}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    />
                <Text>Test</Text>
            </View>
                ) : (
                    <Text>Loading...</Text>
                )
        }
        </View>
    );
}