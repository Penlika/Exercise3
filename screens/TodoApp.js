import { FlatList, ScrollView, View } from "react-native"
import { Appbar, Button, TextInput } from "react-native-paper"
import firestore from "@react-native-firebase/firestore"
import { useEffect, useState } from "react"


const cTodos=firestore().collection("Todos")

const TodoApp=()=>{
    const [todos,setTodos]=useState([])
    const [todo, setTodo]=useState([])
    const addNewTodo=()=>{
        cTodos.add({
            title:todo,
            complete: false
        })
        .then(doc=>
            {
                doc.update({id:doc.id})
                console.log("Add new todo!")   
            }
        )
        .catch(e=>console.log(e))
    }
    useEffect(()=>{
        cTodos.onSnapshot((Todos)=>{
            let result=[]
            Todos.forEach((doc)=>{
                result.push(doc.data())
            })
            setTodos(result)
            console.log(todos)
        })
    },[cTodos])
    const updateTodo=()=>{

    }
    const renderItem=({item})=>{
        return(
            <Button icon={(item.complete)?"home":"star"} 
            style={{
                alignItems:"flex-start"
            }}
            labelStyle={{
                color:"black"
            }}
            >{item.title}</Button>
        )
    }
    return(
        <View style={{flex:1}}>
            <Appbar.Header style={{
                backgroundColor:"blue"
            }}>
                <Appbar.Content title={"Todo list"}
                style={{
                    alignItems:"center"
                }}
                color="white"
                
                />

            </Appbar.Header>
            <ScrollView style={{flex:1}}>
                <FlatList
                    data={todos}
                    keyExtractor={item=>item.id}
                    renderItem={renderItem}
                />
            </ScrollView>
            <TextInput
                value={todo}
                placeholder="Input todo"
                onChangeText={setTodo}
            />
            <Button onPress={addNewTodo}>
                Add Todo
            </Button>
        </View>
    )
}
export default TodoApp