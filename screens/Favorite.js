import { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { ActivityIndicator, Avatar, Text } from "react-native-paper"
import { fetchContacts } from "../utils/api"
import ContactThumbNail from "../components/ContactThumbnail"

const keyExtractor=({phone})=>phone
const Favorite=({navigation})=>
{
    const [contacts, setContacts]=useState([])
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(false)
    useEffect(()=>{
        fetchContacts()
        .then(
            contacts=>{
                setContacts(contacts)
                setLoading(false)
                setError(false)
            }
        )
        .catch(
            e=>{
                setLoading(false)
                setError(true)
            }
        )
    }, [])
    const renderFavoriteThumbnail=({item})=>{
        const{avatar}=item
        return(
            <ContactThumbNail
            avatar={avatar}
            onPress={()=>navigation.navigation("Profile",{contacts:item})}
            />
        )
    }
    const favorites=contacts.filter(contacts=>contacts.favorite)
    return(
        <View style={myStyle.container}>
     
            {loading && <ActivityIndicator size="large"/>}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={favorites}
                    keyExtractor={keyExtractor}
                    numColumns={3}
                    contentContainerStyle={myStyle.list}
                    renderItem={renderFavoriteThumbnail}
                />
            )}
        </View>
    )
}
export default Favorite
const myStyle=StyleSheet.create({
    container:{
        backgroundColor:"white",
        justifyContent:"center",
        flex:1
    },
    list:{
        alignItems:"center"
    }
})