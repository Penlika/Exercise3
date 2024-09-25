import { createStackNavigator } from "@react-navigation/stack"
import Contact from "../screens/Contacts"
import Profile from "../screens/Profile"
import colors from "../utils/colors"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Option from "../screens/Option";

const Stack=createStackNavigator()
const HomeStackNavigator=({navigation})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={Contact}
                options={{
                    headerStyle:{
                        backgroundColor:colors.blue
                    },
                    headerRight:()=>(
                        <Ionicons
                        name="settings"
                        size={24}
                        color="gray"
                        style={{ marginRight: 10 }}
                        onPress={() => navigation.navigate("Option")}
                        />
                    )
                }}
            />
            <Stack.Screen name="Option" component={Option}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    )
}
export default HomeStackNavigator