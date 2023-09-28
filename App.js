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
  
  onChangeText,
  myNotes,
  
  
  
  
} from 'react-native';


function App() {
  // Define state variables
  const [myNotes, setMyNotes] = useState('');
  const [myNotesArray, setMyNotesArray] = useState([]);

  // Function to handle form submission
  const onSubmitPress = () => {
    if (myNotes !== '') {
      // Create a new note object
      const myNotesObject = {
        id: new Date().toString(),
        title: myNotes,
        details: 'demo',
      };

      // Update the notes array
      setMyNotesArray([...myNotesArray, myNotesObject]);

      // Clear the input field
      setMyNotes('');
    } else {
      // Show an alert if the input is empty
      Alert.alert('Error', 'Please enter a task.');
    }
  };

  // Function to render individual items in the FlatList
  const renderItemList = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.addtask}>
        <Text style={styles.todo}>To Do App</Text>
        <TextInput
          clearButtonMode="always"
          style={styles.taskbox}
          onChangeText={(value) => {
            setMyNotes(value);
          }}
          value={myNotes}
          placeholder='My tasks'
        />
      </View>

      <TouchableOpacity style={styles.submit} onPress={onSubmitPress}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>

      <FlatList
        data={myNotesArray}
        renderItem={renderItemList}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: 'green',
    borderRadius: 6,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    marginTop: 10, // Changed this to provide some space between items
    backgroundColor: '#ffd700',
  },
  submit: {
    height: 50,
    width: 200,
    backgroundColor: 'blue',
    marginLeft: 100,
    marginVertical: 20,
    position: 'relative',
    alignItems: 'center',
    paddingTop: 13,
    borderRadius: 5,
  },
  taskbox: {
    borderWidth: 2,
    height: 60,
    width: 370,
    borderRadius: 7,
    padding: 10,
  },
  addtask: {
    marginHorizontal: 20,
  },
  todo: {
    textAlignVertical: 'center',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'lightgreen',
    color: 'black',
    borderWidth: 3,
    padding: 20,
    borderRadius: 20,
  },
});

export default App;



