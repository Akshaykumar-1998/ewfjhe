import { React, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";
import Communications from 'react-native-communications';

const CollectionForm = () => {
  const [udfId, setudfId] = useState("");
  const [farmerName, setfarmerName] = useState("");
  const [milkWeight, setmilkWeight] = useState("");
  const [milkFAT, setmilkFAT] = useState("");
  const [milkDegree, setmilkDegree] = useState("");
  const [milkSNF, setmilkSNF] = useState("");
  const [milkRate, setmilkRate] = useState("");
  const [milkAmount, setmilkAmount] = useState("");
  const [milkWater, setmilkWater] = useState("");
  const [checked, setChecked] = useState("  ");
  
  
  const inputRefLiter = useRef(''); 
  const inputRefFat = useRef(''); 
  const inputRefDegree = useRef(''); 
  const inputRefSnf = useRef('');
  
  const handleGetData = async () => {
    try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
        console.log("token:"+value);
        }
      } catch (error) {
        console.log(error);
      }
      };






//   const dairyId = AsyncStorage.getItem("dairyId");
//   const userId = AsyncStorage.getItem("userId");
//   const base_url = "https://dairyapi.bookmysoft.com/";
//   // const token = AsyncStorage.getItem("token");
//   // const token = `Bearer ` + AsyncStorage.getItem('token');
//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY4MDI0NjczMiwiZXhwIjoxNjgwODUxNTMyfQ.maztwtNAy73YcSpPDoJzmPvnFBtngvm__sejLhaq83I';


//     const getSabhasadName= async ()=>{
    
//       axios({
//         method: 'POST',
//         url:  base_url + 'sabhasads/sabhasad/',
//         data: {
//           "udfId" : "1",
//           "dairyId" : "1"
//         },
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//           Authorization: "Bearer " + token,
//         },
//      }).then(async response=>{
//  if(response.data){ 
//    if(response.data.statuscode==="200"){
//      try {
//        await AsyncStorage.setItem("token", response.data.message.token);
//        await AsyncStorage.setItem("dairyId", response.data.message.dairyId);
//        await AsyncStorage.setItem("userId", response.data.message.id);
    

//      } catch (error) {
//        console.log(error);
//      }
//    }
      
//  }
// })
// .catch(error => {
//  console.log(error);
// });
// };

// axios.post( base_url + "sabhasads/sabhasad", {dairyId :"1", udfId : "1"}, config).then(
//   response => {
//     console.log("hi");
//   }
// )




      // try {
      //    token = await AsyncStorage.getItem("token");        
      // } 
      // catch{
      //   console.error();
      // }
      // console.log(token)
      // axios.post( base_url + "sabhasads/sabhasad", {dairyId :"1", udfId : "1"}, config).then(
      //   response => {
      //     console.log("hi");
      //   }
      // )
      // axios({
      //   method: "POST",       
      //   url: base_url + "/sabhasads/sabhasad",
      //   data:{
      //   "udfId" : "1",
      //   "dairyId" : "1"
      //   },
      //    headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //     Authorization: "Bearer " + token,
      //   },
      
      // }).then(async (response) => {
      //  console.log(response);
      // });
  
    
 

  const handlefarmerName = (value) => {
    const reg = /^[a-zA-Z\s]*$/;
    if (reg.test(value)) {
      setfarmerName(value);
    }
  };

  const handleudfId = (value) => {
    const reg = /^[0-9]*$/;
    if (reg.test(value)) {
      setudfId(value);
      getSabhasadName();
    }
  };

  const handlemilkWeight = (value) => {
    if (value.includes(".")) {
      const [beforeDot, afterDot] = value.split(".");
      if (afterDot && afterDot.length > 1) {
        inputRefFat.current.focus();
      setmilkFAT('');
        value = `${beforeDot}.${afterDot.slice(0, 2)}`;
      }
    }
    setmilkWeight(value);
  };

  const handlemilkFAT = (value) => {
    
    if (value.length === 1 && !value.includes(".")) {
      value = value + ".";
    }
    if (value.length == 3) {
      value = value.slice(0, 3);   
      inputRefDegree.current.focus();
      setmilkDegree('');
    }
    setmilkFAT(value);
   
  };

  const handlemilkDegree = (value) => {
    //
    if (value.length === 2 && !value.includes(".")) {
      value = value + ".";
    }
    if (value.includes(".") && value.length > 3) {
      value = value.slice(0, 4);
      inputRefSnf.current.focus();
      setmilkSNF('')
    }
    if (!value.includes(".") && value.length > 3) {
      value = value.slice(0, 3);
    }
    setmilkDegree(value);
    
  };

  const handlemilkSNF = (value) => {
    if (value.length === 1 && !value.includes(".")) {
      value = value + ".";
    }
    if (value.length > 3) {
     
      value = value.slice(0, 2);
     
    }

    
    setmilkSNF(value);
  };

  const handlemilkRate = (value) => {
    const reg = /^[0-9]*$/;
    if (reg.test(value)) {
      setmilkRate(value);
      calculatemilkAmount(value, milkWeight);
    }
  };

  const calculatemilkAmount = (milkRate, milkWeight) => {
    const milkAmount = milkRate * milkWeight;
    setmilkAmount(milkAmount.toString());
  };

  const handleClear = () => {
    setfarmerName("");
    setudfId("");
    setmilkDegree("");
    setmilkFAT("");
    setmilkSNF("");
    setmilkRate("");
    setmilkAmount("");
    setmilkWeight("");
  };

  const handleSubmit = () => {
    // axios({
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //     Authorization: "Bearer " + token,
    //   },
    //   url: base_url + "collections/entry",
    //   data: {
    //     udfId: udfId,
    //     uid: 1,
    //     dairyId: dairyId,
    //     milkShift: 0,
    //     milkType: 0,
    //     farmerName: farmerName,
    //     collectionDate: "2022-11-20",
    //     collectionTime: "10:20:00",
    //     milkWeight: milkWeight,
    //     milkFAT: milkFAT,
    //     milkDegree: milkDegree,
    //     milkSNF: milkSNF,
    //     milkRate: milkRate,
    //     milkAmount: milkAmount,
    //     milkWater: milkWater,
    //     payStatus: 1,
    //     deleteStatus: 1,
    //     createdBy: userId,
    //   },
    // }).then(async (response) => {
    //   console.log(response);
    // });
  };

  return (
    <View style={styles.container}>
      <View style={styles.sabhasad}>
        <Text style={styles.sabhasadlabel}>Sabhasad No. </Text>
        <TextInput
          style={styles.sabhasadinput}
          placeholder="Sabhasad No"
          keyboardType="number-pad"
          onChangeText={handleudfId}
          
          value={udfId}
        />

        <Text style={styles.sabhasadlabel}>Sabhasad Name</Text>
        <TextInput
          style={styles.sabhasadinput}
          placeholder="Sabhasad Name"
          value={farmerName}
          onChangeText={handlefarmerName}
          required
        />
      </View>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Weight / Liter</Text>
          <TextInput
            style={styles.input}
            placeholder="Weight/Liter"
            keyboardType="number-pad"
            onChangeText={handlemilkWeight}
            value={milkWeight}
            ref={inputRefLiter}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}> FAT</Text>
          <TextInput
            style={styles.input}
            value={milkFAT}
            onChangeText={handlemilkFAT}
            required
            placeholder="FAT"
            keyboardType="number-pad"
            maxLength={3}
            ref={inputRefFat}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Degree</Text>
          <TextInput
            style={styles.input}
            value={milkDegree}
            onChangeText={handlemilkDegree}
            placeholder="Degree"
            keyboardType="number-pad"
            maxLength={5}
            ref={inputRefDegree}

          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>SNF</Text>
          <TextInput
            style={styles.input}
            value={milkSNF}
            onChangeText={handlemilkSNF}
            required
            placeholder="SNF"
            maxLength={3}
            keyboardType="number-pad"
            ref={inputRefSnf}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Rate</Text>
          <TextInput
            style={styles.input}
            value={milkRate}
            onChangeText={handlemilkRate}
            required
            placeholder="Rate"
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            value={milkAmount}
            placeholder="Amount"
            keyboardType="number-pad"
          />
        </View>
      </View>

      <View style={styles.wrapper}>
        <CheckBox value={checked} onValueChange={() => setChecked("")} />
        <Text style={styles.text}>Add Multiple Collection</Text>
      </View>

      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText} onPress={handleGetData}>
            Clear
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText} 
  onPress={() => {
    Communications.text('9021467931', 'HI');
    handleSubmit();

  
  }}

          >
          
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
  },

  sabhasad: {
    marginVertical: 35,
    marginTop: 2,
    marginBottom: 5,
    marginHorizontal: 20,
  },

  sabhasadinput: {
    paddingBottom: 12,
    height: 60,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 12,
    backgroundColor: "#DCDCDC",
  },

  sabhasadlabel: {
    marginBottom: 5,
    fontSize: 15,
  },

  row: {
    flexDirection: "row",
    marginBottom: 1,
    marginRight: 11,
    marginLeft: 35,
    marginVertical: 10,
    marginStart: 25,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
    marginLeft: 0,
  },
  label: {
    marginBottom: 5,
    fontSize: 15,
  },

  input: {
    height: 60,
    borderWidth: 0,
    borderRadius: 4,
    paddingLeft: 13,
    paddingRight: 10,
    backgroundColor: "#DCDCDC",
  },

  checkcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 140,
    marginRight: 150,
  },

  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },

  checkboxText: {
    fontWeight: "normal",
  },

  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 55,
  },

  button1: {
    backgroundColor: "#ff0000",
    marginleft: 10,
    paddingLeft: 70,
    paddingRight: 60,
    borderRadius: 3,
    marginRight: 10,
    paddingVertical: 25,
    paddingBottom: 25,
  },

  button2: {
    backgroundColor: "#ff6500",
    marginleft: 10,
    paddingLeft: 72,
    paddingRight: 55,
    borderRadius: 5,
    marginRight: 3,
    paddingVertical: 25,
    paddingBottom: 25,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 30,
    marginLeft: 40,
    color: "#ff6500",
  },
  text: {
    lineHeight: 20,
    marginLeft: 15,
  },
});
export default CollectionForm;