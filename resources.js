import * as React from "react";
import {Text, StyleSheet, View} from "react-native";

const Resources = () => {
  	
  	return (
    		<View style={styles.resources}>
      			<View style={styles.resourcesWrapper}>
        				<Text style={styles.resources1}>Resources</Text>
      			</View>
      			<View style={[styles.resourcesChild, styles.apperanceBg]} />
      			<Text style={[styles.text, styles.textTypo1]}>􀎟</Text>
      			<Text style={[styles.text1, styles.textTypo1]}>􀉬</Text>
      			<Text style={styles.text2}>􀝞</Text>
      			<Text style={[styles.text3, styles.textTypo1]}>􀣌</Text>
      			<Text style={[styles.text4, styles.textTypo1]}>􀌥</Text>
      			<View style={[styles.appearance, styles.groupParentLayout]}>
        				<View style={[styles.apperance, styles.groupParentLayout]} />
        				<Text style={[styles.citationGenerator, styles.pastYearProjectsLayout]}>Citation Generator</Text>
      			</View>
      			<View style={[styles.appearanceParent, styles.groupParentLayout]}>
        				<View style={[styles.appearance1, styles.groupParentLayout]}>
          					<View style={[styles.apperance, styles.groupParentLayout]} />
          					<Text style={[styles.pastYearProjects, styles.pastYearProjectsLayout]}>Past Year Projects</Text>
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
    		</View>);
};

const styles = StyleSheet.create({
  	apperanceBg: {
    		backgroundColor: "#222426",
    		left: 0
  	},
  	textTypo1: {
    		fontSize: 40,
    		top: 792,
    		textAlign: "left",
    		color: "#387cc5",
    		fontFamily: "SF Pro Display",
    		position: "absolute"
  	},
  	groupParentLayout: {
    		height: 60,
    		width: 356,
    		position: "absolute"
  	},
  	pastYearProjectsLayout: {
    		height: 49,
    		width: 348,
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0.1,
    		fontSize: 36,
    		left: 8,
    		top: 5,
    		textAlign: "left",
    		color: "#387cc5",
    		lineHeight: 41,
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
    		lineHeight: 41,
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	resourcesWrapper: {
    		top: 57,
    		left: 22,
    		width: 233,
    		height: 41,
    		position: "absolute"
  	},
  	resourcesChild: {
    		top: 780,
    		width: 393,
    		height: 72,
    		position: "absolute"
  	},
  	text: {
    		left: 177,
    		width: 57,
    		height: 48
  	},
  	text1: {
    		left: 15
  	},
  	text2: {
    		left: 257,
    		color: "#d13036",
    		fontSize: 40,
    		top: 792,
    		textAlign: "left",
    		fontFamily: "SF Pro Display",
    		position: "absolute"
  	},
  	text3: {
    		left: 330
  	},
  	text4: {
    		left: 102
  	},
  	apperance: {
    		borderRadius: 20,
    		backgroundColor: "#222426",
    		left: 0,
    		top: 0,
    		width: 356
  	},
  	citationGenerator: {
    		fontFamily: "InriaSans-Regular"
  	},
  	appearance: {
    		top: 146,
    		left: 15
  	},
  	pastYearProjects: {
    		fontWeight: "300",
    		fontFamily: "InriaSans-Light"
  	},
  	appearance1: {
    		left: 0,
    		width: 356,
    		top: 0
  	},
  	text5: {
    		top: 15,
    		left: 318
  	},
  	appearanceParent: {
    		top: 233,
    		left: 15
  	},
  	appearanceGroup: {
    		top: 320,
    		left: 15
  	},
  	appearanceContainer: {
    		top: 407,
    		left: 15
  	},
  	groupView: {
    		top: 494,
    		left: 15
  	},
  	appearanceParent1: {
    		top: 581,
    		left: 15
  	},
  	text10: {
    		top: 161,
    		left: 333
  	},
  	resources: {
    		backgroundColor: "#393e43",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default Resources;
