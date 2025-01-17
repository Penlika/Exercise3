import { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { fetchContacts } from "../utils/api"
import { ActivityIndicator, Text } from "react-native-paper"
import ContactListItem from "../components/ContactListItem"

const Contact=({navigation})=>{
    const [contacts, setContacts]=useState([])
    const [loading, setLoading]=useState(true)
    const [error,setError]=useState(false)

    useEffect(()=>{
        fetchContacts()
        .then((data)=>{
            setContacts(data)
            setLoading(false)
            setError(false)
        })
        .catch(()=>{
            // console.log(e)
            setLoading(false)
            setError(true)

        })
    },[])
    const renderItem=({item})=>{
        const {avatar, name, phone}=item
        return(
            <ContactListItem
                avatar={avatar}
                name={name}
                phone={phone}
                onPress={()=>navigation.navigate("Profile",{contact: item})}
            />
        )
    }
    return(
        <View style={myStyle.container}>
            {loading && <ActivityIndicator color="blue" size={30}/>}
            {error && <Text variant="bodyMedium">No Internet</Text>}
            {!loading && !error &&
                <FlatList
                    data={contacts}
                    keyExtractor={item=>item.id}
                    renderItem={renderItem}
                />
            }
        </View>
    )
}
export default Contact
const myStyle=StyleSheet.create({
    container:{
        backgroundColor:"White",
        justifyContent:"center",
        flex:1
    }
})