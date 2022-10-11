import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplitkaLogin from './screens/SplitkaLogin'
import VTBLogin from './screens/VTBLogin'
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import MainUser from './screens/MainUser';

const Stack = createNativeStackNavigator();
const IsLogin = true;
function App() {
  let [fontsLoaded] = useFonts({
    'Nunito': require('./assets/fonts/Nunito.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

  if (!fontsLoaded) {
      return <Text>Loading</Text>
  }
  else {
    if (IsLogin){
      return (
        <NavigationContainer>
          <MainUser />
        </NavigationContainer>
      )
    }
    else {
      return (
        // <SplitkaLogin />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplitkaLogin" 
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#FFF'
            }
          }}>
            <Stack.Screen name="SplitkaLogin" component={SplitkaLogin} />
            <Stack.Screen name="VTBLogin" component={VTBLogin} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }  
  }

export default App;