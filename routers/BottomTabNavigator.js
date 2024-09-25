import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Contact from "../screens/Contacts"
import Favorite from "../screens/Favorite"
import User from "../screens/User"
import HomeStackNavigator from "./HomeStackNavigator"

const Tab=createMaterialBottomTabNavigator()
const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStackNavigator}
                options={{
                    title:"Home",
                    tabBarIcon:"home"
                }}
            />
            <Tab.Screen name="Favorite" component={Favorite}
                options={{
                    tabBarIcon:"star"
                }}
            />
            <Tab.Screen name="User" component={User}
                options={{
                    title:"Setting",
                    tabBarIcon:"account"
                }}
            />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator