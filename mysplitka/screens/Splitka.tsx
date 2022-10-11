import {  StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Update from './Update';
import Payments from './Payments';

const Stack = createNativeStackNavigator();

export default function Splitka() {
    return (
      <Stack.Navigator initialRouteName="Update" 
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFF'
        }
      }}>
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Payments" component={Payments} />
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