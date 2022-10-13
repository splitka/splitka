import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, Image, GestureResponderEvent} from 'react-native';
import LogoWithText from '../components/LogoWithText'
import { Dimensions } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import * as React from 'react';
import FlowButton from '../components/FlowButton';

interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: any;
}



export default function ShowPay({ navigation, route }: RouterProps) {
  const user = {
    name: route.params.name ?? '0',
    product: route.params.product ?? 'Кофейня "Шоколадница',
    totalSum: route.params.totalSum ?? '0',
    splitSum: route.params.splitSum ?? '0'
  }

  const dimensions = Dimensions.get('window');
  const imageHeight = dimensions.height * 0.15

  const CenterImageAndText = () => {
    return(
      <View style={{flex: 5, alignItems: 'center'}}>
        <Image source={require('../img/art.png')} 
                    style={{height: imageHeight, aspectRatio: 1, borderRadius: 100}} 
        />
        <Text style={[styles.centerText, {fontSize:48}]}>{user.splitSum} ₽</Text>
        <View>
          <Text style={styles.centerText}>По транзакции:</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:'4%'}}>
            <Image source={require('../img/imagepayments/Coffee.png')} style={styles.image}/>
            <Text style={styles.title}>{user.product}</Text>
            <Text style={[styles.title, {flex: 1, fontFamily:'Nunito-Bold', textAlign:'right'}]}>{user.totalSum} ₽</Text>
          </View>
        </View>
      </View>
    )
  }

  const BottomElements = () => {
    return (
      <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../img/logoSBP.jpg')} style={{width:40, height:40}} />
          <Text style={[styles.title, {fontSize:13, textAlign:'center'}]}>Перевод через систему быстрых платежей</Text>
        </View>
        <FlowButton title={'Продолжить'} onPress={()=>{}}/>
        <FlowButton title={'Оплатить через VTB OpenID'} onPress={()=>{}}/>
      </View>
    )
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <LogoWithText/>
        </View>
        <View style={{flex: 7, flexDirection: 'column'}}>
          <Text style={[styles.centerText, {flex: 1, fontSize: 20}]}>{user.name} запросил у вас перевод</Text>
          <CenterImageAndText />
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
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#0A173D'
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
  },
  image: {
    flex: 1.7,
    height: 40,
    maxWidth:40,
    justifyContent: 'center',
    marginRight: '2%',
    borderRadius: 20,
    backgroundColor:'#000'
  },
  title: {
    flex: 3,
    justifyContent: 'center',
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#000',
  },
});
