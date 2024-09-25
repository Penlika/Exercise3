import { View } from "react-native"
import ContactThumbNail from "../components/ContactThumbnail"
import DetailListItem from "../components/DetailListItem"

const Profile=({route})=>{
    const {avatar, name, phone, email, cell}=route.params.contact
    return(
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:"aqua",justifyContent:"center",alignItems:"center"}}>
                <ContactThumbNail avatar={avatar} name={name} phone={phone}/>
            </View>
            <View style={{flex:1,
            }}>
                <DetailListItem icon={"email"} label={"Email"} value={email}/>
                <DetailListItem icon={"phone"} label={"Work"} value={phone}/>
                <DetailListItem icon={"smartphone"} label={"Personal"} value={cell}/>
            </View>
        </View>
    )
}
export default Profile