import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Image } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const navigation = useNavigation()
    return (
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>

                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.cardTitulo}>Bem-vindo à empresa</Text>
                        <Text style={styles.cardSubtitulo}>NaturaMobile!</Text>
                    </View>

                    <View style={styles.cardPrincipal}>
                        <Image
                            source={{ uri: "https://picsum.photos/id/248/200/300" }}
                            style={styles.imagemHome}/>
                            
                        <View style={styles.subtitulo}>
                            <Text style={styles.subTextoImagem}>Natureza em foco</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Produtos')}
                        style={styles.botaoNavegacao}
                    >
                        <AntDesign name="book" size={20} color="white" style={{ marginRight: 10 }} />
                        <Text style={styles.textoBotao}>Ver Produtos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Contatos')}
                        style={styles.botaoNavegacaoSecundario}
                    >
                        <FontAwesome name="phone" size={20} color="white" style={{ marginRight: 10 }} />
                        <Text style={styles.textoBotao}>Fale Conosco</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#4b914e',
        alignItems: 'center',
        paddingTop: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    cardTitulo: {
        color: '#caffde',
        fontSize: 16,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    cardSubtitulo: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: 'bold',
    },
    cardPrincipal: {
        width: 280,
        backgroundColor: '#ffffff25',
        borderRadius: 40,
        padding: 10,
        marginBottom: 40,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff40',
    },
    imagemHome: {
        width: 250,
        height: 300,
        borderRadius: 35,
    },
    subtitulo: {
        backgroundColor: '#034e12e0',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        marginTop:10
    },
    subTextoImagem: {
        color: 'white',
        fontWeight: 'bold',
    },
    botaoNavegacao: {
        flexDirection: 'row',
        backgroundColor: '#034e12',
        width: 260,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 15,
    },
    botaoNavegacaoSecundario: {
        flexDirection: 'row',
        backgroundColor: '#ffffff20',
        width: 260,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff80',
        marginBottom: 60,
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
