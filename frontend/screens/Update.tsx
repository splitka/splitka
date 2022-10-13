import { SafeAreaView, StyleSheet, ActivityIndicator, View, Text} from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import LogoWithText from '../components/LogoWithText'
import FlowButton from '../components/FlowButton';
import React, { useEffect } from 'react';

interface RouterProps {
    route: any
    navigation: NavigationProp<any, any>;
  }

export default function Update({route, navigation }: RouterProps) {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState("");

  const getAccessToken = async () => {
    try {
      const response = await fetch('https://splitka-backend.transcendent.app/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic dGVhbTI6dTBEZkpacjJTSnoyZkZMNWhQT2x5RHRNUjBpZ0RCVW4='
        }
      });
      const json = await response.json();
      setData(json.access_token);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {getAccessToken();});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <LogoWithText/>
      </View>
      <Text>{route.params.access_token}</Text>
      <View style={styles.button}>
        <FlowButton title="Обновить" onPress={()=>{}}/>
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
  button: {
    flex: 8,
    justifyContent: 'center',
    fontFamily: 'Nunito-Bold'
  },
});