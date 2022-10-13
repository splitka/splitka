import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import LogoWithText from '../components/LogoWithText'
import { Dimensions } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import * as React from 'react';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
export default function ShowPay({ navigation }: RouterProps) {
  const dimensions = Dimensions.get('window');
  const imageHeight = dimensions.height * 0.3

  const CenterImageAndText = () => {
    return(
      <View style={{alignItems: 'center', top: '15%'}}>
          <Image source={require('../img/main_menu_people.png')} 
                      style={{height: imageHeight, aspectRatio: 1}} 
          />
        <View style={{maxWidth: '70%'}}>
          <Text style={styles.centerText}>Делить платежи с друзьями стало удобнее! </Text>
        </View>
      </View>
    )
  }

  const BottomElements = () => {
    return (
      <View>
        
      </View>
    )
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <LogoWithText/>
        </View>
        <CenterImageAndText />
        <View style={{bottom: '-30%'}}>
          <BottomElements />
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
  centerText: {
    paddingTop: 10,
    /* Base Text (16, 20) */
    fontFamily: 'Nunito',
    fontSize: 18,
    textAlign: 'center',
    color: '#586179'
  },
  enterVTBButton: {
    backgroundColor: '#1A2F9E',
    width: '87%',
    aspectRatio: 7,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterVTBButtonText: {
    color: '#FFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 20
  },
  enterVKIDButton: {
    backgroundColor: '#EBF1FE',
    width: '87%',
    aspectRatio: 7,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterVKIDText: {
    color: '#5662C5',
    fontFamily: 'Nunito-Bold',
    fontSize: 18
  }
});
