import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import LogoWithText from '../components/LogoWithText'
import React from 'react';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Му-му',
      totalSum: '600',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Oblomof',
      totalSum: '600',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Теремок',
      totalSum: '600',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bq',
        title: 'Му-му',
        totalSum: '600',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6q',
        title: 'Oblomof',
        totalSum: '600',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7q',
        title: 'Теремок',
        totalSum: '600',
      },
];

const Item = ({item, onPress}) => (
    <View style={styles.item}>
        <Image source={require('../img/logopay.jpg')} style={[styles.image, {alignItems: 'flex-start'}]}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.sum}>{item.totalSum}</Text>
        <TouchableOpacity onPress={onPress} style={{alignItems: 'flex-end'}}>
            <Image source={require('../img/chocolate.png')} style={styles.image}/>
        </TouchableOpacity>
    </View>
  );

export default function Payments({ navigation }: RouterProps) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <LogoWithText/>
        </View>
        <View style={styles.payments}>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 32}}>Платежи</Text>
            <FlatList
                data={DATA}
                renderItem={({item}) => (<Item item={item} onPress={()=>{}} />)}
                keyExtractor={(item) => item.id}
            />
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  payments: {
    flex: 7,
    justifyContent: 'center',
    fontFamily: 'Nunito-Bold'
  },
  item: {
    flex: 1, 
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
  },
  image: {
    flex: 1,
    width: 32, 
    height: 30, 
  },
  title: {
    flex: 5, 
    alignItems: 'flex-start',
    fontFamily: 'Nunito',
    fontSize: 16,
  },
  sum: {
    flex: 1, 
    alignItems: 'flex-end',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  }
});