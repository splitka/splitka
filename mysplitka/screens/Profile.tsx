import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import LogoWithText from '../components/LogoWithText';

export default function Profile() {
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <LogoWithText/>
        </View>
        <View style={styles.name}>
            <Text>Профиль</Text>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    logo: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginHorizontal: '4%'
    },
    name: {
      flex: 7,
      justifyContent: 'center',
      fontFamily: 'Nunito-Bold'
    },
  });