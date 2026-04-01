import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Contatos() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="light" />

        <Text style={styles.cardTitulo}>Informações de Contato</Text>

        <View style={styles.alinharEmLinha}>
          <Text style={styles.tituloSecao}>Canais Digitais</Text>
        </View>

        <View style={[styles.alinharEmLinha, styles.card]}>

          <View style={styles.itemContato}>
            <View style={styles.circuloIcone}>
              <FontAwesome name="whatsapp" size={35} color="#caffde" />
            </View>
            <Text style={styles.label}>WhatsApp</Text>
            <Text style={styles.valor}>(11) 99999-9999</Text>
            <TouchableOpacity style={styles.botaoCard}>
              <Text style={styles.botaoTexto}>Abrir Conversa</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContato}>
            <View style={styles.circuloIcone}>
              <FontAwesome name="phone" size={35} color="#caffde" />
            </View>
            <Text style={styles.label}>Telefone</Text>
            <Text style={styles.valor}>(11) 4002-8922</Text>
            <TouchableOpacity style={styles.botaoCard}>
              <Text style={styles.botaoTexto}>Ligar Agora</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.alinharEmLinha}>
          <Text style={styles.tituloSecao}>Dados da Empresa</Text>
        </View>

        <View style={[styles.card, { width: '85%', flexDirection: 'column', alignItems: 'flex-start' }]}>
          <View style={styles.infoBloco}>
            <MaterialCommunityIcons name="map-marker-radius" size={24} color="#caffde" />
            <Text style={styles.valorAlinhado}>Av. da Natureza, 123 - Sumaré/SP</Text>
          </View>

          <View style={styles.infoBloco}>
            <AntDesign name="info-circle" size={24} color="#caffde" />
            <Text style={styles.valorAlinhado}>CNPJ: 12.345.679/0001-90</Text>
          </View>
        </View>

        <View style={{ marginBottom: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#313d32',
    alignItems: 'center',
    paddingTop: 20,
  },
  cardTitulo: {
    color: '#caffde',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#3c4b3d',
    borderRadius: 15,
    marginBottom: 20,
    width: '85%',
  },
  alinharEmLinha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff20',
    borderRadius: 25,
    padding: 15,
    width: "85%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  itemContato: {
    alignItems: 'center',
    width: '48%',
  },
  circuloIcone: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff10',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  tituloSecao: {
    color: '#ffffff',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '300',
  },
  label: {
    color: '#caffde',
    fontSize: 14,
    fontWeight: 'bold',
  },
  valor: {
    color: '#ffffff',
    fontSize: 12,
    marginBottom: 10,
  },
  botaoCard: {
    backgroundColor: '#caffde',
    paddingVertical: 8,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#313d32',
    fontSize: 11,
    fontWeight: 'bold',
  },
  infoBloco: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  valorAlinhado: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 10,
  }
});
