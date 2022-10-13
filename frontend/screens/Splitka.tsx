import {  StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Update from './Update';
import Payments from './Payments';
import UserSplitSum from './UserSplitSum';

const Stack = createNativeStackNavigator();

export default function Splitka({route}: any) {
    return (
      <Stack.Navigator 
      initialRouteName={"Update"} 
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFF'
        }
      }}>
        <Stack.Screen name="Update" component={Update}  initialParams={{access_token: route.params.access_token}}/>
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="UserSplitSum" component={UserSplitSum} />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  logo: {
    flex: 2,
    marginTop:'4%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: '4%'
  },
  button: {
    flex: 7,
    justifyContent: 'center',
    fontFamily: 'Nunito-Bold'
  },
});