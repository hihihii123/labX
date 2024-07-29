import {
  Platform,
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo } from "@expo/vector-icons";

import ForumPage from "./forum";
import Login from "./Login";
import { UserContext } from "./usercontextslave";
import React, { useContext, useEffect, useState } from "react";
import MainISSNav from "./ISS";
import Consult from "./Consult";
import { set } from "lodash";
import { useFonts } from "expo-font";
import ForumHomePage from "./testForum";
import { func } from "prop-types";
const platform = Platform.OS;

const Tab = createBottomTabNavigator();
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

// Define the dimensions of the screen size your styles are currently optimized for
export const baseWidth = 393;
export const baseHeight = 852;

// Calculate the scale factors
export const widthScale = windowWidth / baseWidth;
export const heightScale = windowHeight / baseHeight;
function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    "SF Pro Display": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "ethnocentric rg": require("./assets/fonts/ethnocentric rg.otf"),
    "SF Compact": require("./assets/fonts/SF-Compact.ttf"),
    "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
    "SF Compact Text": require("./assets/fonts/SF-Compact-Text-Regular.otf"),
  });
 
  const { user, setUser } = React.useContext(UserContext);

  return (
    <View style={styles.MainPage}>
      {fontsLoaded ? (
        <View style={styles.MainPage}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headerSFPRO}>Hi,</Text>
            <Text style={styles.headerEthno}>
              {user != null ? user.displayName + "," : "A User, "}
            </Text>
          </View>
          <Text style={styles.textSFCompact}>welcome back.</Text>

          <View style={[styles.appearanceParent, styles.appearanceLayout]}>
            <View style={[styles.appearance, styles.appearanceLayout]}>
              <View style={[styles.apperance, styles.apperancePosition]} />
            </View>
            <Text style={[styles.factOfTheContainer, styles.containerFlexBox]}>
              <Text style={styles.factOfThe}>{"Fact of the Day"}</Text>
              <Text
                style={[styles.materialsExpandWhen, styles.welcomeBackTypo]}
              >
                Materials expand when heated because the forces of attraction
                between the particles is reduced.
              </Text>
            </Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout1]}>
            <View style={[styles.appearanceGroup, styles.groupLayout1]}>
              <View style={[styles.appearanceGroup, styles.groupLayout1]}>
                <View style={[styles.apperance1, styles.groupLayout1]} />
              </View>
              <Text style={styles.upcoming}>Upcoming</Text>
            </View>
            <View style={[styles.rectangleParent, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.groupLayout]} />
              <Text style={styles.issProposal}>ISS PROPOSAL</Text>
              <Text style={styles.today}>Today!</Text>
              <View style={styles.groupItem} />
            </View>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.groupLayout]} />
              <Text
                style={[styles.consultationNgGh, styles.consultationNgGhLayout]}
              >
                Consultation [NG GH]
              </Text>
              <Text style={[styles.days, styles.daysTypo]}>10 days</Text>
              <View style={styles.groupItem} />
            </View>
            <View style={[styles.rectangleContainer, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.groupLayout]} />
              <Text
                style={[
                  styles.physicsLabBooking,
                  styles.consultationNgGhLayout,
                ]}
              >
                Physics Lab Booking
              </Text>
              <Text style={[styles.days1, styles.daysTypo]}>15 days</Text>
              <View style={styles.groupItem} />
            </View>
          </View>

          <View style={{ flex: 1 }} />
        </View>
      ) : (
        <Text style={styles.header}>Font not loaded</Text>
      )}
    </View>
  );
}

export default function Home({ navigation }) {
  const [user, setUser] = React.useState(null);
  const [loggedin, setLoggedin] = React.useState(false);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      
        <NavigationContainer style={{ backgroundColor: "#393E43", flex: 1 }}>
          <Tab.Navigator
            initialRouteName="Home"
            tabBarBadge={{ focused: true, color: "Red", size: 11 }}
            screenOptions={{
              tabBarStyle: {
                backgroundColor: "#222426",
                height: 72 * heightScale,
              },
              tabBarInactiveTintColor: "#387cc5",
              tabBarActiveTintColor: "#d13036",
              headerShown: false,
              tabBarAllowFontScaling: true,
              tabBarLabelStyle: {
                fontSize: 7 * Math.sqrt(heightScale ** 2 + widthScale ** 2),
              },
              
            }}
          >
            <Tab.Screen
              name="Consultation"
              component={Consult}
              options={{
                tabBarLabel: platform == "web" ? "Consultation" : "",
                tabBarIcon: () => <Text style={styles.textSFPRO}>􀉬</Text>,
              }}
            />
            <Tab.Screen
              name="Forum"
              component={ForumHomePage}
              options={{
                tabBarLabel: platform == "web" ? "Forum" : "",
                tabBarIcon: () => <Text style={styles.textSFPRO}>􀌥</Text>,
                lazy: true,
              }}
              listeners={({ navigation, route }) => ({
                tabPress: (e) => {
                  if (!loggedin) {
                    e.preventDefault();
                    navigation.navigate("Settings");
                    alert("Please sign in to access the forum");
                  }
                },
              })}
            />
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: platform == "web" ? "Home" : "",
                tabBarIcon: () => <Text style={styles.textSFPRO}>􀎟</Text>,
              }}
            />
            <Tab.Screen
              name="ISS"
              component={MainISSNav}
              options={{
                tabBarLabel: platform == "web" ? "ISS" : "",
                tabBarIcon: () => <Text style={styles.textSFPRO}>􀝞</Text>,
              }}
            />
            <Tab.Screen
              name="Settings"
           
              children={() => <Login loggedIn={loggedin} setLoggedIn={setLoggedin} />}
              options={{
                tabBarLabel: platform == "web" ? "Settings" : "",
                tabBarIcon: () => <Text style={styles.textSFPRO}>􀣌</Text>,
                
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
     
    </UserContext.Provider>
  );
}
export const styles = StyleSheet.create({
  MainPage: {
    flex: 1,
    backgroundColor: "#393E43",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#FFF",
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 50 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    color: "#FFF",
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    paddingBottom: 20 * heightScale,
  },
  headerSFPRO: {
    color: "#387CC5",
    fontFamily: "SF Pro Display",
    fontSize: 64 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 41 * heightScale,
    letterSpacing: 0.256 * widthScale,
  },
  textSFPRO: {
    color: "#387CC5",
    fontFamily: "SF Pro Display",
    fontSize: 7 * Math.sqrt(heightScale ** 2 + widthScale ** 2),
    fontStyle: "normal",
    fontWeight: "300",
    letterSpacing: 0.128 * widthScale,
  },
  textSFPRORED: {
    color: "#d13036",
    fontFamily: "SF Pro Display",
    fontSize: 7 * Math.sqrt(heightScale ** 2 + widthScale ** 2),
    fontStyle: "normal",
    fontWeight: "300",
    letterSpacing: 0.128 * widthScale,
  },
  headerEthno: {
    color: "#387CC5",
    fontFamily: "ethnocentric rg",
    fontSize: 48 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 41 * heightScale,
    letterSpacing: 0.192 * widthScale,
  },
  textSFCompact: {
    color: "#387CC5",
    fontFamily: "SF Compact",
    fontSize: 32 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 41 * heightScale,
    letterSpacing: 0.128 * widthScale,
  },
  containerFlexBox: {
    textAlign: "left",
    lineHeight: 41 * heightScale,
    position: "absolute",
  },
  welcomeBackTypo: {
    fontFamily: "SF Compact",
    fontSize: 32 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
  },
  textTypo: {
    fontSize: 40 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    top: 792 * heightScale,
    fontFamily: "SF Pro Display",
    textAlign: "left",
    position: "absolute",
  },
  appearanceLayout: {
    height: 265 * heightScale,
    width: 356 * widthScale,
    position: "relative",
  },
  apperancePosition: {
    borderRadius: 20 * widthScale,
    left: 0,
    top: 0,
  },
  groupLayout1: {
    height: 272 * heightScale,
    width: 356 * widthScale,
    position: "absolute",
  },
  groupLayout: {
    height: 54 * heightScale,
    width: 334 * widthScale,
    position: "absolute",
  },
  consultationNgGhLayout: {
    width: 237 * widthScale,
    height: 22 * heightScale,
    fontFamily: "InriaSans-Bold",
    left: 16 * widthScale,
    top: 16 * heightScale,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.1 * widthScale,
    fontWeight: "700",
    textAlign: "left",
    color: "#387cc5",
    lineHeight: 41 * heightScale,
    position: "absolute",
    fontSize: 24 * Math.sqrt(widthScale ** 2 + heightScale ** 2), // Adjusted fontSize
  },
  daysTypo: {
    width: 81 * widthScale,
    fontSize: 24 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    left: 253 * widthScale,
    height: 22 * heightScale,
    fontFamily: "InriaSans-Bold",
    top: 16 * heightScale,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.1 * widthScale,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 41 * heightScale,
    position: "absolute",
  },
  hi: {
    fontSize: 64 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    fontFamily: "SF Pro Display",
    fontWeight: "700",
  },
  aUser: {
    fontSize: 48 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    fontFamily: "ethnocentric rg",
  },
  hiAUserContainer: {
    color: "#387cc5",
    left: 0,
    top: 0,
  },

  welcomeBack: {
    top: 44 * heightScale,
    fontWeight: "500",
    letterSpacing: 0.1 * widthScale,
    fontFamily: "SF Compact",
    fontSize: 32 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    textAlign: "left",
    color: "#387cc5",
    lineHeight: 41 * heightScale,
    left: 0,
    position: "absolute",
  },
  hiAUserParent: {
    top: 57 * heightScale,
    left: 22 * widthScale,
    width: 345 * widthScale,
    height: 85 * heightScale,
    position: "absolute",
  },
  homepageRedesignChild: {
    top: 780 * heightScale,
    width: 393 * widthScale,
    height: 72 * heightScale,
    backgroundColor: "#222426",
    left: 0,
    position: "absolute",
  },
  text1: {
    left: 177 * widthScale,
    width: 57 * widthScale,
    height: 48 * heightScale,
    color: "#d13036",
  },
  text2: {
    left: 15 * widthScale,
    color: "#387cc5",
  },
  text3: {
    left: 257 * widthScale,
    color: "#387cc5",
  },
  text4: {
    left: 330 * widthScale,
    color: "#387cc5",
  },
  text5: {
    left: 102 * widthScale,
    color: "#387cc5",
  },
  apperance: {
    height: 265 * heightScale,
    width: 356 * widthScale,
    position: "absolute",
    backgroundColor: "#222426",
  },
  appearance: {
    left: 0,
    top: 0,
  },
  factOfTheContainer: {
    top: 10 * heightScale,
    left: 14 * widthScale,
    width: 330 * widthScale,
    height: 217 * heightScale,
  },
  appearanceParent: {
    top: 460 * heightScale,
    left: 19 * widthScale,
  },
  apperance1: {
    borderRadius: 20 * widthScale,
    left: 0,
    top: 0,
    backgroundColor: "#222426",
  },
  appearanceGroup: {
    left: 0,
    top: 0,
  },
  upcoming: {
    top: 1 * heightScale,
    left: 18 * widthScale,
    width: 166 * widthScale,
    height: 56 * heightScale,
    alignItems: "center",
    display: "flex",
    fontSize: 36 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    fontFamily: "SF Compact",
    fontWeight: "500",
    letterSpacing: 0.1 * widthScale,
    textAlign: "left",
    color: "#387cc5",
    lineHeight: 41 * heightScale,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 20 * widthScale,
    left: 0,
    top: 0,
    backgroundColor: "#393e43",
  },
  issProposal: {
    width: 224 * widthScale,
    height: 22 * heightScale,
    fontFamily: "InriaSans-Bold",
    left: 16 * widthScale,
    top: 16 * heightScale,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.1 * widthScale,
    fontSize: 32 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    fontWeight: "700",
    textAlign: "left",
    color: "#387cc5",
    lineHeight: 41 * heightScale,
    position: "absolute",
  },
  today: {
    color: "#ff1c1c",
    width: 80 * widthScale,
    fontSize: 24 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    left: 253 * widthScale,
    height: 22 * heightScale,
    fontFamily: "InriaSans-Bold",
    top: 16 * heightScale,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.1 * widthScale,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 41 * heightScale,
    position: "absolute",
  },
  groupItem: {
    top: 15 * heightScale,
    left: 240 * widthScale,
    borderStyle: "solid",
    borderColor: "#000",
    borderRightWidth: 2 * widthScale,
    width: 2 * widthScale,
    height: 27 * heightScale,
    position: "absolute",
  },
  rectangleParent: {
    top: 61 * heightScale,
    left: 11 * widthScale,
    width: 334 * widthScale,
  },
  rectangleGroup: {
    top: 133 * heightScale,
    left: 11 * widthScale,
    width: 334 * widthScale,
  },
  rectangleContainer: {
    top: 205 * heightScale,
    left: 11 * widthScale,
    width: 334 * widthScale,
  },
  groupParent: {
    top: 155 * heightScale,
    left: 19 * widthScale,
  },
  homepageRedesign: {
    flex: 1,
    width: "100%",
    height: 852 * heightScale,
    overflow: "hidden",
    backgroundColor: "#393e43",
  },
  factOfThe: {
    fontSize: 36 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
    fontFamily: "SF Compact",
    fontWeight: "500",
    color: "#387cc5",
  },
  materialsExpandWhen: {
    fontWeight: "300",
    color: "#d13036",
    fontFamily: "SF Compact",
    fontSize: 32 * Math.sqrt(widthScale ** 2 + heightScale ** 2),
  },
  forum: {
    fontSize: 48,
    letterSpacing: 0.2,
    lineHeight: 41,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#387cc5",
    textAlign: "left",
  },
  sec1: {
    fontSize: 36,
    letterSpacing: 0.1,
    lineHeight: 41,
    fontFamily: "SF Compact Text",
    color: "#387cc5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 348,
    height: 49,
  },
  forumBG: {
    backgroundColor: "#393e43",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
  apperancBTFR: {
    borderRadius: 20,
    backgroundColor: "#222426",
    flex: 1,
    width: "100%",
    height: 60,
   
   
  
  },
  textBox: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
    flex: 1,
    fontFamily: 'SF Compact Text'
  }
});

