import React from "react";
import {StyleSheet, TouchableOpacity, Text, GestureResponderEvent, View } from "react-native";

export type Props = {
    title: string;
    onPress: ((event: GestureResponderEvent) => void);
  };

const FlowButton: React.FC<Props> = ({title, onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View style={styles.appButtonContainer}>
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
    marginHorizontal: 25,
    padding: 10
},
appButtonText: {
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    fontFamily: 'Nunito-Bold'
}
});

export default FlowButton;