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
     
      }}
      
    >
      <Stack.Screen name="ForumHome" component={ForumHome} />
      <Stack.Screen name="IndivForum" component={ForumPull} />
      <Stack.Screen name="IndivPage" component={IndivPage} />
      <Stack.Screen name="New Post" component={NEWFORUMPOST} />
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
  const [fontsLoaded] = useFonts({
    "SF Pro Display": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "ethnocentric rg": require("./assets/fonts/ethnocentric rg.otf"),
    "SF Compact": require("./assets/fonts/SF-Compact.ttf"),
    "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
  });
  level = route.params.level;
  const [data, setData] = useState(null);
  const [docSnapData, setDocSnapData] = useState(null);
  const [refrest, setrefrest] = useState(false);
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
      setDocSnapData(docSnap.data());
      console.log(docSnap.data());
      if (docSnap.data() !== null) {
        
        console.log(docSnap.data());
        
        
        
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
  
 
},
  [refrest]);
  return (
    <View>
      {docSnapData !== null && fontsLoaded === true ? (
        <View>
          <FlatList
            data={docSnapData.files}
            renderItem={({ item }) => (
              <View style={{direction: 'ltr', alignContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <Pressable
                  onPress={() =>
                    navigation.navigate("IndivPage", { item: item })
                  }
                >
                  <Text>{item.title}</Text>
                  <Text style={{alignSelf: 'flex-end'}}>Username: {item.username}</Text>
                </Pressable>

               
              </View>
            )}
            keyExtractor={(item) => item.id}
            style={{flex: 1, flexDirection: 'column'}}
            scrollEnabled={true}
        
          />
          <Text>Test</Text>
          <View style={{width: 'auto', flex: 1, backgroundColor: '#387cc5', margin: 20, position: 'relative'}}>
            <Pressable onPress={() => navigation.navigate("New Post")}>
              <Text style={{fontFamily: 'SF Pro Display', color: '#FFFFFF', fontSize: 50}}>+</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

function IndivPage({ navigation, route, item }) {
  item = route.params.item;
  const [data, setData] = useState(null);
  const pullContent = async () => {
    const response = await fetch(
      item.filelocation,
      {
        method: "GET",
        mode: "cors",
      }
    );

    const json = await response.json();
    setData(json);
    console.log(json);
  }
  useEffect(() => {
    pullContent();

  }, [])
  return (
    <>
      {item !== null && data !== null ? (
        <View>
          <Text>{data.title}</Text>
          <Text></Text>
          <Text>{data.content}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
}

function NEWFORUMPOST({navigation}) {
  return(
    <View>
      <Text>Placeholder</Text>
    </View>
  );
}