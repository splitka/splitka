import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();
const IsLogin = true;
function App() {
    return (
            <Stack.Navigator initialRouteName="SplitkaLogin" 
            screenOptions={{
                headerShown: false,
                contentStyle: {
                backgroundColor: '#FFF'
                }
            }}>
            </Stack.Navigator>
    );
  }

export default App;