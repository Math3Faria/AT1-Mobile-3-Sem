import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Sobre() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>

        <Text style={styles.cardTitulo}>Conheça alguns de nossos incriveis Produtos</Text>
        <StatusBar style="auto" />


        <View style={[styles.alinharEmLinha]}>
          <Text style={styles.tituloImagem}>Cebola</Text>
          <Text style={styles.tituloImagem}>Flor amarela e branca</Text>
        </View>

        <View style={[styles.alinharEmLinha, styles.card]}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: "https://picsum.photos/id/292/200/300" }}
              style={{ width: 130, height: 125, marginTop: 10, borderRadius: 30 }}
            />
            <Text style={styles.precoTexto}>R$ 5,00 (PIX)</Text>
            <Text style={styles.parcelaTexto}>2x R$ 4,00</Text>
            <TextInput placeholder="Digite a quantidade" placeholderTextColor="rgba(255, 255, 255, 0.6)" keyboardType='number-pad'
              style={{ color: "rgb(255, 255, 255)1", borderWidth: 1, borderColor: 'gray', borderRadius: 10, width: 140, textAlign: 'center', marginTop: 5, marginBottom: 10 }} />
            <TouchableOpacity style={styles.botaoCard} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
              <AntDesign name="shopping-cart" size={22} color="#313d32" />
              <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
            </TouchableOpacity>

          </View>

          <View style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: "https://picsum.photos/id/306/200/300" }}
              style={{ width: 130, height: 125, marginTop: 10, borderRadius: 30 }}
            />
            <Text style={styles.precoTexto}>R$ 15,00 (PIX)</Text>
            <Text style={styles.parcelaTexto}>2x R$ 13,00</Text>
            <TextInput placeholder="Digite a quantidade" placeholderTextColor="rgba(255, 255, 255, 0.6)" keyboardType='number-pad'
              style={{ color: "rgb(255, 255, 255)1", borderWidth: 1, borderColor: 'gray', borderRadius: 10, width: 140, textAlign: 'center', marginTop: 5, marginBottom: 10 }} />
              <TouchableOpacity style={styles.botaoCard} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
              <AntDesign name="shopping-cart" size={22} color="#313d32" />
              <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.alinharEmLinha]}>
          <Text style={styles.tituloImagem}>Mel natural</Text>
          <Text style={styles.tituloImagem}>Chá de gengibre</Text>
        </View>

        <View style={[styles.alinharEmLinha, styles.card]}>

          <View style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: "https://picsum.photos/id/312/200/300" }}
              style={{ width: 130, height: 125, marginTop: 10, borderRadius: 30 }}
            />
            <Text style={styles.precoTexto}>R$ 25,00 (PIX)</Text>
            <Text style={styles.parcelaTexto}>2x R$ 16,00</Text>
            <TextInput placeholder="Digite a quantidade" placeholderTextColor="rgba(255, 255, 255, 0.6)" keyboardType='number-pad'
              style={{ color: "rgb(255, 255, 255)1", borderWidth: 1, borderColor: 'gray', borderRadius: 10, width: 140, textAlign: 'center', marginTop: 5, marginBottom: 10 }} />
              <TouchableOpacity style={styles.botaoCard} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
              <AntDesign name="shopping-cart" size={22} color="#313d32" />
              <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: "https://picsum.photos/id/326/200/300" }}
              style={{ width: 130, height: 125, marginTop: 10, borderRadius: 30 }}
            />
            <Text style={styles.precoTexto}>R$ 2,50 (PIX)</Text>
            <Text style={styles.parcelaTexto}>2x R$ 2,00</Text>
            <TextInput placeholder="Digite a quantidade" placeholderTextColor="rgba(255, 255, 255, 0.6)" keyboardType='number-pad'
              style={{ color: "rgb(255, 255, 255)1", borderWidth: 1, borderColor: 'gray', borderRadius: 10, width: 140, textAlign: 'center', marginTop: 5, marginBottom: 10 }} />
              <TouchableOpacity style={styles.botaoCard} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
              <AntDesign name="shopping-cart" size={22} color="#313d32" />
              <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={[styles.alinharEmLinha]}>
          <Text style={styles.tituloImagem}>Grãos de café naturais</Text>
        </View>

        <View style={[styles.alinharEmLinha, { marginBottom: 100, backgroundColor: '#ffffff20', borderRadius: 40, padding: 10, width: 170, alignItems: 'center', marginTop: 10, }]}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: "https://picsum.photos/id/425/200/300" }}
              style={{ width: 130, height: 125, marginTop: 10, borderRadius: 30 }}
            />
            <Text style={styles.precoTexto}>R$ 30,00 (PIX)</Text>
            <Text style={styles.parcelaTexto}>2x R$ 20,00</Text>
            <TextInput placeholder="Digite a quantidade" placeholderTextColor="rgba(255, 255, 255, 0.6)" keyboardType='number-pad'
              style={{ color: "rgb(255, 255, 255)1", borderWidth: 1, borderColor: 'gray', borderRadius: 10, width: 140, textAlign: 'center', marginTop: 5, marginBottom: 10 }} />
              <TouchableOpacity style={styles.botaoCard} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
              <AntDesign name="shopping-cart" size={22} color="#313d32" />
              <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#313d32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#ffffff20',
    borderRadius: 25,
    padding: 10,
    width: "75%",
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 48
  },
  alinharEmLinha: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 2
  },
  text: {
    width: '95%'
  },
  input: {
    color: '#4f4f4f',
    borderWidth: 1,
    borderColor: '#d8d7de',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    width: 100,
    marginBottom: 10,
    marginTop: 5
  },
  cardTitulo: {
    color: '#caffde',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#3c4b3d',
    maxWidth: 350,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(163, 232, 177, 0.3)',
  },

  tituloImagem: {
    color: '#caffde',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 2,
    width: 130,
    fontFamily: 'Roboto-Bold',
  },
  alinharEmLinhaTexto: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 2
  },
  precoTexto: {
    color: '#a3e8b1',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  parcelaTexto: {
    color: '#ffffff90',
    fontSize: 13,
  },
  
  botaoCard: {
    backgroundColor: '#caffde',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 140,
    height: 50,
  },

  botaoTexto: {
    color: '#313d32',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: -10,
    marginBottom: -10
  },
});
