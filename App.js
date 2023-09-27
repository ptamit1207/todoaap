/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState}from 'react';


import Icon from 'react-native-vector-icons/FontAwesome';



import {
  
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  myNotesArray,
  renderItemList,
  onSubmitPress,
  onChangeText,
  myNotes,
  
  
  
  
} from 'react-native';


function App() {
const todoApp = () =>{

  const [myNotes,setMyNotes]= useState("")
  const [myNotesArray,setMyNotesArray]= useState([])


  const onSubmitPress = () => {
  var myNotesObject  = {
          id :new Date(),
          title : myNotes,
          details : "demo",

  }

  setMyNotesArray([...myNotesArray,myNotesObject])
}

   const renderItemList = () => {

    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={{ flex: 1, borderColor: 'green', borderWidth: 3, paddingRight: 30 ,borderRadius:5,paddingHorizontal:16,
        paddingVertical:20,
        marginHorizontal:10,
        marginTop:40,
        backgroundColor:"#d1d1d1"}}
        
      />
    </View>
   }

}
  
  
  return (
     <SafeAreaView>
  <View >
     <View style={styles.addtask} >
      <View>
      <Text style={styles.todo}>To Do App</Text>
      
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        
      <TextInput
       
       style={styles.taskbox}
       onChangeText={value=>{
        setMyNotes=(value)
      }}
      value={myNotes}
       keyboardType='numaric'
       placeholder='My tasks'
        
      />
    </View>
    </View>
    </View>
  <TouchableOpacity
  style={styles.submit}
  onSubmitPress={()=>onSubmitPress()} >
  <Text>SUBMIT</Text>
  </TouchableOpacity>

  <FlatList
  data={myNotesArray}
  renderItem={renderItemList}
  keyExtractor={item=>item.id}
  />
  </SafeAreaView>
  );

   
}
const onsubmitAddToList = () =>{
  var myNotesData = {
    id: new Date(),
    title:myNotes,
    detail:'this is amit',
  }
  setMyNotesArray([...myNotesArray,myNotesData])
 }



const styles = StyleSheet.create({
  container: {
    
    
    borderWidth:5,
    borderColor:"green",
    borderRadius:6,
    paddingVertical:20,
    paddingHorizontal:16,
    marginHorizontal:10,
    marginTop:40,
    backgroundColor:"#ffd700"


  },
  submit:{
    height:50,
    width:200,
    backgroundColor:'blue',
    marginLeft:100,
    marginVertical:20,
    position:'relative',
    alignItems:'center',
    paddingTop:13,
    borderRadius:5,
    color:'pink',
    
    
  },
  taskbox:{
    borderWidth:2,
    height:60,
    width:370,
    borderRadius:7,
    padding:10,
  },
  onsubmit:{
  color:'pink',
  },

  
  addtask: {
    
    marginHorizontal:20,
  },
  todo: {
    textAlignVertical: "center",
    textAlign: "center",
    marginBottom:30,
    marginTop:20,
    fontSize:20,
    fontWeight:'bold',
    backgroundColor:'lightgreen',
    color:"black",
    borderWidth:3,
    padding:20,
    borderRadius:20,

  },
 
  iconedit:{

  }
  
 

})
export default App;



