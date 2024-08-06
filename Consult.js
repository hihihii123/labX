import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import ConsultationFixed from "./consultPage";
const Stack = createNativeStackNavigator();
export default function Consult() {
    return (
        <>
            <Stack.Navigator initialRouteName="consult" >
                <Stack.Screen 
                    options={{headerStyle: {backgroundColor: '#222426'}, headerTintColor: '#fff'}}
                    component={ConsultationFixed}
                    name="consult"
                    />
            </Stack.Navigator>
        </>
    );
}