import { Text, TouchableOpacity, Alert, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import { Kavivanar_400Regular } from '@expo-google-fonts/kavivanar';
import { Laila_400Regular, Laila_700Regular } from '@expo-google-fonts/laila';

const Peixe4 = () => {
  const [fontLoaded] = useFonts({
      KaushanScript: KaushanScript_400Regular,
      Kavivanar: Kavivanar_400Regular,
      Laila: Laila_400Regular,
      LailaBold: Laila_700Regular,
  });

  const navigation = useNavigation();

  const PedidoFinalizado = () => {
    Alert.alert(
    'Pedido finalizado com sucesso', 
    'Betta Neon precisa de alimentação 3x/dia. \n\nObrigado pela preferência!'
    );

    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barra1}></View>
      <View style={styles.barra2}></View>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>
          Betta Neon é o famoso exótico!
        </Text>
      </View>

      <View>
        <Image style={styles.imagens} source={require('../assets/bettacolor.jpg')} />
        <View style={{gap: 16}}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={styles.nomeProduto}>Betta Neon  - </Text>
              <Text style={styles.textoPequeno}>(CARIL VERDE DE GALINHA)</Text>
            </View>
            <View style={styles.precos}>
              <Text style={styles.preco}>R$ 83,99</Text>
            </View>
          </View>
          <View>
            <Text style={styles.descricao}>
              Peixe atraente por seus encantos unicos.
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{ fontFamily: 'LailaBold', fontWeight: 700, fontSize: 14, color:     '#CD9631'}}>Enviar pedido</Text>
        <View style={{ flexDirection: 'row', gap: 4, marginTop: 4 }}>
          <Text style={{ fontFamily: 'LailaBold', fontWeight: 700, fontSize: 10, color: '#CD9631'}}>Código:</Text>
          <View style={{ backgroundColor: '#D9D9D9', padding: 2, borderRadius: 2, width: 38, height: 15, marginTop: 1}}>
            <Text style={{ fontFamily: 'LailaBold', fontWeight: 700, fontSize: 6.5, color: '#000'}}>V9-H4LLQ0</Text>
          </View>
          <TouchableOpacity onPress={PedidoFinalizado} style={styles.botao}>
            <Text style={styles.botaoTexto}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.barra3}></View>
      <View style={styles.barra4}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  barra1: {
    backgroundColor: '#A3CEEF',
    height: 50,
    width: 300,
    transform: [{ rotate: '135deg' }],
    position: 'absolute',
    top: 15,
    left: -75,
    zIndex: -1,
  },/*
  barra2: {
    backgroundColor: '#CD9631',
    height: 50,
    width: 500,
    transform: [{ rotate: '135deg' }],
    position: 'absolute',
    top: 85,
    left: -125,
    zIndex: -1,
  },
  barra3: {
    backgroundColor: '#CD9631',
    height: 50,
    width: 300,
    transform: [{ rotate: '135deg' }],
    position: 'absolute',
    bottom: 15,
    right: -75,
    zIndex: -1,
  },*/
  barra4: {
    backgroundColor: '#A3CEEF',
    height: 50,
    width: 500,
    transform: [{ rotate: '135deg' }],
    position: 'absolute',
    bottom: 85,
    right: -125,
    zIndex: -1,
  },
  containerTitulo: {
    marginTop: -50,
    marginBottom: 50,
    marginLeft: 100,
    marginRight: 5,
  },
  titulo: {
    fontSize: 27,
    color: '#CD9631',
    fontFamily: 'KaushanScript',
  },
  imagens: {
    width: '100%',
    height: 175,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
  },
  precos: {
    backgroundColor: '#3F2633',
    width: 52.5,
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 4,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  preco: {
    fontSize: 10,
    color: '#CD9631',
    fontFamily: 'KaushanScript',
  },
  nomeProduto: {
    fontSize: 15,
    color: '#CD9631',
    fontFamily: 'Kavivanar',
  },
  textoPequeno: {
    fontSize: 10,
    color: '#CD9631',
    fontFamily: 'Kavivanar',
  },  
  descricao: {
    fontSize: 9,
    color: '#CD9631',
    fontFamily: 'Kavivanar',
  },  
  botao: {
    backgroundColor: '#3F2633',
    borderRadius: 4,
    marginLeft: 16,
    paddingHorizontal: 28,
    paddingVertical: 3,
  },
  botaoTexto: {
    color: '#CD9631',
    fontFamily: 'LailaBold',
    fontWeight: 700,
    fontSize: 10
  },
});

export default Peixe4;
