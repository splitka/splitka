import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Splitka from './Splitka';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function MainUser() {
  return (
      <Tab.Navigator
        initialRouteName={"Splitka"}
        screenOptions={({ route }: any) => ({
          headerShown: false,
          tabBarIcon: ({ focused}: any) => {
            if(route.name == "Splitka")
              return <Image source={require('../img/chocolate.png')} style={styles.image}/>
            else if(route.name == "Profile")
              return <Image source={require('../img/profile1.png')} style={styles.image}/>
          },
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 12, fontFamily: 'Nunito', color: '#FFF' },
          tabBarStyle: { padding: 10, height: 65, backgroundColor: '#1C0F2D'}
        })}
        >
        <Tab.Screen name={"Splitka"} component={Splitka}/>
        <Tab.Screen name={"Profile"} component={Profile}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    image: {
      width: 32, 
      height: 30, 
      marginTop:'3%', 
      marginBottom: '4%', 
      tintColor:'#fff',
    },
});
export default MainUser;