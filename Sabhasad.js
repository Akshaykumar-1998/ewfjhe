import React from 'react';
import { View,  Button, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Sabhasad=()=> {
// const handleGetData = async () => {
// try {
//     const value = await AsyncStorage.getItem("token");
//     if (value !== null) {
//     console.log("token:"+value);
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   };

  return (
    <View>
   {/* <Text>My data is: {myData}</Text> */}
      <Text> Sabhasad</Text>
{/* {AsyncStorage.getItem("token")} */}
    </View>
  );
};

export default Sabhasad