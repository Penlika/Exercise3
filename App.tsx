import { useEffect, useState } from "react"
import { fetchContacts } from "./utils/api"
import { NavigationContainer } from "@react-navigation/native"
import { PaperProvider } from "react-native-paper"
import { View } from "react-native"
import Contact from "./screens/Contacts"
import Profile from "./screens/Profile"
import BottomTabNavigator from "./routers/BottomTabNavigator"
import TodoApp from "./screens/TodoApp"

const App =()=>{
  const [contacts, setContacts]=useState([])
  useEffect(()=>{
    fetchContacts()
    .then(data=>{
      setContacts(data)
      console.log(contacts)
    })
  },[])

  return(
    <NavigationContainer>
      <PaperProvider>
        <View style={{flex:1}}>
          {/* <Contact></Contact> */}
          {/* <Profile></Profile> */}
          <BottomTabNavigator></BottomTabNavigator>
          {/* <TodoApp></TodoApp> */}
        </View>
      </PaperProvider>
    </NavigationContainer>
  )
}
export default App