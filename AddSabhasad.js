import {React,useState} from "react";
import {Picker} from '@react-native-picker/picker';
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity} from "react-native"

const AddSabhasad=()=>{
    const[sabhasadnumber,setSabhasadnumber]=useState("");
    const[sabhasadname,setSabhasadname]=useState("");
    const[sabhasadsurname,setSabhasadsurname]=useState("");
    const[mobilenumber,setMobilenumber]=useState("");
    const[phonenumber,setPhonenumber]=useState("");
    const[whatsappnumber,setWhatsappnumber]=useState("");
    const[fulladdress,setFulladdress]=useState("");
    const[bankname,setBankname]=useState("");
    const[accountnumber,setAccountnumber]=useState("");
    const[ifsccode,setIfsccode]=useState("");
    const [selectedValue, setSelectedValue] = useState('Saving');
    const[upiid,setUpiid]=useState("");
    return(
       
        <View style={{margin:10,borderRadius:111,}}>
          <ScrollView>
        <View style={styles.container}>
      
            <Text style={styles.text}> सभासद नंबर </Text>
    <TextInput  style={styles.textinput} placeholder='सभासद नंबर'  keyboardType="number-pad" 
value={sabhasadnumber} onChangeText={setSabhasadnumber}
     /> 


    <View style={styles.namecontainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.namelabel}>सभासदाचे  नाव</Text>
          <TextInput
            style={styles.nameinput}
            placeholder="सभासदाचे  नाव"
            // keyboardType="number-pad"
            onChangeText={setSabhasadname}
            value={sabhasadname}
          
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.namelabel}>सभासदाचे  आडनाव </Text>
          <TextInput
            style={styles.nameinput}
            value={sabhasadsurname}
            onChangeText={setSabhasadsurname}
            required
            placeholder="सभासदाचे  आडनाव "
         
          />
        </View>
      </View>

      <Text style={styles.text}> संपूर्ण पत्ता</Text>
<TextInput style={styles.textinput} placeholder="संपूर्ण पत्ता"
    value={fulladdress} onChangeText={setFulladdress}
/>

      <View style={styles.namecontainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.namelabel}>Mobile Number</Text>
          <TextInput
            style={styles.nameinput}
            placeholder="Enter Mobile Number"
            // keyboardType="number-pad"
            onChangeText={setMobilenumber}
            value={mobilenumber}
          
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.namelabel}>Phone Number </Text>
          <TextInput
            style={styles.nameinput}
            value={phonenumber}
            onChangeText={setPhonenumber}
            required
            placeholder="Enter Phone Number "
         
          />
        </View>
      </View>

<Text style={styles.text}> Whats App Number</Text>
<TextInput style={styles.textinput} placeholder="Enter WhatsApp Number" keyboardType="number-pad"
    value={whatsappnumber} onChangeText={setWhatsappnumber}
/>



<Text style={styles.text}> Bank Name</Text>
<TextInput  style={styles.textinput} placeholder="Enter Bank Name" 
value={bankname} onChangeText={setBankname} />

<View style={styles.namecontainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.namelabel}>Account Number</Text>
          <TextInput
            style={styles.nameinput}
            placeholder="Enter A/C Number"
            // keyboardType="number-pad"
            onChangeText={setAccountnumber}
            value={accountnumber}
          
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.namelabel}>IFCS CODE </Text>
          <TextInput
            style={styles.nameinput}
            value={ifsccode}
            onChangeText={setIfsccode}
            required
            placeholder="Enter IFCS CODE "
         
          />
        </View>
      </View>

      <View style={styles.namecontainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.namelabel}>Account Type</Text>
          <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Saving" value="Saving" />
        <Picker.Item label="Current" value="Current" />
      </Picker>
       
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.namelabel}>UPI ID </Text>
          <TextInput
            style={styles.nameinput}
            value={upiid}
            onChangeText={setUpiid}
            required
            placeholder="Enter UPI ID "
         
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText} >Add New Sabhasad</Text>
        </TouchableOpacity>


        </View>
        </ScrollView>
        </View>

    )
}
export default AddSabhasad;


const styles = StyleSheet.create({
container:{
    
    marginHorizontal: 15,
    
  
  
},

text:{
    marginBottom: 5,
    fontSize: 15,
    marginVertical:15
},

textinput:{
    paddingBottom:12,
    marginVertical:4,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 12,
    backgroundColor: "white",
    borderWidth: 0.5,
     backgroundColor:"#DCDCDC",
},





namecontainer:{
    flexDirection: "row",
    marginRight: 1,
    marginLeft: 1,
    marginVertical: 4,
    marginStart: 2,
    margin:15

},

inputContainer:{
    flex: 1,
    margin:4,
    borderRadius: 10,
    
    
},

namelabel:{

    marginBottom: 5,
    fontSize: 15
},
nameinput:{
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
   
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor:"#DCDCDC",
    // backgroundColor: '#ffffff',

},
button2: {
  backgroundColor: "#ff6500",
  marginleft:10,
  paddingLeft: 72,
  paddingRight:55,
  // padding:10,
  marginRight: 3,
 paddingVertical:10,
//   paddingBottom:15,
  marginVertical:10,
  borderRadius: 10,
  
 
  
},
buttonText: {
  color: "#FFFFFF",
  fontSize: 20,
  fontWeight: "bold",
  margin:5
},

})