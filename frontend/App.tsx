import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';


export default function App() {

  return (
      <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      {/* <View> */}
      <View>
        <Image source={require('./img/chocolate.png')} 
          style={styles.logo}
        />
        <Text>Splitka</Text>
      </View>
      
      {/* </View> */}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: { 
    width: 40,
    height: 40,
    marginLeft: 24,
    marginTop: 57,
  }
});
