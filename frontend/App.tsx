import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import LogoWithText from './components/LogoWithText'

export default function App() {

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <LogoWithText/>
        </View>
      {/* <Text>Example</Text> */}
      
      {/* </View> */}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  logo: {
    marginLeft: '5%',
    marginTop: '6%',
  }
});
