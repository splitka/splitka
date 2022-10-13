import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplitkaLogin from './screens/SplitkaLogin'
import VTBLogin from './screens/VTBLogin'
import MainUser from './screens/MainUser';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

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
      <Stack.Navigator initialRouteName="Payments" 
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFF'
        }
      }}>
        <Stack.Screen name="SplitkaLogin" component={SplitkaLogin} />
        <Stack.Screen name="VTBLogin" component={VTBLogin} />
        <Stack.Screen name="MainUser" component={MainUser} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;
