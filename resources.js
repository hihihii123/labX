import * as React from "react";
import { Text, StyleSheet, View, Dimensions, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Citation from "./citation.js";
import PastYearProj from "./pastYr.js";

const { width, height } = Dimensions.get('window');
const baseWidth = 543;
const baseHeight = 902;

const scaleWidth = size => (width / baseWidth) * size;
const scaleHeight = size => (height / baseHeight) * size;

const Stack = createNativeStackNavigator();

const Resources = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "SF Pro Display": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "ethnocentric rg": require("./assets/fonts/ethnocentric rg.otf"),
    "SF Compact": require("./assets/fonts/SF-Compact.ttf"),
    "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
    "InriaSans-Regular": require("./assets/fonts/InriaSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ResourcesScreen" component={ResourcesScreen} />
        <Stack.Screen name="Citation" component={Citation} />
      </Stack.Navigator>
  );
};

const ResourcesScreen = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
     "SF Pro Display": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
     "ethnocentric rg": require("./assets/fonts/ethnocentric rg.otf"),
     "SF Compact": require("./assets/fonts/SF-Compact.ttf"),
     "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
     "InriaSans-Regular": require("./assets/fonts/InriaSans-Regular.ttf"),
   });
  return (
    <View style={styles.resources}>
      <View style={styles.resourcesWrapper}>
        <Text style={styles.resources1}>Resources</Text>
      </View>
      <View style={[styles.appearance, styles.groupParentLayout]}>
        <Pressable onPress={() => navigation.navigate("Citation")}>
          <View style={[styles.apperance, styles.groupParentLayout]} />
          <Text style={[styles.citationGenerator, styles.pastYearProjectsLayout]}>Citation Generator</Text>
        </Pressable>
      </View>
      <View style={[styles.appearanceParent, styles.groupParentLayout]}>
        <View style={[styles.appearance1, styles.groupParentLayout]}>
		<Pressable onPress={() => navigation.navigate("PastYearProj")}>
          <View style={[styles.apperance, styles.groupParentLayout]} />
          <Text style={[styles.pastYearProjects, styles.pastYearProjectsLayout]}>Past Year Projects</Text>
		</Pressable>
        </View>
        <Text style={[styles.text5, styles.textTypo]}>􀆊</Text>
      </View>
      <View style={[styles.appearanceGroup, styles.groupParentLayout]}>
        <View style={[styles.appearance1, styles.groupParentLayout]}>
          <View style={[styles.apperance, styles.groupParentLayout]} />
          <Text style={[styles.pastYearProjects, styles.pastYearProjectsLayout]}>Lessons</Text>
        </View>
        <Text style={[styles.text5, styles.textTypo]}>􀆊</Text>
      </View>
      <View style={[styles.appearanceContainer, styles.groupParentLayout]}>
        <View style={[styles.appearance1, styles.groupParentLayout]}>
          <View style={[styles.apperance, styles.groupParentLayout]} />
          <Text style={[styles.pastYearProjects, styles.pastYearProjectsLayout]}>Hardwares</Text>
        </View>
        <Text style={[styles.text5, styles.textTypo]}>􀆊</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.appearance1, styles.groupParentLayout]}>
          <View style={[styles.apperance, styles.groupParentLayout]} />
          <Text style={[styles.pastYearProjects, styles.pastYearProjectsLayout]}>Softwares</Text>
        </View>
        <Text style={[styles.text5, styles.textTypo]}>􀆊</Text>
      </View>
      <View style={[styles.appearanceParent1, styles.groupParentLayout]}>
        <View style={[styles.appearance1, styles.groupParentLayout]}>
          <View style={[styles.apperance, styles.groupParentLayout]} />
          <Text style={[styles.pastYearProjects, styles.pastYearProjectsLayout]}>Rubrics</Text>
        </View>
        <Text style={[styles.text5, styles.textTypo]}>􀆊</Text>
      </View>
      <Text style={[styles.text10, styles.textTypo]}>􀆊</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  apperanceBg: {
    backgroundColor: "#222426",
    left: 0
  },
  textTypo1: {
    fontSize: 40,
    top: scaleHeight(792),
    textAlign: "left",
    color: "#387cc5",
    fontFamily: "SF Pro Display",
    position: "absolute"
  },
  groupParentLayout: {
    height: scaleHeight(60),
    width: scaleWidth(356),
    position: "absolute"
  },
  pastYearProjectsLayout: {
    height: scaleHeight(49),
    width: scaleWidth(348),
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.1,
    fontSize: 36,
    left: scaleWidth(8),
    top: scaleHeight(5),
    textAlign: "left",
    color: "#387cc5",
    lineHeight: scaleHeight(41),
    position: "absolute"
  },
  textTypo: {
    fontSize: 24,
    color: "#d13036",
    textAlign: "left",
    fontFamily: "SF Pro Display",
    position: "absolute"
  },
  resources1: {
    fontSize: 48,
    letterSpacing: 0.2,
    fontWeight: "700",
    textAlign: "left",
    color: "#387cc5",
    fontFamily: "SF Pro Display",
    lineHeight: scaleHeight(41),
    left: 0,
    top: 0,
    position: "absolute"
  },
  resourcesWrapper: {
    top: scaleHeight(57),
    left: scaleWidth(22),
    width: scaleWidth(233),
    height: scaleHeight(41),
    position: "absolute"
  },
  resourcesChild: {
    top: scaleHeight(780),
    width: scaleWidth(393),
    height: scaleHeight(72),
    position: "absolute"
  },
  text: {
    left: scaleWidth(177),
    width: scaleWidth(57),
    height: scaleHeight(48)
  },
  text1: {
    left: scaleWidth(15)
  },
  text2: {
    left: scaleWidth(257),
    color: "#d13036",
    fontSize: 40,
    top: scaleHeight(792),
    textAlign: "left",
    fontFamily: "SF Pro Display",
    position: "absolute"
  },
  text3: {
    left: scaleWidth(330)
  },
  text4: {
    left: scaleWidth(102)
  },
  apperance: {
    borderRadius: 20,
    backgroundColor: "#222426",
    left: 0,
    top: 0,
    width: scaleWidth(356)
  },
  citationGenerator: {
    fontFamily: "InriaSans-Regular"
  },
  appearance: {
    top: scaleHeight(146),
    left: scaleWidth(15)
  },
  pastYearProjects: {
    fontWeight: "300",
    fontFamily: "InriaSans-Light"
  },
  appearance1: {
    left: 0,
    width: scaleWidth(356),
    top: 0
  },
  text5: {
    top: scaleHeight(15),
    left: scaleWidth(318)
  },
  appearanceParent: {
    top: scaleHeight(233),
    left: scaleWidth(15)
  },
  appearanceGroup: {
    top: scaleHeight(320),
    left: scaleWidth(15)
  },
  appearanceContainer: {
    top: scaleHeight(407),
    left: scaleWidth(15)
  },
  groupView: {
    top: scaleHeight(494),
    left: scaleWidth(15)
  },
  appearanceParent1: {
    top: scaleHeight(581),
    left: scaleWidth(15)
  },
  text10: {
    top: scaleHeight(161),
    left: scaleWidth(333)
  },
  resources: {
    backgroundColor: "#393e43",
    flex: 1,
    width: "auto",
    height: "auto",
    justifyContent: "center",
    overflow: "hidden",
  }
});

export default Resources;
