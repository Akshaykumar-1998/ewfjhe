import axios from 'axios';
import React, { useState } from 'react';
import SendSMS from 'react-native-sms';
import { Alert } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  text,

} from 'react-native-communications';
const  Login=({navigation})=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const  base_url =  'https://dairyapi.bookmysoft.com/';
  const handleLogin = () => {
    navigation.navigate("Dashboard")
  
};

// axios.post( base_url + "sabhasads/sabhasad", {dairyId :"1", udfId : "1"}, config).then(
//   response => {
//     console.log("hi");
//   }
// )

  return (
    <View style={styles.container}>
     <Image source={require('./assets/milk.png' )}  style={{width: 150, height: 150,marginVertical:50}}  />
      <Text style={{marginRight:198,fontSize:15,marginBottom:10}}>Username</Text>
      <TextInput style={styles.input}
      
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        autoCapitalize="none"
      />

<Text style={{marginRight:198,fontSize:15,marginBottom:10}}>Password</Text>
      <TextInput style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
     
     <TouchableOpacity style={styles.button2} >
        <Text style={styles.buttonText} onPress={handleLogin}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:  'white',
  },
  input: {
    height: 60,
    borderRadius: 5,
    paddingLeft: 100,
    paddingRight: 120,
    backgroundColor:"#DCDCDC",
    marginBottom:25
  },
  button2: {
    backgroundColor: '#ff6500',
    padding: 20,
    paddingLeft:120,
    paddingRight:120,
    borderRadius: 5,
    marginVertical:30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
})