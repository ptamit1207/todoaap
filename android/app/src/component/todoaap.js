/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState}from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import App from './App.tsx';

import {
  
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  
  
} from 'react-native';


function App() {

  const users =[
    {
      id:1,
      name:"Amit",
    },
    {
      id:1,
      name:"Amit",
    }
  ]
  
  return (


    
    <SafeAreaView>
      <View>
  <FlatList
    data = {users}
    renderItem={({item})=><Text style={{fontSize:20,borderWidth:5,padding:5,backgroundColor:"yellow"}}>{item.id}</Text>}
    
  />
</View>



    <View >
     <View style={styles.addtask} >
      <View>
      <Text style={styles.todo}>To Do App</Text>
      
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        
      <TextInput
        style={{ flex: 1, borderColor: 'green', borderWidth: 5, paddingRight: 30 ,borderRadius:5,paddingHorizontal:16}}
        placeholder="Enter text"
        
      />
      
      
      <Icon name="tasks" size={30} color="green" style={{ position: 'absolute',right:30}} />
    </View>
      
      

      
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={{ flex: 1, borderColor: 'green', borderWidth: 3, paddingRight: 30 ,borderRadius:5,paddingHorizontal:16,
        paddingVertical:20,
        marginHorizontal:10,
        marginTop:40,
        backgroundColor:"#d1d1d1"}}
        placeholder="Write a Note"
      />
      <Icon name="edit" size={30} color="blue" style={{ position: 'absolute', right: 20,paddingTop:35}} />
      <Icon name="trash" size={30} color="red" style={{ position: 'absolute', right:80, paddingTop:30  }} />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={{ flex: 1, borderColor: 'green', borderWidth: 3, paddingRight: 30 ,borderRadius:5,paddingHorizontal:16,
        paddingVertical:20,
        marginHorizontal:10,
        marginTop:40,
        backgroundColor:"#d1d1d1"}}
        placeholder="Write a Note"
      />
      <Icon name="edit" size={30} color="blue" style={{ position: 'absolute', right: 20,paddingTop:35}} />
      <Icon name="trash" size={30} color="red" style={{ position: 'absolute', right:80, paddingTop:30  }} />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={{ flex: 1, borderColor: 'green', borderWidth: 3, paddingRight: 30 ,borderRadius:5,paddingHorizontal:16,
        paddingVertical:20,
        marginHorizontal:10,
        marginTop:40,
        backgroundColor:"#d1d1d1"}}
        placeholder="Write a Note"
      />
      <Icon name="edit" size={30} color="blue" style={{ position: 'absolute', right: 20,paddingTop:35}} />
      <Icon name="trash" size={30} color="red" style={{ position: 'absolute', right:80, paddingTop:30  }} />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={{ flex: 1, borderColor: 'green', borderWidth: 3, paddingRight: 30 ,borderRadius:5,paddingHorizontal:16,
        paddingVertical:20,
        marginHorizontal:10,
        marginTop:40,
        backgroundColor:"#d1d1d1"}}
        placeholder="Write a Note"
      />
      <Icon name="edit" size={30} color="blue" style={{ position: 'absolute', right: 20,paddingTop:35}} />
      <Icon name="trash" size={30} color="red" style={{ position: 'absolute', right:80, paddingTop:30  }} />
    </View>
      </View>

      
      
      
   </SafeAreaView>
  );
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



