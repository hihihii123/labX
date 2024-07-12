import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { styles } from "./Home";
const Stack = createNativeStackNavigator();

export default function ForumHomePage() {
  return (
    <Stack.Navigator
      initialRouteName="ForumHome"
      screenOptions={{ headerStyle: { backgroundColor: "#393E43" },
      headerTintColor: "#FFF", }}
    >
      <Stack.Screen name="ForumHome" component={ForumHome} />
      <Stack.Screen name="IndivForum" component={ForumPull} />
      <Stack.Screen name="IndivPage" component={IndivPage} />
    </Stack.Navigator>
  );
}

function ForumHome({ navigation }) {
  const [fontsLoaded] = useFonts({
    "SF Pro Display": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "ethnocentric rg": require("./assets/fonts/ethnocentric rg.otf"),
    "SF Compact": require("./assets/fonts/SF-Compact.ttf"),
    "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
  });

  return (
    <View style={styles.forumBG}>
      <Text style={styles.forum}>Forum</Text>
      <Pressable
        style={styles.apperancBTFR}
        onPress={() => navigation.navigate("IndivForum", { level: 0 })}
      >
        <Text style={styles.sec1}>Sec 1</Text>
      </Pressable>
      <Pressable
        style={styles.apperancBTFR}
        onPress={() => navigation.navigate("IndivForum", { level: 1 })}
      >
        <Text style={styles.sec1}>Sec 2</Text>
      </Pressable>
      <Pressable
        style={styles.apperancBTFR}
        onPress={() => navigation.navigate("IndivForum", { level: 2 })}
      >
        <Text style={styles.sec1}>Sec 3</Text>
      </Pressable>
      <Pressable
        style={styles.apperancBTFR}
        onPress={() => navigation.navigate("IndivForum", { level: 3 })}
      >
        <Text style={styles.sec1}>Sec 4</Text>
      </Pressable>
    </View>
  );
}

function ForumPull({ route, level, navigation }) {
  level = route.params.level;
  const [data, setData] = useState(null);
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/labx-sst.appspot.com/o/data.json?alt=media&token=9b2cfd4f-6cf1-41b3-8e33-051b653afa43",
        {
          method: "GET",
          mode: "cors",
        }
      );

      const json = await response.json();

      if (level === 0) {
        setData(json.sec1);
      } else if (level === 1) {
        setData(json.sec2);
      } else if (level === 2) {
        setData(json.sec3);
      } else if (level === 3) {
        setData(json.sec4);
      }
      console.log(data);
      console.log(level);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);
  return (
    <View>
      {data !== null ? (
        <View>
          <FlatList
            data={data.postData}
            renderItem={({ item }) => (
              <View>
                <Pressable
                  onPress={() =>
                    navigation.navigate("IndivPage", { item: item })
                  }
                >
                  <Text>{item.title}</Text>
                </Pressable>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <Text>Test</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

function IndivPage({ navigation, route, item }) {
  item = route.params.item;
  return (
    <>
      {item !== null ? (
        <View>
          <Text>{item.title}</Text>
          <Text></Text>
          <Text>{item.content}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
}
