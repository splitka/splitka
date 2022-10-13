import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import LogoWithText from '../components/LogoWithText'
import React from 'react';

interface RouterProps {
  route: any;
  navigation: NavigationProp<any, any>;
}


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Кофейня "Шоколадница"',
      totalSum: '600',
      img: require('../img/imagepayments/Coffee.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Ресторан Torro Crill',
      totalSum: '1300',
      img: require('../img/imagepayments/Torro.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Ресторан Torro Crill',
      totalSum: '500',
      img: require('../img/imagepayments/Torro.png')
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bq',
      title: 'Кофейня "Шоколадница"',
      totalSum: '2000',
      img: require('../img/imagepayments/Coffee.png')
      },
];

const Item = ({item, onPress}) => {
    return (
      <View style={styles.item}>
          <Image source={item.img} style={[styles.image, {alignItems: 'flex-start'}]}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.sum}>{item.totalSum} ₽</Text>
          <TouchableOpacity onPress={onPress} style={{alignItems: 'flex-end'}}>
              <Image source={require('../img/chocolate.png')} style={{width:30, height:30}}/>
          </TouchableOpacity>
      </View>
    )
  };

export default function Payments({route, navigation }: RouterProps) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <LogoWithText/>
        </View>
        <View style={styles.payments}>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 32}}>Платежи</Text>
            <FlatList
                data={DATA}
                renderItem={({item}) => (<Item item={item} onPress={()=>{navigation.navigate("UserSplitSum", 
                                                                                            {sum: parseInt(item.totalSum, 10)})}} />)}
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
    flex: 1.5,
    marginTop:'6%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  payments: {
    flex: 8,
    justifyContent: 'center',
    fontFamily: 'Nunito-Bold'
  },
  item: {
    flex: 1, 
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginVertical: 3,
    alignItems: 'center'
  },
  image: {
    flex: 1.7,
    height: 40,
    maxWidth:40,
    justifyContent: 'center',
    marginRight: '2%',
    borderRadius: 20 
  },
  title: {
    flex: 7, 
    alignItems: 'flex-start',
    fontFamily: 'Nunito',
    fontSize: 16,
  },
  sum: {
    flex: 3, 
    justifyContent: 'flex-end',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    textAlign: 'right',
    marginHorizontal: '2%'
  }
});