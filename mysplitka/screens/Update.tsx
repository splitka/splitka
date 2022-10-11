import { SafeAreaView, StyleSheet, View} from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import LogoWithText from '../components/LogoWithText'
import FlowButton from '../components/FlowButton';
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    flex: 7,
    justifyContent: 'center',
    fontFamily: 'Nunito-Bold'
  },
});