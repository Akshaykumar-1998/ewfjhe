
import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
const Collection=({navigation})=>{
    const [rowData, setRowData] = useState([
      { id: 1, col1: 'Mohan Jadhav',   col2: '12.00', expanded: false, data:"FAT:10"},
   { id: 2, col1: 'Mohan Jadhav',   col2: '10.00', expanded: false, data: 'FAT:3.50/ SNF:8.50/LITER:29.50 ' ,},
    { id: 3, col1: 'Mohan Rathod',   col2: '01.00', expanded: false, data: 'FAT:2.20/ SNF:8.50/LITER:29.50 ' ,},
   { id: 4, col1: 'Yogesh',   col2: '50.00', expanded: false, data: 'FAT:3.50/ SNF:8.50/LITER:29.50 ' ,},
    ]);
  
    const handleRowPress = (id) => {
      const updatedRowData = rowData.map((row) => {
        if (row.id === id) {
          return { ...row, expanded: !row.expanded };
        }
        return row;
      });
      setRowData(updatedRowData);
    };
  
    return(
<View>
      <View>
        <View style={styles.screenContainer}>                  
      <Text style={{fontSize:20,marginRight:20}} > Milk Collection</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("CollectionForm")} style={styles.button}>
      <Text style={{color:'white',fontWeight: "bold"}}>Add</Text>
      </TouchableOpacity>
    </View>
   <View>
    <Text style={{margin:1,padding:10,backgroundColor:"#DCDCDC",marginBottom:2,marginRight:10,marginLeft:10}}  > SABHASAD NAME                                {'  ' } WEIGHT </Text>
</View> 
    </View>

    <View style={styles.container}>
      {rowData.map((row) => (
        <View key={row.id}>
          <TouchableOpacity onPress={() => handleRowPress(row.id)}>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text>{row.col1}</Text>
              </View>
              
              <View style={styles.col}>
                <Text style={{marginLeft:79,backgroundColor:"#C0C0C0",borderRadius:7,margin:10,marginLeft:70,paddingLeft:7,marginRight:49}}>{row.col2}</Text>
              </View>
            </View>
          </TouchableOpacity>
          {row.expanded && (
            <View style={styles.expandedData}>
              <Text>{row.data}</Text>
            </View>
          )}
          <View style={styles.rowSeparator} />
        </View>
      ))}
    </View>

</View>
    )
}
export default Collection

const styles = StyleSheet.create({
    screenContainer: {
      flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
    }  ,
button:{
        marginVertical:10,
        backgroundColor:"#ff8c00",
        padding:10,
        margin:80,
        borderRadius:50,
        paddingLeft:30,
        paddingRight:30,
        marginRight:15
    },
 
  container: {
    padding: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginLeft:20
    
  },
  col: {
    flex: 1,
  },
  rowSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginLeft:18,
    marginRight:20
  },

  expandedData: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    padding:50,
    backgroundColor:"#ADD8E6",
     alignItems: 'center',
        paddingBottom: 10,
        justifyContent:'center',
        margin:25
        ,
        
  },









  });
  