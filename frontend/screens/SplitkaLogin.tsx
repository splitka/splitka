import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, Image, } from 'react-native';
import LogoWithText from '../components/LogoWithText'
import {BottomModal} from '../components/BottomModal'
import { Dimensions } from 'react-native';
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { BottomSheet } from 'react-native-btr';
import { useState} from "react";


interface RouterProps {
  route: RouteProp<any, any>,
  navigation: NavigationProp<any, any>,
}

export default function SplitkaLogin({ route, navigation }: RouterProps) {
  const [bottomVisible, setBottomVisible] = useState(false);
  const [typeOfModal, setTypeOfModal] = useState('VK_A');
  const handleModalChange = (val: string) => {
    setTypeOfModal(val);
  }

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setBottomVisible(!bottomVisible);
    if (bottomVisible && typeOfModal == "SUCCESS") { navigation.navigate("MainUser") }
  };

  const dimensions = Dimensions.get('window');
  const imageHeight = dimensions.height * 0.3


  const CenterImageAndText = () => {
    return(
      <View style={{alignItems: 'center', top: '15%'}}>
          <Image source={require('../img/main_menu_people.png')}
                      style={{height: imageHeight, aspectRatio: 1}}  />
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
          <Text style={{fontFamily: 'Nunito', paddingBottom: 100, fontSize: 16}}>и начните работу с Splitka</Text>
        </View>
        <View style={{paddingBottom: '5%', alignItems: 'center'}}>
          <TouchableOpacity style={styles.enterVTBButton} onPress={() => navigation.navigate('VTBLogin')} >
              <Text style={styles.enterVTBButtonText}>Вход VTB Open ID</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }


  return (
      <>
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <LogoWithText/>
        </View>
          
        <CenterImageAndText />
        <View style={{bottom: '-25%'}}>
          <BottomElements />
        </View>
      </SafeAreaView>
      <BottomSheet
          visible={bottomVisible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <BottomModal 
            type={typeOfModal}
            handleModalChange={handleModalChange}
          />
        </BottomSheet>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    alignItems: 'center',
    maxWidth: 700
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
  defaultButton: {
    width: '87%',
    maxWidth: 600,
    aspectRatio: 7,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultButtonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '40%',
    alignItems: 'center',
  }
});
