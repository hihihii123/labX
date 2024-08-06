import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

export const ConsultationFixed = () => {
  	
  	return (
    		<View style={styles.consultationFixed}>
      			<View style={styles.consultationFixedChild} />
      			<View style={[styles.appearanceWrapper, styles.appearanceWrapperLayout]}>
        				<View style={styles.appearance}>
          					<View style={[styles.apperance, styles.apperancePosition]} />
        				</View>
      			</View>
      			<View style={[styles.appearanceContainer, styles.appearancePosition1]}>
        				<View style={styles.appearance}>
          					<View style={[styles.apperance, styles.apperancePosition]} />
        				</View>
      			</View>
      			<View style={[styles.appearanceFrame, styles.groupViewPosition]}>
        				<View style={styles.appearance}>
          					<View style={[styles.apperance, styles.apperancePosition]} />
        				</View>
      			</View>
      			<View style={[styles.groupView, styles.groupViewPosition]}>
        				<View style={styles.appearance}>
          					<View style={[styles.apperance, styles.apperancePosition]} />
        				</View>
      			</View>
      			<View style={[styles.appearanceWrapper1, styles.appearancePosition1]}>
        				<View style={styles.appearance}>
          					<View style={[styles.apperance, styles.apperancePosition]} />
        				</View>
      			</View>
      			<View style={[styles.appearanceWrapper2, styles.appearanceWrapperLayout]}>
        				<View style={styles.appearance}>
          					<View style={[styles.apperance, styles.apperancePosition]} />
        				</View>
      			</View>
      			<View style={[styles.appearanceWrapper3, styles.appearancePosition]}>
        				<View style={styles.appearance}>
          					<View style={[styles.apperance, styles.apperancePosition]} />
        				</View>
      			</View>
      			<View style={styles.consultationWrapper}>
        				<Text style={styles.consultation}>Consultation</Text>
      			</View>
      			<Text style={[styles.text, styles.textPosition]}>􀎟</Text>
      			<Text style={[styles.text1, styles.textTypo3]}>􀉬</Text>
      			<Text style={[styles.text2, styles.textTypo3]}>􀝞</Text>
      			<Text style={[styles.text3, styles.textTypo3]}>􀣌</Text>
      			<Text style={[styles.text4, styles.textTypo3]}>􀌥</Text>
      			<View style={[styles.appearance7, styles.appearanceLayout]}>
        				<View style={[styles.apperance7, styles.appearanceLayout]} />
        				<Text style={[styles.addFileOptional, styles.requestFlexBox]}>Add file (Optional)</Text>
        				<Image style={[styles.simpleIconsgoogledrive, styles.sendFilledIconLayout]} resizeMode="cover" source="simple-icons:googledrive.png" />
      			</View>
      			<View style={[styles.appearance8, styles.appearanceLayout]}>
        				<View style={[styles.apperance7, styles.appearanceLayout]} />
        				<Text style={styles.mrNgGh}>Mr NG GH</Text>
      			</View>
      			<View style={[styles.appearance9, styles.apperance9Layout]}>
        				<View style={[styles.apperance9, styles.apperance9Layout]} />
        				<Text style={styles.insert1Month}>insert 1 month calendar here</Text>
      			</View>
      			<View style={[styles.appearance10, styles.apperance10Layout]}>
        				<View style={[styles.apperance10, styles.apperance10Layout]} />
      			</View>
      			<Text style={[styles.text5, styles.text5Typo]}>0/250</Text>
      			<View style={[styles.appearanceParent, styles.appearancePosition]}>
        				<View style={styles.appearance}>
          					<View style={[styles.apperance, styles.apperancePosition]} />
        				</View>
        				<Text style={[styles.text6, styles.textTypo2]}>15: 00</Text>
        				<Text style={[styles.text7, styles.textTypo2]}>13: 00</Text>
        				<Text style={[styles.text8, styles.textTypo1]}>13: 30</Text>
        				<Text style={[styles.text9, styles.textTypo1]}>15: 30</Text>
        				<Text style={[styles.text10, styles.textTypo]}>14: 00</Text>
        				<Text style={[styles.text11, styles.textTypo]}>16: 00</Text>
        				<Text style={[styles.text12, styles.textTypo2]}>14: 30</Text>
        				<Text style={[styles.text13, styles.textTypo2]}>16: 30</Text>
      			</View>
      			<Text style={styles.textPosition}>􀎟</Text>
      			<Text style={[styles.text15, styles.textTypo3]}>􀆈</Text>
      			<Text style={[styles.commentsattachments, styles.consultantTypo]}>Comments/Attachments:</Text>
      			<Text style={[styles.dateAndTime, styles.consultantTypo]}>Date and Time</Text>
      			<Text style={[styles.consultant, styles.consultantTypo]}>Consultant</Text>
      			<View style={[styles.appearance12, styles.appearanceLayout]}>
        				<View style={[styles.apperance7, styles.appearanceLayout]} />
        				<Text style={[styles.request, styles.text5Typo]}>Request</Text>
      			</View>
      			<Image style={[styles.sendFilledIcon, styles.sendFilledIconLayout]} resizeMode="cover" source="send-filled.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	appearanceWrapperLayout: {
    		height: 35,
    		width: 67
  	},
  	apperancePosition: {
    		backgroundColor: "#222426",
    		left: 0,
    		top: 0,
    		borderRadius: 20
  	},
  	appearancePosition1: {
    		left: 205,
    		height: 35,
    		width: 67,
    		position: "absolute"
  	},
  	groupViewPosition: {
    		left: 288,
    		height: 35,
    		width: 67,
    		position: "absolute"
  	},
  	appearancePosition: {
    		left: 39,
    		position: "absolute"
  	},
  	textPosition: {
    		height: 48,
    		width: 57,
    		left: 177,
    		fontSize: 40,
    		top: 792,
    		textAlign: "left",
    		color: "#387cc5",
    		fontFamily: "SF Pro Display",
    		position: "absolute"
  	},
  	textTypo3: {
    		fontSize: 40,
    		textAlign: "left",
    		fontFamily: "SF Pro Display",
    		position: "absolute"
  	},
  	appearanceLayout: {
    		height: 60,
    		position: "absolute"
  	},
  	requestFlexBox: {
    		height: 49,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontWeight: "300",
    		letterSpacing: 0.1,
    		fontSize: 24,
    		top: 5,
    		lineHeight: 41
  	},
  	sendFilledIconLayout: {
    		height: 24,
    		width: 24,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	apperance9Layout: {
    		height: 138,
    		width: 356,
    		position: "absolute"
  	},
  	apperance10Layout: {
    		height: 111,
    		width: 356,
    		position: "absolute"
  	},
  	text5Typo: {
    		fontFamily: "SF Compact",
    		position: "absolute"
  	},
  	textTypo2: {
    		height: 26,
    		width: 45,
    		fontSize: 16,
    		color: "#fff",
    		fontFamily: "InriaSans-Bold",
    		textAlign: "left",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	textTypo1: {
    		left: 97,
    		height: 26,
    		width: 45,
    		fontSize: 16,
    		color: "#fff",
    		fontFamily: "InriaSans-Bold",
    		textAlign: "left",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	textTypo: {
    		left: 180,
    		height: 26,
    		width: 45,
    		fontSize: 16,
    		color: "#fff",
    		fontFamily: "InriaSans-Bold",
    		textAlign: "left",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	consultantTypo: {
    		color: "#ebebef",
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		fontSize: 24,
    		textAlign: "left",
    		position: "absolute"
  	},
  	consultationFixedChild: {
    		top: 356,
    		backgroundColor: "#2b2e31",
    		height: 130,
    		width: 356,
    		borderRadius: 20,
    		left: 19,
    		position: "absolute"
  	},
  	apperance: {
    		height: 35,
    		width: 67,
    		position: "absolute"
  	},
  	appearance: {
    		left: 0,
    		top: 0,
    		height: 35,
    		width: 67,
    		position: "absolute"
  	},
  	appearanceWrapper: {
    		left: 122,
    		width: 67,
    		position: "absolute",
    		top: 439
  	},
  	appearanceContainer: {
    		top: 439
  	},
  	appearanceFrame: {
    		top: 439
  	},
  	groupView: {
    		top: 395
  	},
  	appearanceWrapper1: {
    		top: 395
  	},
  	appearanceWrapper2: {
    		top: 395,
    		left: 122,
    		width: 67,
    		position: "absolute"
  	},
  	appearanceWrapper3: {
    		height: 35,
    		width: 67,
    		top: 439
  	},
  	consultation: {
    		fontSize: 48,
    		letterSpacing: 0.2,
    		textAlign: "left",
    		fontFamily: "SF Pro Display",
    		fontWeight: "700",
    		lineHeight: 41,
    		color: "#387cc5",
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	consultationWrapper: {
    		top: 57,
    		left: 22,
    		width: 283,
    		height: 41,
    		position: "absolute"
  	},
  	text: {
    		display: "none"
  	},
  	text1: {
    		color: "#d13036",
    		left: 16,
    		top: 792,
    		fontSize: 40
  	},
  	text2: {
    		left: 257,
    		top: 792,
    		fontSize: 40,
    		color: "#387cc5"
  	},
  	text3: {
    		left: 330,
    		top: 792,
    		fontSize: 40,
    		color: "#387cc5"
  	},
  	text4: {
    		left: 102,
    		top: 792,
    		fontSize: 40,
    		color: "#387cc5"
  	},
  	apperance7: {
    		backgroundColor: "#222426",
    		left: 0,
    		top: 0,
    		borderRadius: 20,
    		width: 356
  	},
  	addFileOptional: {
    		left: 104,
    		fontFamily: "InriaSans-Light",
    		width: 188,
    		color: "#387cc5",
    		position: "absolute"
  	},
  	simpleIconsgoogledrive: {
    		bottom: 18,
    		left: 67
  	},
  	appearance7: {
    		top: 644,
    		left: 18,
    		width: 356
  	},
  	mrNgGh: {
    		left: 20,
    		width: 348,
    		fontFamily: "InriaSans-Bold",
    		height: 49,
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0.1,
    		fontSize: 24,
    		top: 5,
    		textAlign: "left",
    		color: "#387cc5",
    		fontWeight: "700",
    		lineHeight: 41,
    		position: "absolute"
  	},
  	appearance8: {
    		top: 146,
    		width: 368,
    		left: 19
  	},
  	apperance9: {
    		backgroundColor: "#222426",
    		left: 0,
    		top: 0,
    		borderRadius: 20
  	},
  	insert1Month: {
    		top: 11,
    		left: 4,
    		fontSize: 36,
    		fontStyle: "italic",
    		fontFamily: "InriaSans-Italic",
    		height: 113,
    		opacity: 0.3,
    		color: "#fff",
    		width: 348,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		letterSpacing: 0.1,
    		lineHeight: 41,
    		position: "absolute"
  	},
  	appearance9: {
    		top: 247,
    		left: 19
  	},
  	apperance10: {
    		backgroundColor: "#222426",
    		left: 0,
    		top: 0,
    		borderRadius: 20
  	},
  	appearance10: {
    		top: 527,
    		left: 19
  	},
  	text5: {
    		top: 610,
    		left: 315,
    		width: 47,
    		fontSize: 16,
    		fontFamily: "SF Compact",
    		color: "#fff",
    		height: 24,
    		textAlign: "left",
    		fontWeight: "700"
  	},
  	text6: {
    		top: 50,
    		left: 13
  	},
  	text7: {
    		left: 14,
    		top: 7
  	},
  	text8: {
    		top: 7
  	},
  	text9: {
    		top: 51
  	},
  	text10: {
    		top: 7
  	},
  	text11: {
    		top: 51
  	},
  	text12: {
    		left: 262,
    		top: 7
  	},
  	text13: {
    		left: 263,
    		top: 51
  	},
  	appearanceParent: {
    		width: 308,
    		height: 77,
    		top: 395
  	},
  	text15: {
    		top: 158,
    		left: 311,
    		color: "#d13036"
  	},
  	commentsattachments: {
    		top: 494,
    		left: 16
  	},
  	dateAndTime: {
    		top: 214,
    		left: 19
  	},
  	consultant: {
    		top: 113,
    		left: 19
  	},
  	request: {
    		left: 151,
    		width: 90,
    		height: 49,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontWeight: "300",
    		letterSpacing: 0.1,
    		fontSize: 24,
    		top: 5,
    		lineHeight: 41,
    		color: "#d13036"
  	},
  	appearance12: {
    		top: 710,
    		width: 356,
    		left: 19
  	},
  	sendFilledIcon: {
    		top: 728,
    		left: 133
  	},
  	consultationFixed: {
    		backgroundColor: "#393e43",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default ConsultationFixed;
