import { Button, View, Text } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import React from 'react';
interface RouterProps {
    navigation: NavigationProp<any, any>;
}

export default function VTBLogin({ navigation }: RouterProps) {
    return(
        <View>
            Hello
        </View>
    )
}
