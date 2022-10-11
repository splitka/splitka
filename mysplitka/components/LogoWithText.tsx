import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const LogoWithText = () => {
    return (
        <View>
            <View style={[styles.container]}>
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
        fontSize: 24,
        lineHeight: 32,
        color: "#0A173D",
        paddingLeft: 5,
    }
  });
  
export default LogoWithText