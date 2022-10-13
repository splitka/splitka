import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text, GestureResponderEvent, View, StyleProp } from "react-native";

export type Props = {
    title: string;
    onPress: ((event: GestureResponderEvent) => void);
    stylebutton?: {};
  };

const FlowButton: React.FC<Props> = ({title, onPress, stylebutton}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{marginVertical:'3%'}}
        >
            <View style={[styles.appButtonContainer, stylebutton]}>
                <Text style={styles.appButtonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
appButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1A2F9E",
    borderRadius: 12,
    padding: 15
},
appButtonText: {
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    fontFamily: 'Nunito-Bold'
}
});

export default FlowButton;