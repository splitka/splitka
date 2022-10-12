import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import LogoWithText from '../components/LogoWithText'
import React from 'react';
import FlowButton from '../components/FlowButton';

interface RouterProps {
    route: any,
    navigation: NavigationProp<any, any>,
}

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Артемий Звонарев',
      totalSum: '0',
      isUse: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91a1f63',
      title: 'Захар Назаров',
      totalSum: '0',
      isUse: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f1',
        title: 'Алексей',
        totalSum: '0',
        isUse: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a1f1',
        title: 'Денис',
        totalSum: '0',
        isUse: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fsd91a1f1',
        title: 'Булат Ефремов',
        totalSum: '0',
        isUse: true,
    },
];

type User = {
    id: string,
    title: string,
    totalSum: number,
    isUse: boolean,
};

const Item = ({item, onPress}) => {
    const [number, onChangeNumber] = React.useState(item.totalSum.toString());
    function RandomImage(){
      const rnd = Math.random()
      return rnd < 1/5?require('../img/imageuser/Artem.png'):
             rnd < 2/5?require('../img/imageuser/Zahar.png'):
             rnd < 3/5?require('../img/imageuser/Denis.png'):
             rnd < 4/5?require('../img/imageuser/Alex.png'):require('../img/imageuser/Bulat.png');
    };
    return (
    <View style={styles.item}>
        <Image source={RandomImage()} style={[styles.image, {alignItems: 'flex-start'}]}/>
        <Text style={styles.title}>{item.title}</Text>
        <TextInput 
            style={styles.textInput}
            keyboardType="number-pad"
            onChangeText = {(str) => {item.totalSum = parseInt(str); onChangeNumber(str)}}
            value = {number}
            maxLength={5}
            selectTextOnFocus
        />
        <Text style={{fontFamily:'Nunito-Bold', marginTop:'2.5%'}}>₽</Text>
        <TouchableOpacity onPress={onPress} style={{alignItems: 'flex-end'}}>
            <Image source={require('../img/crestik.png')} style={styles.image}/>
        </TouchableOpacity>
    </View>
    )
  };

export default function UserSplitSum({ route, navigation}: RouterProps) {
    const everySum = (route.params.sum - route.params.sum % DATA.length) / DATA.length;
    const [users, setUsers] = React.useState<User[]>(DATA.map(user => {return {...user, totalSum: everySum}}));
    function ChangeIsUse(item: User): void {
        const index: number = users.indexOf(item);
        setUsers([...users.slice(0, index), {...users[index], isUse: !users[index].isUse}, ...users.slice(index + 1)]);
    };
    function list() {
        const str = [];
        users.forEach(item => item.isUse?str.push(item.title + ' ' + item.totalSum):{})
        return str;
    };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <LogoWithText/>
        </View>
        <View style={styles.payments}>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 24, marginBottom:'5%'}}>Выберите с кем вы хотите разделить платеж</Text>
            <FlatList
                data={users.filter(item => item.isUse === true)}
                extraData={users}
                renderItem={({item}) => (<Item item={item} onPress={() => ChangeIsUse(item)}/>)}
                keyExtractor={(item) => item.id}
            />
            <FlowButton title='Отправить запрос' onPress={()=>{alert(list())}} />
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
    marginVertical: 3,
  },
  image: {
    flex: 1,
    width: 30, 
    height: 32,
    justifyContent: 'center',
    marginRight: '2%',
    alignItems: 'flex-start',
    borderRadius: 12 
  },
  title: {
    flex: 6, 
    alignItems: 'flex-start',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    marginTop: '1.5%',
  },
  sum: {
    flex: 1, 
    alignItems: 'flex-end',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  textInput: {
    height: 25,
    width: 55,
    marginHorizontal: '1%',
    marginTop: '1.5%',
    borderWidth: 1,
    color: '#000',
    borderRadius: 8,
    cursorColor:'#000',
    textAlign:'right',
    paddingHorizontal:'2%',
    fontSize: 14,
    fontFamily: 'Nunito',
  }
});
