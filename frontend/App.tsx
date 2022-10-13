import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplitkaLogin from './screens/SplitkaLogin'
import VTBLogin from './screens/VTBLogin'
import MainUser from './screens/MainUser';
import ShowPay from './screens/ShowPay';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import * as Linking from 'expo-linking';
const Stack = createNativeStackNavigator();

function App() {
  const config = {
    screens: {
      ShowPay: 'payment',
    },
  };

  const linking = {
    prefixes: [process.env.URL],
    config
  };
  
  // const url = Linking.useURL();
  // if (url != null) { 
  //   const { hostname, path, queryParams } = Linking.parse(url);
  //   if (path == 'payment') {
  //     return <ShowPay />

  //   }


  let [fontsLoaded] = useFonts({
    'Nunito': require('./assets/fonts/Nunito.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

  if (!fontsLoaded) {
      return <Text>Loading</Text>
  }
  return (
    // <SplitkaLogin />
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
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
        <Stack.Screen name="ShowPay" component={ShowPay} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;
