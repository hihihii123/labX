import * as React from "react";
import {StyleSheet, View, Text, Image, Dimensions, SafeAreaView} from "react-native";
import { useFonts } from "expo-font";
import {Picker} from "@react-native-picker/picker";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const SCALE_WIDTH = SCREEN_WIDTH / 390; // iPhone 14 width
const SCALE_HEIGHT = SCREEN_HEIGHT / 844; // iPhone 14 height

const scale = (size, factor = 'width') => {
  return factor === 'height' ? size * SCALE_HEIGHT : size * SCALE_WIDTH;
};

export const ConsultationFixed = () => {
	const [fontsLoaded] = useFonts({
		"SF Pro Display": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
		"ethnocentric rg": require("./assets/fonts/ethnocentric rg.otf"),
		"SF Compact": require("./assets/fonts/SF-Compact.ttf"),
		"InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
		"Inter-SemiBold": require("./assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
	  });
	  const [selectedperson, setSelectedperson] = React.useState();
  	return (
    		<SafeAreaView style={styles.consultationFixed}>
      			<View style={styles.consultationFixedChild} />
      			
      			

      			<Text style={[styles.text, styles.textPosition]}>􀎟</Text>
      			<Text style={[styles.text1, styles.textTypo3]}>􀉬</Text>
      			<Text style={[styles.text2, styles.textTypo3]}>􀝞</Text>
      			<Text style={[styles.text3, styles.textTypo3]}>􀣌</Text>
      			<Text style={[styles.text4, styles.textTypo3]}>􀌥</Text>
      			<View style={[styles.appearance7, styles.appearanceLayout]}>
        				<View style={[styles.apperance7, styles.appearanceLayout]} />
        				<Text style={[styles.addFileOptional, styles.requestFlexBox]}>Add file (Optional)</Text>
        				<Image style={[styles.simpleIconsgoogledrive, styles.sendFilledIconLayout]} resizeMode="cover" source={require('./assets/simple-icons_googledrive.png')} />
      			</View>
      			<View style={[styles.appearance8, styles.appearanceLayout]}>
        				<View style={[styles.apperance7, styles.appearanceLayout]} />
        				<Picker style={styles.mrNgGh} selectedValue={selectedperson} onValueChange={(itemValue, itemIndex) => setSelectedperson(itemValue)} >
							<Picker.Item label="Mr Ng Gh" value="Mr Ng Gh" />

						</Picker>
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
    		</SafeAreaView>);
};


const styles = StyleSheet.create({
  appearanceWrapperLayout: {
    height: scale(35, 'height'),
    width: scale(67)
  },
  apperancePosition: {
    backgroundColor: "#222426",
    left: scale(0),
    top: scale(0, 'height'),
    borderRadius: scale(20)
  },
  appearancePosition1: {
    left: scale(205),
    height: scale(35, 'height'),
    width: scale(67),
    position: "absolute"
  },
  groupViewPosition: {
    left: scale(288),
    height: scale(35, 'height'),
    width: scale(67),
    position: "absolute"
  },
  appearancePosition: {
    left: scale(39),
    position: "absolute"
  },
  textPosition: {
    height: scale(48, 'height'),
    width: scale(57),
    left: scale(177),
    fontSize: 40,
    top: scale(792, 'height'),
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
    height: scale(60, 'height'),
    position: "absolute"
  },
  requestFlexBox: {
    height: scale(49, 'height'),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "300",
    letterSpacing: scale(0.1),
    fontSize: 24,
    top: scale(5, 'height'),
    lineHeight: scale(41, 'height')
  },
  sendFilledIconLayout: {
    height: scale(24, 'height'),
    width: scale(24),
    position: "absolute",
    overflow: "hidden"
  },
  apperance9Layout: {
    height: scale(138, 'height'),
    width: scale(356),
    position: "absolute"
  },
  apperance10Layout: {
    height: scale(111, 'height'),
    width: scale(356),
    position: "absolute"
  },
  text5Typo: {
    fontFamily: "SF Compact",
    position: "absolute"
  },
  textTypo2: {
    height: scale(26, 'height'),
    width: scale(45),
    fontSize: 16,
    color: "#fff",
    fontFamily: "InriaSans-Bold",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute"
  },
  textTypo1: {
    left: scale(97),
    height: scale(26, 'height'),
    width: scale(45),
    fontSize: 16,
    color: "#fff",
    fontFamily: "InriaSans-Bold",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute"
  },
  textTypo: {
    left: scale(180),
    height: scale(26, 'height'),
    width: scale(45),
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
    top: scale(356, 'height'),
    backgroundColor: "#2b2e31",
    height: scale(130, 'height'),
    width: scale(356),
    borderRadius: scale(20),
    left: scale(19),
    position: "absolute"
  },
  apperance: {
    height: scale(35, 'height'),
    width: scale(67),
    position: "absolute"
  },
  appearance: {
    left: scale(0),
    top: scale(0, 'height'),
    height: scale(35, 'height'),
    width: scale(67),
    position: "absolute"
  },
  appearanceWrapper: {
    left: scale(122),
    width: scale(67),
    position: "absolute",
    top: scale(439, 'height')
  },
  appearanceContainer: {
    top: scale(439, 'height')
  },
  appearanceFrame: {
    top: scale(439, 'height')
  },
  groupView: {
    top: scale(395, 'height')
  },
  appearanceWrapper1: {
    top: scale(395, 'height')
  },
  appearanceWrapper2: {
    top: scale(395, 'height'),
    left: scale(122),
    width: scale(67),
    position: "absolute"
  },
  appearanceWrapper3: {
    height: scale(35, 'height'),
    width: scale(67),
    top: scale(439, 'height')
  },
  consultation: {
    fontSize: 48,
    letterSpacing: scale(0.2),
    textAlign: "left",
    fontFamily: "SF Pro Display",
    fontWeight: "700",
    lineHeight: scale(41, 'height'),
    color: "#387cc5",
    left: scale(0),
    top: scale(0, 'height'),
    position: "absolute"
  },
  consultationWrapper: {
    top: scale(57, 'height'),
    left: scale(22),
    width: scale(283),
    height: scale(41, 'height'),
    position: "absolute"
  },
  text: {
    display: "none"
  },
  text1: {
    color: "#d13036",
    left: scale(16),
    top: scale(792, 'height'),
    fontSize: 40
  },
  text2: {
    left: scale(257),
    top: scale(792, 'height'),
    fontSize: 40,
    color: "#387cc5"
  },
  text3: {
    left: scale(330),
    top: scale(792, 'height'),
    fontSize: 40,
    color: "#387cc5"
  },
  text4: {
    left: scale(102),
    top: scale(792, 'height'),
    fontSize: scale(40),
    color: "#387cc5"
  },
  apperance7: {
    backgroundColor: "#222426",
    left: scale(0),
    top: scale(0, 'height'),
    borderRadius: scale(20),
    width: scale(356)
  },
  addFileOptional: {
    left: scale(104),
    fontFamily: "InriaSans-Light",
    width: scale(188),
    color: "#387cc5",
    position: "absolute"
  },
  simpleIconsgoogledrive: {
    bottom: scale(18, 'height'),
    left: scale(67)
  },
  appearance7: {
    top: scale(644, 'height'),
    left: scale(18),
    width: scale(356)
  },
  mrNgGh: {
    left: scale(20),
    width: scale(348),
    fontFamily: "InriaSans-Bold",
    height: scale(49, 'height'),
    alignItems: "center",
    display: "flex",
    letterSpacing: scale(0.1),
    fontSize: 24,
    top: scale(5, 'height'),
    textAlign: "left",
    color: "#387cc5",
    fontWeight: "700",
    lineHeight: scale(41, 'height'),
    position: "absolute"
  },
  appearance8: {
    top: scale(146, 'height'),
    width: scale(368),
    left: scale(19)
  },
  apperance9: {
    backgroundColor: "#222426",
    left: scale(0),
    top: scale(0, 'height'),
    borderRadius: scale(20)
  },
  insert1Month: {
    top: scale(11, 'height'),
    left: scale(4),
    fontSize: 36,
    fontStyle: "italic",
    fontFamily: "InriaSans-Italic",
    height: scale(113, 'height'),
    opacity: 0.3,
    color: "#fff",
    width: scale(348),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: scale(0.1),
    lineHeight: scale(41, 'height'),
    position: "absolute"
  },
  appearance9: {
    top: scale(247, 'height'),
    left: scale(19)
  },
  apperance10: {
    backgroundColor: "#222426",
    left: scale(0),
    top: scale(0, 'height'),
    borderRadius: scale(20)
  },
  appearance10: {
    top: scale(527, 'height'),
    left: scale(19)
  },
  text5: {
    top: scale(610, 'height'),
    left: scale(315),
    width: scale(47),
    fontSize: 16,
    fontFamily: "SF Compact",
    color: "#fff",
    height: scale(24, 'height'),
    textAlign: "left",
    fontWeight: "700"
  },
  text6: {
    top: scale(50, 'height'),
    left: scale(13)
  },
  text7: {
    left: scale(14),
    top: scale(7, 'height')
  },
  text8: {
    top: scale(7, 'height')
  },
  text9: {
    top: scale(51, 'height')
  },
  text10: {
    top: scale(7, 'height')
  },
  	text11: {
    		top: scale(51, 'height')
  	},
  	text12: {
    		left: scale(262),
    		top: scale(7, 'height')
  	},
  	text13: {
    		left: scale(263),
    		top: scale(51, 'height')
  	},
  	appearanceParent: {
    		width: scale(308),
    		height: scale(77, 'height'),
    		top: scale(395, 'height')
  	},
  	text15: {
    		top: scale(158, 'height'),
    		left: scale(311),
    		color: "#d13036"
  	},
  	commentsattachments: {
    		top: scale(494, 'height'),
    		left: scale(16)
  	},
  	dateAndTime: {
    		top: scale(214, 'height'),
    		left: scale(19)
  	},
  	consultant: {
    		top: scale(113, 'height'),
    		left: scale(19)
  	},
  	request: {
    		left: scale(151),
    		width: scale(90),
    		height: scale(49, 'height'),
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontWeight: "300",
    		letterSpacing: 0.1,
    		fontSize: 24,
    		top: scale(5, 'height'),
    		lineHeight: scale(41, 'height'),
    		color: "#d13036"
  	},
  	appearance12: {
    		top: scale(710, 'height'),
    		width: scale(356),
    		left: scale(19)
  	},
  	sendFilledIcon: {
    		top: scale(728, 'height'),
    		left: scale(133)
  	},
  	consultationFixed: {
    		backgroundColor: "#393e43",
    		flex: 1,
    		width: "100%",
    		height: scale(852),
    		overflow: "hidden"
  	}
});

export default ConsultationFixed;
