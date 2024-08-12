import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
  TextInput,
  Alert,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import { Picker } from "@react-native-picker/picker";
import { send, EmailJSResponseStatus } from '@emailjs/react-native';
import { UserContext } from "./usercontextslave";


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const SCALE_WIDTH = SCREEN_WIDTH / 390; // iPhone 14 width
const SCALE_HEIGHT = SCREEN_HEIGHT / 944; // iPhone 14 height

const scale = (size, factor = "width") => {
  return factor === "height" ? size * SCALE_HEIGHT : size * SCALE_WIDTH;
};


export const ConsultationFixed = () => {
  const {user, setUser} = React.useContext(UserContext);
  const onSubmit = async () => {
    try {
      Alert.alert('Please Wait', '' );
      await send(
        'service_team5X',
        'template_y6ko58r',
        {
         stu_name: Platform.OS === 'web' ? user.email : user.user.email,
        tch_name: "teamx.sst@gmail.com",
        date : "",
        time: "",
        Comments : {comment},
        },
        {
          publicKey: 'oXtbVXokN13AvNZfl',
        },
      );
      console.log(Platform.OS === 'web' ? user.email : user.user.email);
  
      console.log('SUCCESS!');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EmailJS Request Failed...', err);
      }
  
      console.log('ERROR', err);
    }
  };
  const [textAreaCount, setTextAreaCount] = React.useState(0);

  

  const [fontsLoaded] = useFonts({
    "SF Pro Display": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "ethnocentric rg": require("./assets/fonts/ethnocentric rg.otf"),
    "SF Compact": require("./assets/fonts/SF-Compact.ttf"),
    "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
  });
  const [selectedperson, setSelectedperson] = React.useState();
  const [comment, setComment] = React.useState();
  return (
    <SafeAreaView style={styles.consultationFixed}>
      <View style={{ top: scale(-50, "height") }}>
        <View style={styles.consultationFixedChild} />

        <View style={[styles.appearance7, styles.appearanceLayout]}>
          <View style={[styles.apperance7, styles.appearanceLayout]} />
          <Text style={[styles.addFileOptional, styles.requestFlexBox]}>
            Add file (Optional) 
          </Text>
          <Image
            style={[styles.simpleIconsgoogledrive, styles.sendFilledIconLayout]}
            resizeMode="contain"
            source={require("./assets/simple-icons_googledrive.png")}
          />
        </View>
        <View style={[styles.appearance8, styles.appearanceLayout]}>
          <View style={[styles.apperance7, styles.appearanceLayout]} />
          <Picker
            style={styles.mrNgGh}
            selectedValue={selectedperson}
            onValueChange={(itemValue, itemIndex) =>

              setSelectedperson(itemValue)
            }
          >
            <Picker.Item label="Ng Guohui" value="ng_guohui@sst.edu.sg" />
            <Picker.Item label="Allan Low" value="low_zu_you_allan@sst.edu.sg" />
            <Picker.Item label="Ong Jie Ying" value="ong_jie_ying@sst.edu.sg" />

            <Picker.Item label="Tan Hoe Teck" value="tan_hoe_teck@sst.edu.sg" />
            <Picker.Item label="Lim-Leong Woon Foong" value="leong_woon_foong@sst.edu.sg" />
            <Picker.Item label="Tan Soo Woon John" value="john_tan@sst.edu.sg" />
            <Picker.Item label="Lim Ming Yang" value="lim_ming_yang@sst.edu.sg" />
            <Picker.Item label="Ng Yi Ting Karen" value="karen_ng@sst.edu.sg" />
            <Picker.Item label="Lim Chuay Sia" value="lim_chuay_sia@sst.edu.sg" />
            <Picker.Item label="Praveena Sandra Mohan" value="praveena_sandra_mohan@sst.edu.sg" />
            <Picker.Item label="Teo Soo Ling Karen" value="karen_teo@sst.edu.sg" />
            <Picker.Item label="Chung Wing Shun Vincent" value="chung_wing_shun_vincent@sst.edu.sg" />
            <Picker.Item label="Chee Meng Teck" value="chee_meng_teck@sst.edu.sg" />
            <Picker.Item label="Choo Hui En" value="choo_hui_en@sst.edu.sg" />
            <Picker.Item label="Loh Yue Yan Amelia" value="loh_yue_yan_amelia@sst.edu.sg" />
            <Picker.Item label="Merlene Paik Xin Yi" value="merlene_paik_xin_yi@sst.edu.sg" />
            <Picker.Item label="Ng Li-Ping" value="ng_li_ping@sst.edu.sg" />
            <Picker.Item label="Mr Szeto Dee Loon Dillon" value="szeto_dee_loon_dillon@sst.edu.sg" />
            <Picker.Item label="Wong Koi Lin" value="wong_koi_lin@sst.edu.sg" />
            <Picker.Item label="Tan Tong Lun Jason" value="tan_tong_lun_jason@sst.edu.sg" />
            <Picker.Item label="Wan Han Xuan Thomas" value="wan_han_xuan_thomas@sst.edu.sg" />
          </Picker>
        </View>
        <View style={[styles.appearance9, styles.apperance9Layout]}>
          <View style={[styles.apperance9, styles.apperance9Layout]} />
          <Text style={styles.insert1Month}>insert 1 month calendar here</Text>
        </View>
        <View style={[styles.appearance10, styles.apperance10Layout]}>
          <TextInput
            type="text"
            rows={5}
            className="full_height_Width"
            onChange={() => setTextAreaCount(textAreaCount + 1)}
            maxLength= {255}
            style={{
              backgroundColor: "#222426",
              color: "#FFF",
              borderRadius: 20,
              borderColor: "#222426",
              padding: 20,
            }}
          />
        </View>
        <Text style={{}}>
          {textAreaCount}/250
        </Text>
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

        {/* <Text style={[styles.text15, styles.textTypo3]}>􀆈</Text> */}
        <Text style={[styles.commentsattachments, styles.consultantTypo]}>
          Comments/Attachments:
        </Text>
        <Text style={[styles.dateAndTime, styles.consultantTypo]}>
          Date and Time
        </Text>
        <Text style={[styles.consultant, styles.consultantTypo]}>
          Consultant
        </Text>
        <Pressable style={[styles.appearance12, styles.appearanceLayout]} onPress={() => onSubmit() .then(() => Alert.alert('Message Sent!', '', [{ text: 'Acknowledge'}]))}>
          <View style={[styles.apperance7, styles.appearanceLayout]} />
          
          <Text style={[styles.request, styles.text5Typo]}>Request</Text>
          
        </Pressable>
        <Image
          style={[styles.sendFilledIcon, styles.sendFilledIconLayout]}
          resizeMode="contain"
          source={require("./assets/send-filled.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appearanceWrapperLayout: {
    height: scale(35, "height"),
    width: scale(67),
  },
  apperancePosition: {
    backgroundColor: "#222426",
    left: scale(0),
    top: scale(0, "height"),
    borderRadius: scale(20),
  },
  appearancePosition1: {
    left: scale(205),
    height: scale(35, "height"),
    width: scale(67),
    position: "absolute",
  },
  groupViewPosition: {
    left: scale(288),
    height: scale(35, "height"),
    width: scale(67),
    position: "absolute",
  },
  appearancePosition: {
    left: scale(39),
    position: "absolute",
  },
  textPosition: {
    height: scale(48, "height"),
    width: scale(57),
    left: scale(177),
    fontSize: 40,
    top: scale(792, "height"),
    textAlign: "left",
    color: "#387cc5",
    fontFamily: "SF Pro Display",
    position: "absolute",
  },
  textTypo3: {
    fontSize: 40,
    textAlign: "left",
    fontFamily: "SF Pro Display",
    position: "absolute",
  },
  appearanceLayout: {
    height: scale(60, "height"),
    position: "absolute",
  },
  requestFlexBox: {
    height: scale(49, "height"),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "300",
    letterSpacing: scale(0.1),
    fontSize: 24,
    top: scale(5, "height"),
    lineHeight: scale(41, "height"),
  },
  sendFilledIconLayout: {
    height: scale(24, "height"),
    width: scale(24),
    position: "absolute",
    overflow: "hidden",
  },
  apperance9Layout: {
    height: scale(138, "height"),
    width: scale(356),
    position: "absolute",
  },
  apperance10Layout: {
    height: scale(111, "height"),
    width: scale(356),
    position: "absolute",
  },
  text5Typo: {
    fontFamily: "SF Compact",
    position: "absolute",
  },
  textTypo2: {
    height: scale(26, "height"),
    width: scale(45),
    fontSize: 16,
    color: "#fff",
    fontFamily: "InriaSans-Bold",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  textTypo1: {
    left: scale(97),
    height: scale(26, "height"),
    width: scale(45),
    fontSize: 16,
    color: "#fff",
    fontFamily: "InriaSans-Bold",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    left: scale(180),
    height: scale(26, "height"),
    width: scale(45),
    fontSize: 16,
    color: "#fff",
    fontFamily: "InriaSans-Bold",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  consultantTypo: {
    color: "#ebebef",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left",
    position: "absolute",
  },
  consultationFixedChild: {
    top: scale(356, "height"),
    backgroundColor: "#2b2e31",
    height: scale(130, "height"),
    width: scale(356),
    borderRadius: scale(20),
    left: scale(19),
    position: "absolute",
  },
  apperance: {
    height: scale(35, "height"),
    width: scale(67),
    position: "absolute",
  },
  appearance: {
    left: scale(0),
    top: scale(0, "height"),
    height: scale(35, "height"),
    width: scale(67),
    position: "absolute",
  },
  appearanceWrapper: {
    left: scale(122),
    width: scale(67),
    position: "absolute",
    top: scale(439, "height"),
  },
  appearanceContainer: {
    top: scale(439, "height"),
  },
  appearanceFrame: {
    top: scale(439, "height"),
  },
  groupView: {
    top: scale(395, "height"),
  },
  appearanceWrapper1: {
    top: scale(395, "height"),
  },
  appearanceWrapper2: {
    top: scale(395, "height"),
    left: scale(122),
    width: scale(67),
    position: "absolute",
  },
  appearanceWrapper3: {
    height: scale(35, "height"),
    width: scale(67),
    top: scale(439, "height"),
  },
  consultation: {
    fontSize: 48,
    letterSpacing: scale(0.2),
    textAlign: "left",
    fontFamily: "SF Pro Display",
    fontWeight: "700",
    lineHeight: scale(41, "height"),
    color: "#387cc5",
    left: scale(0),
    top: scale(0, "height"),
    position: "absolute",
  },
  consultationWrapper: {
    top: scale(57, "height"),
    left: scale(22),
    width: scale(283),
    height: scale(41, "height"),
    position: "absolute",
  },
  text: {
    display: "none",
  },
  text1: {
    color: "#d13036",
    left: scale(16),
    top: scale(792, "height"),
    fontSize: 40,
  },
  text2: {
    left: scale(257),
    top: scale(792, "height"),
    fontSize: 40,
    color: "#387cc5",
  },
  text3: {
    left: scale(330),
    top: scale(792, "height"),
    fontSize: 40,
    color: "#387cc5",
  },
  text4: {
    left: scale(102),
    top: scale(792, "height"),
    fontSize: scale(40),
    color: "#387cc5",
  },
  apperance7: {
    backgroundColor: "#222426",
    left: scale(0),
    top: scale(0, "height"),
    borderRadius: scale(20),
    width: scale(356),
  },
  addFileOptional: {
    left: scale(104),
    fontFamily: "SF-Pro-Display",
    width: scale(188),
    color: "#387cc5",
    position: "absolute",
  },
  simpleIconsgoogledrive: {
    bottom: scale(18, "height"),
    left: scale(67),
  },
  appearance7: {
    top: scale(644, "height"),
    left: scale(18),
    width: scale(356),
  },
  mrNgGh: {
    left: scale(20),
    width: scale(330),
    fontFamily: "InriaSans-Bold",
    height: scale(49, "height"),
    alignItems: "center",
    display: "flex",
    letterSpacing: scale(0.1),
    fontSize: 24,
    top: scale(5, "height"),
    textAlign: "left",
    color: "#387cc5",
    fontWeight: "700",
    lineHeight: scale(41, "height"),
    position: "absolute",
    backgroundColor: "#222426",
    borderColor: "#222426",
  },
  appearance8: {
    top: scale(146, "height"),
    width: scale(368),
    left: scale(19),
  },
  apperance9: {
    backgroundColor: "#222426",
    left: scale(0),
    top: scale(0, "height"),
    borderRadius: scale(20),
  },
  insert1Month: {
    top: scale(11, "height"),
    left: scale(4),
    fontSize: 36,
    fontStyle: "italic",
    fontFamily: "InriaSans-Italic",
    height: scale(113, "height"),
    opacity: 0.3,
    color: "#fff",
    width: scale(348),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: scale(0.1),
    lineHeight: scale(41, "height"),
    position: "absolute",
  },
  appearance9: {
    top: scale(247, "height"),
    left: scale(19),
  },
  apperance10: {
    backgroundColor: "#222426",
    left: scale(0),
    top: scale(0, "height"),
    borderRadius: scale(20),
  },
  appearance10: {
    top: scale(527, "height"),
    left: scale(19),
  },
  text5: {
    top: scale(610, "height"),
    left: scale(315),
    width: scale(47),
    fontSize: 16,
    fontFamily: "SF Compact",
    color: "#fff",
    height: scale(24, "height"),
    textAlign: "left",
    fontWeight: "700",
  },
  text6: {
    top: scale(50, "height"),
    left: scale(13),
  },
  text7: {
    left: scale(14),
    top: scale(7, "height"),
  },
  text8: {
    top: scale(7, "height"),
  },
  text9: {
    top: scale(51, "height"),
  },
  text10: {
    top: scale(7, "height"),
  },
  text11: {
    top: scale(51, "height"),
  },
  text12: {
    left: scale(262),
    top: scale(7, "height"),
  },
  text13: {
    left: scale(263),
    top: scale(51, "height"),
  },
  appearanceParent: {
    width: scale(308),
    height: scale(77, "height"),
    top: scale(395, "height"),
  },
  text15: {
    top: scale(158, "height"),
    left: scale(311),
    color: "#d13036",
  },
  commentsattachments: {
    top: scale(494, "height"),
    left: scale(16),
  },
  dateAndTime: {
    top: scale(214, "height"),
    left: scale(19),
  },
  consultant: {
    top: scale(113, "height"),
    left: scale(19),
  },
  request: {
    left: scale(151),
    width: scale(90),
    height: scale(49, "height"),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "300",
    letterSpacing: 0.1,
    fontSize: 24,
    top: scale(5, "height"),
    lineHeight: scale(41, "height"),
    color: "#d13036",
  },
  appearance12: {
    top: scale(710, "height"),
    width: scale(356),
    left: scale(19),
  },
  sendFilledIcon: {
    top: scale(728, "height"),
    left: scale(133),
  },
  consultationFixed: {
    backgroundColor: "#393e43",
    flex: 1,
    width: "100%",
    height: scale(952, "height"),
    overflow: "hidden",
  },
});

export default ConsultationFixed;
