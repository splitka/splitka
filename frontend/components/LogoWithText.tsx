import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";

const LogoWithText = () => {
    let [fontsLoaded] = useFonts({
        'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf')
    });
    
    if (!fontsLoaded) {
        return <Text>Loading</Text>
    }

    return (
        <View>
            <View style={[styles.container]}>
            {/* <View style={{ flex: 1, backgroundColor: "red" }} /> */}
            {/* <View style={{ flex: 2, backgroundColor: "darkorange" }} /> */}
            {/* <View style={{ flex: 3, backgroundColor: "green" }} /> */}
                <View>
                    <Image source={require('../img/chocolate.png')} 
                    style={styles.logo} />
                </View>
                <Text style={styles.logoText}> Splitka</Text>


            </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        // backgroundColor: 'green',
        textAlignHorizontal: "center",
        textAlignVertical: "center",
        alignItems: "center"
        
    },
    logo: { 
        width: 40,
        height: 40,
      },
      logoText: {
        fontFamily: 'Nunito-Bold',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32,
        color: "#0A173D",
        paddingLeft: 5,
    }
  });
  
export default LogoWithText