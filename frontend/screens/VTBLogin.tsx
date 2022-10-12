import { SafeAreaView, Pressable, TouchableOpacity, AccessibilityActionEvent,  StyleSheet, TextInput, Text, View, Image, useWindowDimensions } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Dimensions } from 'react-native';
import {BottomModal} from '../components/BottomModal'
import { BottomSheet } from 'react-native-btr';
import { useRef, useState, useCallback, useMemo } from "react";

interface RouterProps {
    navigation: NavigationProp<any, any>
  }

export default function VTBLogin({ navigation }: RouterProps) {
    const [bottomVisible, setBottomVisible] = useState(false);
    const [typeOfModal, setTypeOfModal] = useState('VTB_B');

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setBottomVisible(!bottomVisible);

        setBottomVisible(!bottomVisible);
        if (bottomVisible && typeOfModal == "SUCCESS") { navigation.navigate("Update") }
    };

    const handleModalChange = (val: string) => {
        setTypeOfModal(val);
    }

    let [fontsLoaded] = useFonts({
        'Nunito': require('../assets/fonts/Nunito.ttf'),
        'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf')
      });
    
      
    if (!fontsLoaded) {
        return <Text>Loading</Text>
    }

    const dimensions = Dimensions.get('window');

    return(
        <SafeAreaView>
            <View style={styles.logo}>
                <Image source={require('../img/vtb.png')} 
                    style={{height: 30, maxHeight:30, maxWidth: 2.83 * 30, aspectRatio: 2.83}}
                />
            </View>
            <View style={{top: dimensions.height * 0.18, paddingLeft: 30, paddingRight: 30}}>
                <Text style={{fontSize: 32, fontFamily: 'Nunito-Bold'}}>Вход ВТБ Онлайн</Text>
                <Text style={{fontSize: 16, fontFamily: 'Nunito', paddingTop: 10}}>Введите ваш логин и пароль в ВТБ</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Логин"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry={true}
                />
                <Text style={{fontSize: 16, fontFamily: 'Nunito-Bold', paddingTop: 20, color: '#5662C5'}}>Забыли пароль?</Text>
            </View>
            <View style={{position: 'absolute', bottom: dimensions.height * - 0.48, padding: 30, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={[{backgroundColor: '#1A2F9E', width: '100%', height: dimensions.height * 0.07}, styles.defaultButton]} 
                onPress={() => {toggleBottomNavigationView()}}
                >
                    <Text style={[styles.defaultButtonText, {color: '#FFFFFF'}]}>Войти</Text>
                </TouchableOpacity> 
            </View>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    logo: {
      marginLeft: '5%',
      marginTop: '6%',
    },
    input: {
        width: '90%',
        aspectRatio: 5,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        background: '#FFFFFF',
        borderColor: '#E2E4E9',
        borderRadius: 10,
        fontFamily: 'Nunito',
        fontSize: 20
    },
    defaultButton: {
        maxWidth: 600,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
      },
      defaultButtonText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18
      },
})