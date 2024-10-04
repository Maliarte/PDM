import { Text, SafeAreaView, StyleSheet, Dimensions, View, Image, TouchableWithoutFeedback} from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import { Kavivanar_400Regular } from '@expo-google-fonts/kavivanar';

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth * 0.5 - 44;

const Home = () => {
  const [fontLoaded] = useFonts({
      KaushanScript: KaushanScript_400Regular,
      Kavivanar: Kavivanar_400Regular,
  });

  const navigation = useNavigation();

  const goToPeixeScreen = (nomeTela) => {
    navigation.navigate(nomeTela);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barra1}></View>
      <View style={styles.barra2}></View>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>
          AQUARISMO 
        </Text>
      </View>
      <View style={styles.cards}>
        <TouchableWithoutFeedback onPress={() => goToPeixeScreen('Peixe1')}>
          <Card style={{width: cardWidth, marginBottom: 30, borderRadius: 8}}>
              <View style={styles.precos}>
                <Text style={styles.preco}>R$ 47,99</Text>
              </View>
              <Image style={styles.imagens} source={require('../assets/bettablue.jpg')} />
              <View style={styles.cardTexto}>
                <Text style={styles.nomeProduto}>Betta Azul</Text>
                <Text style={styles.textoPequeno}>(Peixe Palhaço)</Text>
              </View>
          </Card>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => goToPeixeScreen('Peixe2')}>
          <Card style={{width: cardWidth, marginBottom: 30, borderRadius: 8}}>
              <View style={styles.precos}>
                <Text style={styles.preco}>R$ 58,99</Text>
              </View>
              <Image style={styles.imagens} source={require('../assets/bettaorange.jpg')} />
              <View style={styles.cardTexto}>
                <Text style={styles.nomeProduto}>Betta orange</Text>
                <Text style={styles.textoPequeno}>(Peixe Sério)</Text>
              </View>
          </Card>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => goToPeixeScreen('Peixe3')}>
          <Card style={{width: cardWidth, marginBottom: 30, borderRadius: 8}}>
              <View style={styles.precos}>
                <Text style={styles.preco}>R$ 75,99</Text>
              </View>
              <Image style={styles.imagens} source={require('../assets/bettalindo.jpg')} />
              <View style={styles.cardTexto}>
                <Text style={styles.nomeProduto}>Betta FurtaCor</Text>
                <Text style={styles.textoPequeno}>(Peixe Amigo)</Text>
              </View>
          </Card>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => goToPeixeScreen('Peixe4')}>
          <Card style={{width: cardWidth, marginBottom: 30, borderRadius: 8}}>
              <View style={styles.precos}>
                <Text style={styles.preco}>R$ 83,99</Text>
              </View>
              <Image style={styles.imagens} source={require('../assets/bettacolor.jpg')} />
              <View style={styles.cardTexto}>
                <Text style={[styles.nomeProduto, {fontSize: 13}]}>Betta Neon </Text>
                <Text style={styles.textoPequeno}>(Peixe Hungry)</Text>
              </View>
          </Card>
        </TouchableWithoutFeedback>
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
    backgroundColor: '#ffffff',
    padding: 8,
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
  },
  /*barra2: {
    backgroundColor: '#CD9631',
    height: 50,
    width: 500,
    transform: [{ rotate: '135deg' }],
    position: 'absolute',
    top: 85,
    left: -125,
    zIndex: -1,
  },*/
  barra3: {
    backgroundColor: '#A3CEEF',
    height: 50,
    width: 300,
    transform: [{ rotate: '135deg' }],
    position: 'absolute',
    bottom: 15,
    right: -75,
    zIndex: -1,
  },
  /*barra4: {
    backgroundColor: '#CD9631',
    height: 50,
    width: 500,
    transform: [{ rotate: '135deg' }],
    position: 'absolute',
    bottom: 85,
    right: -125,
    zIndex: -1,
  },*/
  containerTitulo: {
    marginTop: -75,
    marginBottom: 100,
    marginLeft: 150,
    marginRight: 5,
  },
  titulo: {
    fontSize: 27,
    color: '#CD9631',
    fontFamily: 'KaushanScript',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  imagens: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },  
  precos: {
    backgroundColor: '#3F2633',
    width: 42.5,
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 4,
    position: 'absolute',
    right: 7.5,
    top: 5,
    zIndex: 1,
  },
  preco: {
    fontSize: 8,
    color: '#CD9631',
    fontFamily: 'KaushanScript',
  },
  cardTexto: {
    padding: 5,
    paddingBottom: 10,
    backgroundColor: '#D9D9D9',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 50,
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
});

export default Home;
