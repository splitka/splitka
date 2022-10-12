import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplitkaLogin from './screens/SplitkaLogin'
import VTBLogin from './screens/VTBLogin'
import Update from './screens/Update';
import Payments from './screens/Payments';
import UserSplitSum from './screens/UserSplitSum';

const Stack = createNativeStackNavigator();

function App() {
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
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="UserSplitSum" component={UserSplitSum} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;
