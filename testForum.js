import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function ForumPull() {
    const [data, setdata] = useState();
    const getMoviesFromApiAsync = async () => {
        try {
          const response = await fetch('https://firebasestorage.googleapis.com/v0/b/labx-sst.appspot.com/o/data.json?alt=media&token=9b2cfd4f-6cf1-41b3-8e33-051b653afa43');
          const json = await response.json();
          setdata(json);
        } catch (error) {
          console.error(error);
        }
    };
    useEffect(() => {
        getMoviesFromApiAsync();
    }, []);
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.sec1.postData.title}</Text>
                        <Text>{item.sec1.postData.content}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                />
        </View>
    );
    

}   