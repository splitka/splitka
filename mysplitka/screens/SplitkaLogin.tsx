import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import LogoWithText from '../components/LogoWithText'
import { Dimensions } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import React from 'react';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
export default function SplitkaLogin({ navigation }: RouterProps) {
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
        <View style={{paddingLeft: "6.5%"}}>
          <Text style={{fontFamily: 'Nunito-Bold', fontSize: 28}}>Войдите через OpenID</Text>
          <Text style={{fontFamily: 'Nunito', paddingBottom: 20, fontSize: 16}}>и начните работу с Splitka</Text>
        </View>
        <View style={{paddingBottom: '5%', alignItems: 'center'}}>
          <TouchableOpacity style={styles.enterVTBButton} onPress={() => navigation.navigate('VTBLogin')} >
              <Text style={styles.enterVTBButtonText}>Вход VTB Open ID</Text>
            </TouchableOpacity>
          </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.enterVKIDButton} onPress={() => alert('did click')} >
              <Text style={styles.enterVKIDText}>Вход VK ID</Text>
            </TouchableOpacity>
        </View>
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
  },
  logo: {
    marginLeft: '5%',
    marginTop: '6%',
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
