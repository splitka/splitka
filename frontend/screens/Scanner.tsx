import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import LogoWithText from '../components/LogoWithText'
import React from 'react';

interface RouterProps {
    navigation: NavigationProp<any, any>;
  }

export default function Update({ navigation }: RouterProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <LogoWithText/>
      </View>
      <View style={styles.scanner}>
        <Text>Сканер</Text>
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
  scanner: {
    flex: 8,
    justifyContent: 'center',
    fontFamily: 'Nunito-Bold'
  },
});