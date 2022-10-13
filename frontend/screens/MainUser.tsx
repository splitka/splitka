import {ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';

import Splitka from './Splitka';
import Profile from './Profile';
import Scanner from './Scanner';

const Tab = createBottomTabNavigator();

function MainUser() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState("");

  const getAccessToken = async () => {
    try {
      const response = await fetch('http://splitka-backend.transcendent.app:82/token', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic dGVhbTI6dTBEZkpacjJTSnoyZkZMNWhQT2x5RHRNUjBpZ0RCVW4='
        }
      });
      const json = await response.json();
      setData(json.access_token);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {getAccessToken();}, []);
  return (
    isLoading?(<View style={{justifyContent:'center'}}><ActivityIndicator size={'large'}/></View>):(
      <Tab.Navigator
        initialRouteName={"Splitka"}
        screenOptions={({ route }: any) => ({
          headerShown: false,
          tabBarIcon: ({color}: any) => {
            if(route.name == "QR-код")
              return <Image source={require('../img/qr.png')} style={[styles.image, {tintColor: color}]}/>
            else if(route.name == "Splitka")
              return <Image source={require('../img/chocolate.png')} style={[styles.image, {tintColor: color}]}/>
            else if(route.name == "Профиль")
              return <Image source={require('../img/profile.png')} style={[styles.image, {tintColor: color}]}/>
          },
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 12, fontFamily: 'Nunito'},
          tabBarStyle: { padding: 10, height: 63, backgroundColor: '#1C0F2D'},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ACAEC1',
        })}
        >
        <Tab.Screen name={"QR-код"} component={Scanner}/>
        <Tab.Screen name={"Splitka"} component={Splitka} initialParams={{access_token: data}}/>
        <Tab.Screen name={"Профиль"} component={Profile}/>
      </Tab.Navigator>
    )
  );
}

const styles = StyleSheet.create({
    image: {
      width: 30, 
      height: 28, 
      marginTop:'3%', 
      marginBottom: '4%', 
      tintColor:'#fff',
    },
});
export default MainUser;