import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { heightScale, styles, widthScale } from "./Home";
import { FIREBASE_DB } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";


const Stack = createNativeStackNavigator();



export default function ForumHomePage() {

  
  return (
    <Stack.Navigator
      initialRouteName="ForumHome"
      screenOptions={{
        headerStyle: { backgroundColor: "#393E43" },
        headerTintColor: "#FFF",
        lazy: true,
      }}
      
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
      <View style={{ padding: 40 * heightScale }} />
      <Pressable
        style={styles.apperancBTFR}
        onPress={() => navigation.navigate("IndivForum", { level: 0 })}
      >
        <Text style={styles.sec1}>Sec 1</Text>
      </Pressable>
      <View style={{ padding: 10 * heightScale }} />
      <Pressable
        style={styles.apperancBTFR}
        onPress={() => navigation.navigate("IndivForum", { level: 1 })}
      >
        <Text style={styles.sec1}>Sec 2</Text>
      </Pressable>
      <View style={{ padding: 10 * heightScale }} />
      <Pressable
        style={styles.apperancBTFR}
        onPress={() => navigation.navigate("IndivForum", { level: 2 })}
      >
        <Text style={styles.sec1}>Sec 3</Text>
      </Pressable>
      <View style={{ padding: 10 * heightScale }} />
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
  const [docSnapData, setDocSnapData] = useState(null);
  const getMoviesFromApiAsync = async () => {
    try {
      console.log(level);
      const docRef = doc(
        FIREBASE_DB,
        level === 0
          ? "sec1"
          : level === 1
          ? "sec2"
          : level === 2
          ? "sec3"
          : "sec4",
        "data"
      );
      console.log(level === 0
        ? "sec1"
        : level === 1
        ? "sec2"
        : level === 2
        ? "sec3"
        : "sec4");
      const docSnap = await getDoc(docRef);
      setDocSnapData(docSnap);
      if (docSnapData !== null) {
        
        console.log("Document data:", docSnap.data());
        const response = await fetch(
          docSnapData.files[0].fileLocation,
          {
            method: "GET",
            mode: "cors",
          }
        );
  
        const json = await response.json();
        setData(json);
        console.log(data);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      
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
