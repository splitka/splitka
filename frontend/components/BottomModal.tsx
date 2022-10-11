import { SafeAreaView, Pressable, TouchableOpacity, AccessibilityActionEvent,  StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';

export interface BottomModalProps {
    type: string //"VK_A" | "VK_B" | "VTB_B" | "SUCCESS",
    handleModalChange: any
}

const ConfidentialityAgreementText: React.FC = () => {
    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'Nunito', paddingLeft: 5, paddingRight: 5, textAlign: 'center'}}>Нажимая “Продолжить”, Вы принимаете пользовательское соглашение и политику конфиденциальности Передаваемые данные</Text>
        </View>
    )
}

export interface HandleModalChangeProps {
    handleModalChange: any
}

const VK_A: React.FC<HandleModalChangeProps> = (props: any) => {
    
    return(
    <View style={styles.bottomNavigationView}>
            <View style={{flexDirection: "row", flexWrap: "wrap", alignItems: "center", paddingTop: 40}}> 
              <View >
                <Image source={require('../img/vk.png')} style={{width: 30, height: 30}} />
              </View>
              <View>
                <Text style={{fontFamily: 'Nunito-Bold', fontSize: 20, paddingLeft: 7}}>ID</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{paddingTop: 10, paddingBottom:20, fontSize: 16, color: '#586179'}}>Единая учетная запись для сервисов</Text>
            </View>

            <TouchableOpacity style={[styles.defaultButton, {backgroundColor: '#F3F4F6'} ]} //</View>onPress={() => navigation.navigate('VTBLogin')} 
            >
              <Text style={[styles.defaultButtonText, {color: '#828DAB'}]}>Номер телефона</Text>
            </TouchableOpacity>
            <View style={{paddingBottom: 15}}></View>
            <TouchableOpacity style={[styles.defaultButton, {backgroundColor: '#5883C6'} ]} onPress={() => props.handleModalChange('VK_B')} 
              >
            <Text style={[styles.defaultButtonText, {color: '#FFFFFF'}]}>Продолжить</Text>
            </TouchableOpacity>
            <View style={{paddingBottom: 15}}></View>
            <ConfidentialityAgreementText />
    </View>
    )
}

interface TYPE_PROPS {
    service: "VTB" | "VK",
    handleModalChange: any
}

const B_TYPE: React.FC<TYPE_PROPS> = (props: TYPE_PROPS) => {
    const service = props.service
    return(
        <View style={styles.bottomNavigationViewLarge}>
            <View style={{flexDirection: "row", flexWrap: "wrap", alignItems: "center", paddingTop: 40}}> 
              <View >
                {service == 'VK' ? <Image source={require(`../img/vk.png`)} style={{width: 30, height: 30}} /> :
                                    <Image source={require(`../img/vtb.png`)} style={{width: 85, height: 30}} /> }
              </View>
              <View>
                <Text style={{fontFamily: 'Nunito-Bold', fontSize: 20, paddingLeft: 7, top: service == 'VK' ? 0 : 9}}>ID</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{paddingTop: 10, paddingBottom:20, fontSize: 16, color: '#586179'}}>Единая учетная запись для сервисов</Text>
            </View>
            <View>
                <Image 
                    source={require('../img/art.png')}
                    style={{width: 70, height: 70, borderRadius: 400/ 2}} 
                />
            </View>
            <View style={{paddingTop: 10}}>
                <Text style={{fontFamily: 'Nunito-Bold',fontSize: 17}}>Артемий З.</Text>
                <Text style={{fontFamily: 'Nunito-Bold',fontSize: 17, paddingTop: 5, color: '#00000066'}}>+7... ... .. 07</Text>
            </View>

            <View style={{paddingBottom: 15}}></View>
            {service == 'VK' ?  
            <TouchableOpacity style={[styles.defaultButton, {backgroundColor: '#5883C6'} ]} onPress={() => props.handleModalChange('SUCCESS')} >
                <Text style={[styles.defaultButtonText, {color: '#FFFFFF'}]}>Продолжить как Артемий</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={[styles.defaultButton, {backgroundColor: '#1A2F9E'} ]} onPress={() => props.handleModalChange('SUCCESS')} >
                <Text style={[styles.defaultButtonText, {color: '#FFFFFF'}]}>Продолжить</Text>
            </TouchableOpacity> 
            }
            

            <View style={{paddingBottom: 15}}></View>

            <TouchableOpacity style={[styles.defaultButton, {backgroundColor: '#F3F4F6'} ]} //</View>onPress={() => navigation.navigate('VTBLogin')} 
            >
            {service == 'VK' ?  <Text style={[styles.defaultButtonText, {color: '#5662C5'}]}>Войти с другим номером</Text> :
                                <Text style={[styles.defaultButtonText, {color: '#5662C5'}]}>Войти с другим аккаунтом</Text>
            }
              
            </TouchableOpacity>
            <View style={{paddingBottom: 15}}></View>
            <ConfidentialityAgreementText />

            
    </View>
    )
}
const SUCCESS: React.FC = () => {
    return(
        <View style={styles.bottomNavigationViewSmall}>
            <View style={{paddingTop: 30}}>
                <Image 
                    source={require('../img/art.png')}
                    style={{width: 70, height: 70, borderRadius: 400/ 2}} 
                />
            </View>
            <View style={{paddingTop: 10}}>
                <Text style={{fontFamily: 'Nunito-Bold',fontSize: 17}}>Артемий З.</Text>
                <Text style={{fontFamily: 'Nunito-Bold',fontSize: 17, paddingTop: 5, color: '#00000066'}}>+7... ... .. 07</Text>
            </View>

            <View style={{paddingTop: 30, flexDirection: "row", flexWrap: "wrap", alignItems: "center"}}>
                <Image
                    source={require('../img/success_icon.png')}
                    style={{width: 20, height: 20}} 
                />
                <Text style={{fontFamily: 'Nunito-Bold',fontSize: 17, paddingLeft: 4}}>Успешно</Text>
            </View>        
        </View>
    )
}


export const BottomModal: React.FC<BottomModalProps> = (props: BottomModalProps) => {
    if (props.type == "VK_A") return <VK_A handleModalChange={props.handleModalChange}  />;
    if (props.type == "VK_B") return <B_TYPE service="VK" handleModalChange={props.handleModalChange} />;
    if (props.type == "VTB_B") return <B_TYPE service="VTB" handleModalChange={props.handleModalChange} />;
    if (props.type == "SUCCESS") return <SUCCESS />

    return <SUCCESS />
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    logo: {
      marginLeft: '5%',
      marginTop: '6%',
    },
    centerText: {
      paddingTop: 10,
      /* Base Text (16, 20) */
      fontFamily: 'Nunito',
      fontSize: 18,
      textAlign: 'center',
      color: '#586179'
    },
    enterVTBButton: {
      backgroundColor: '#1A2F9E',
      width: '87%',
      aspectRatio: 7,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center'
    },
    enterVTBButtonText: {
      color: '#FFF',
      fontFamily: 'Nunito-Bold',
      fontSize: 20
    },
    enterVKIDButton: {
      backgroundColor: '#EBF1FE',
      width: '87%',
      aspectRatio: 7,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center'
    },
    enterVKIDText: {
      color: '#5662C5',
      fontFamily: 'Nunito-Bold',
      fontSize: 18
    },
    defaultButton: {
      width: '87%',
      maxWidth: 600,
      aspectRatio: 7,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center'
    },
    defaultButtonText: {
      fontFamily: 'Nunito-Bold',
      fontSize: 18
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    row: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    title: {
      fontWeight: "900",
      letterSpacing: 0.5,
      fontSize: 16,
    },
    subtitle: {
      color: "#101318",
      fontSize: 14,
      fontWeight: "bold",
    },
    description: {
      color: "#56636F",
      fontSize: 13,
      fontWeight: "normal",
      width: "100%",
    },
    bottomNavigationView: {
      backgroundColor: '#fff',
      width: '100%',
      height: '40%',
      alignItems: 'center',
    },
    bottomNavigationViewLarge: {
    backgroundColor: '#fff',
      width: '100%',
      height: '60%',
      alignItems: 'center',
    },
    bottomNavigationViewSmall: {
        backgroundColor: '#fff',
        width: '100%',
        height: '30%',
        alignItems: 'center',
    }
  });