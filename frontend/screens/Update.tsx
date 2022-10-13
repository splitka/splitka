import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import LogoWithText from '../components/LogoWithText'
import FlowButton from '../components/FlowButton';
import React from 'react';

interface RouterProps {
    route: any
    navigation: NavigationProp<any, any>;
  }

export default function Update({route, navigation }: RouterProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <LogoWithText/>
      </View>
      {/* <Text>{route.initialParams.access_token}</Text> */}
      <View style={styles.button}>
        <FlowButton title="Обновить" onPress={()=>{navigation.navigate("Payments")}}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginHorizontal: '4%'
  },
  logo: {
    flex: 1.5,
    marginTop:'6%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    flex: 8,
    justifyContent: 'center',
    fontFamily: 'Nunito-Bold'
  },
});