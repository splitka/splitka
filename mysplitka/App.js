import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import ShowPay from './screens/ShowPay.tsx'

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    'Nunito': require('./assets/fonts/Nunito.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

  if (!fontsLoaded) {
      return <Text>Loading</Text>
  }     
  return (
    // <SplitkaLogin />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShowPay" 
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFF'
        }
      }}>
        <Stack.Screen name="ShowPay" component={ShowPay} />
      </Stack.Navigator>
     </NavigationContainer>
  );
  }

export default App;