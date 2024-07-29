import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  Button,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Resources from "./resources";
import LabBookPage from "./bookLab";
// Get the window's width and height
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Define the dimensions of the iPhone 14
const baseWidth = 393;
const baseHeight = 852;

// Calculate the scaling factors
const widthScale = windowWidth / baseWidth;
const heightScale = windowHeight / baseHeight;

const Stack = createNativeStackNavigator();



function ISSHome({ navigation }) {
  const [fontsLoaded] = useFonts({
    "SF Pro Display": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "ethnocentric rg": require("./assets/fonts/ethnocentric rg.otf"),
    "SF Compact": require("./assets/fonts/SF-Compact.ttf"),
    "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
    "InriaSans-Light": require("./assets/fonts/InriaSans-Light.ttf"),
  });
  
  return (
    <View style={styles.iss}>
      <View style={[styles.appearanceParent, styles.appearanceLayout]}>
        <View style={[styles.appearance, styles.appearanceLayout]}>
          <View style={[styles.apperance, styles.issChildPosition]} />
        </View>
        <View style={styles.groupChild} />
        <Text style={[styles.text, styles.textFlexBox]}>10%</Text>
      </View>
      <View style={[styles.issWrapper, styles.issWrapperPosition]}>
        <Text style={[styles.iss1, styles.iss1FlexBox]}>ISS</Text>
      </View>
      <View style={[styles.issChild, styles.issChildPosition]} />
      <View style={[styles.appearance1, styles.appearanceLayout]}>
        <Pressable onPress={() => navigation.navigate("Resources")}>
          <View style={[styles.apperance, styles.issChildPosition]} />
          <Text style={[styles.resources, styles.daysLayout]}>Resources</Text>
        </Pressable>
      </View>
      <View style={[styles.appearance2, styles.issWrapperPosition]}>
        <Pressable onPress={() => navigation.navigate("LabBookPage")}>
          <View style={[styles.apperance, styles.issChildPosition]} />
          <Text style={[styles.resources, styles.daysLayout]}>Booking</Text>
        </Pressable>
      </View>
      <View style={[styles.appearance3, styles.appearanceLayout]}>
        <View style={[styles.apperance, styles.issChildPosition]} />
        <Text style={[styles.timeTillFinal, styles.daysLayout]}>
          Time till final submission
        </Text>
      </View>
      <View style={[styles.appearance4, styles.appearanceLayout]}>
        <View style={[styles.apperance, styles.issChildPosition]} />
        <Text style={[styles.nextSubmissionDeadline, styles.daysLayout]}>
          Next submission deadline
        </Text>
      </View>
      <View style={[styles.appearance5, styles.appearanceLayout]}>
        <View style={[styles.apperance, styles.issChildPosition]} />
        <Text style={[styles.days, styles.daysLayout]}>ISS has ended.</Text>
      </View>
      <View style={[styles.appearance6, styles.appearanceLayout]}>
        <View style={[styles.apperance, styles.issChildPosition]} />
        <Text style={[styles.days, styles.daysLayout]}>NIL</Text>
      </View>
      <View style={[styles.appearance7, styles.appearanceLayout]}>
        <View style={[styles.apperance, styles.issChildPosition]} />
        <Text style={[styles.hours9Minutes, styles.daysLayout]}>
          ISS has ended.
        </Text>
      </View>
      <Text style={[styles.text7, styles.textTypo1]}>􀆊</Text>
      <Text style={[styles.text6, styles.textTypo1]}>􀆊</Text>
  
      </View>

  );
}

export default function MainISSNav({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ISSHome"
      screenOptions={{
        headerStyle: { backgroundColor: "#393E43" },
        headerTintColor: "#FFF",
      }}
    >
      <Stack.Screen name="ISSHome" component={ISSHome} />
      <Stack.Screen name="Resources" component={Resources} />
      <Stack.Screen name="LabBookPage" component={LabBookPage} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  appearanceLayout: {
    height: 60 * heightScale,
    width: 356 * widthScale,
  },
  issChildPosition: {
    backgroundColor: "#222426",
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    color: "#d13036",
  },
  issWrapperPosition: {
    left: 22 * widthScale,
    position: "absolute",
  },
  iss1FlexBox: {
    textAlign: "left",
    color: "#387cc5",
  },
  textTypo2: {
    fontSize: 40,
    top: 792 * heightScale,
    textAlign: "left",
    fontFamily: "SF Pro Display",
    position: "absolute",
  },
  daysLayout: {
    height: 49 * heightScale,
    width: 348 * widthScale,
    left: 8 * widthScale,
    top: 5 * heightScale,
    alignItems: "center",
    display: "flex",
    fontFamily: "InriaSans-Light",
    fontWeight: "300",
    lineHeight: 41 * heightScale,
    position: "absolute",
  },
  textTypo1: {
    fontSize: 24,
    left: 360 * widthScale,
    textAlign: "left",
    fontFamily: "SF Pro Display",
    color: "#d13036",
    position: "absolute",
  },
  textTypo: {
    color: "#ff1c1c",
    fontFamily: "InriaSans-Bold",
    fontSize: 36,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 41 * heightScale,
    letterSpacing: 0.1,
    position: "absolute",
  },
  apperance: {
    borderRadius: 20,
    backgroundColor: "#222426",
    top: 0,
    height: 60 * heightScale,
    width: 356 * widthScale,
  },
  appearance: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#387cc5",
    width: 60 * widthScale,
    borderRadius: 20,
    left: 0,
    top: 0,
    height: 60 * heightScale,
    position: "absolute",
  },
  text: {
    top: 7 * heightScale,
    height: 45 * heightScale,
    alignItems: "center",
    display: "flex",
    fontFamily: "InriaSans-Light",
    fontWeight: "300",
    lineHeight: 41 * heightScale,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0.1,
    fontSize: 32,
    width: 60 * widthScale,
    left: 0,
    position: "absolute",
  },
  appearanceParent: {
    top: 755 * heightScale,
    left: 19 * widthScale,
    width: 356 * widthScale,
    position: "absolute",
  },
  iss1: {
    fontFamily: "SF Pro Display",
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 0.2,
    fontSize: 48,
    lineHeight: 41 * heightScale,
    left: 0,
    top: 0,
    position: "absolute",
  },
  issWrapper: {
    top: 57 * heightScale,
    width: 74 * widthScale,
    height: 41 * heightScale,
  },
  issChild: {
    top: 780 * heightScale,
    width: 393 * widthScale,
    height: 72 * heightScale,
  },
  text1: {
    left: 177 * widthScale,
    width: 57 * widthScale,
    height: 48 * heightScale,
    color: "#387cc5",
  },
  text2: {
    left: 15 * widthScale,
    color: "#387cc5",
  },
  text3: {
    left: 257 * widthScale,
    color: "#d13036",
    fontSize: 40,
    top: 792 * heightScale,
  },
  text4: {
    left: 330 * widthScale,
    color: "#387cc5",
  },
  text5: {
    left: 102 * widthScale,
    color: "#387cc5",
  },
  resources: {
    fontSize: 36,
    width: 348 * widthScale,
    left: 8 * widthScale,
    top: 5 * heightScale,
    letterSpacing: 0.1,
    textAlign: "left",
    color: "#387cc5",
  },
  appearance1: {
    top: 233 * heightScale,
    left: 19 * widthScale,
    width: 356 * widthScale,
    position: "absolute",
  },
  appearance2: {
    top: 146 * heightScale,
    height: 60 * heightScale,
    width: 356 * widthScale,
  },
  timeTillFinal: {
    width: 348 * widthScale,
    left: 8 * widthScale,
    top: 5 * heightScale,
    justifyContent: "center",
    textAlign: "center",
    color: "#387cc5",
    letterSpacing: 0.1,
    fontSize: 32,
  },
  appearance3: {
    top: 320 * heightScale,
    left: 19 * widthScale,
    width: 356 * widthScale,
    position: "absolute",
  },
  nextSubmissionDeadline: {
    fontSize: 30,
    width: 348 * widthScale,
    left: 8 * widthScale,
    top: 5 * heightScale,
    justifyContent: "center",
    textAlign: "center",
    color: "#387cc5",
    letterSpacing: 0.1,
  },
  appearance4: {
    top: 494 * heightScale,
    left: 19 * widthScale,
    width: 356 * widthScale,
    position: "absolute",
  },
  days: {
    width: 348 * widthScale,
    left: 8 * widthScale,
    top: 5 * heightScale,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0.2,
    fontSize: 48,
    color: "#d13036",
  },
  appearance5: {
    top: 407 * heightScale,
    left: 19 * widthScale,
    width: 356 * widthScale,
    position: "absolute",
  },
  appearance6: {
    top: 581 * heightScale,
    left: 19 * widthScale,
    width: 356 * widthScale,
    position: "absolute",
  },
  hours9Minutes: {
    fontSize: 36,
    width: 348 * widthScale,
    left: 8 * widthScale,
    top: 5 * heightScale,
    letterSpacing: 0.1,
    justifyContent: "center",
    textAlign: "center",
    color: "#d13036",
  },
  appearance7: {
    top: 668 * heightScale,
    left: 19 * widthScale,
    width: 356 * widthScale,
    position: "absolute",
  },
  text6: {
    top: 248 * heightScale,
  },
  text7: {
    top: 161 * heightScale,
  },
  spacingAndMargins: {
    top: 32 * heightScale,
    left: 40 * widthScale,
    color: "#fff",
    fontFamily: "InriaSans-Bold",
    fontSize: 24,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 41 * heightScale,
    letterSpacing: 0.1,
    position: "absolute",
  },
  groupItem: {
    top: 21 * heightScale,
    left: 21 * widthScale,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    borderStyle: "solid",
    borderColor: "#ff1c1c",
    borderWidth: 3,
    width: 250 * widthScale,
    height: 69 * heightScale,
    position: "absolute",
  },
  text8: {
    left: 230 * widthScale,
    top: 0,
  },
  text9: {
    top: 62 * heightScale,
    left: 0,
  },
  spacingAndMarginsParent: {
    top: 48 * heightScale,
    left: 96 * widthScale,
    width: 271 * widthScale,
    height: 103 * heightScale,
    position: "absolute",
  },
  iss: {
    backgroundColor: "#393e43",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});
