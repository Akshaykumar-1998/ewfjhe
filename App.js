import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import React, { useState } from 'react';
import { Image,View,TouchableOpacity } from 'react-native';
import Collection from './Collection';
import AddSabhasad from './AddSabhasad';
import Sabhasad from './Sabhasad'
import Dashboard from './Dashboard';
import CollectionForm from './CollectionForm'

const Drawer = createDrawerNavigator();

function App(){
  const [cowtoggle, setCowToggle] = useState(false);
  const [suntoggle, setSuntoggle]=useState(false)

  const handlecowToggle = () => {
    setCowToggle(!cowtoggle);
  }

  const handlesunToggle = () => {
    setSuntoggle(!suntoggle);
  }

  
  return (
    <NavigationContainer>
  <Drawer.Navigator   initialRouteName='Flashscreen' screenOptions={{
    drawerActiveTintColor:"red",
    drawerInactiveTintColor:"orange" 
  }}>



<Drawer.Screen    name='Login' component={Login}   options={{
            title: 'Login', 
            headerTitleStyle: {
              color: '#fff',
            },
          
  
            headerStyle: {
              backgroundColor: '#ff8c00',
            },
          }}/>



    <Drawer.Screen    name='CollectionForm' component={CollectionForm}   options={{
            title: 'CollectionForm', 
            headerTitleStyle: {
              color: '#fff',
            },
            headerRight: () => (
              <View  style={{ flexDirection: "row",}}>
                <TouchableOpacity onPress={handlecowToggle}>
        <Image source={cowtoggle ? require('./assets/img11.png') : require('./assets/Buffalo.png')} style={{width: 40, height: 40,padding:10,borderRadius:60,marginRight:7}}  />
      </TouchableOpacity>

      <TouchableOpacity onPress={handlesunToggle}>
        <Image source={suntoggle ? require('./assets/sunrise.png') : require('./assets/sunset.png')} style={{width: 40, height: 40,padding:10,borderRadius:60,marginRight:7}}  />
      </TouchableOpacity>
               </View>
        ),
  
            headerStyle: {
              backgroundColor: '#ff8c00',
            },
          }}/>
    <Drawer.Screen   name='Dashboard' component={Dashboard} options={{
            title: 'Dashboard', 
            headerTitleStyle: {
              color: '#fff',
            },
            headerRight: () => (
              <View  style={{ flexDirection: "row",}}>
             <TouchableOpacity onPress={handlecowToggle}>
        <Image source={cowtoggle ? require('./assets/img11.png') : require('./assets/Buffalo.png')} style={{width: 40, height: 40,padding:10,borderRadius:60,marginRight:7}}  />
      </TouchableOpacity>

      <TouchableOpacity onPress={handlesunToggle}>
        <Image source={suntoggle ? require('./assets/sunrise.png') : require('./assets/sunset.png')} style={{width: 40, height: 40,padding:10,borderRadius:60,marginRight:7}}  />
      </TouchableOpacity>


               </View>
        ),
        
  
            headerStyle: {
              backgroundColor: '#ff8c00',
            },
          }}/>
    <Drawer.Screen name='Collection' component={Collection} options={{
            title: 'Collection', 
            headerTitleStyle: {
              color: '#fff',
            },
            headerRight: () => (
              <View  style={{ flexDirection: "row",}}>
             <TouchableOpacity onPress={handlecowToggle}>
        <Image source={cowtoggle ? require('./assets/img11.png') : require('./assets/Buffalo.png')} style={{width: 40, height: 40,padding:10,borderRadius:60,marginRight:7}}  />
      </TouchableOpacity>

      <TouchableOpacity onPress={handlesunToggle}>
        <Image source={suntoggle ? require('./assets/sunrise.png') : require('./assets/sunset.png')} style={{width: 40, height: 40,padding:10,borderRadius:60,marginRight:7}}  />
      </TouchableOpacity>


               </View>
        ),
        
            headerStyle: {
              backgroundColor: '#ff8c00',
            },
          }}/>
    <Drawer.Screen name='AddSabhasad' component={AddSabhasad}options={{  title: 'Add Sabhasad', headerStyle: {
              backgroundColor: '#ff8c00', borderRadius:1
            }, }}  />
      <Drawer.Screen name="Sabhasad" component={Sabhasad} />
      
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
