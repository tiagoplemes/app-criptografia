import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SobreApp = () => {
  return (
    <>
        {/* Header  */}
        <View style={styles.containerHeader}>
            <TouchableOpacity onPress={() => router .back()} style={styles.boxIcons}>
                <Feather name="home" size={24} color="white"/>                
            </TouchableOpacity>
        
            <Text style={styles.titleText}>CRIPTA</Text>

            <TouchableOpacity onPress={() => router.back()} style={styles.boxIcons}>
                <Feather name="settings" size={24} color="white"/>                
            </TouchableOpacity>
        </View>

        <View style={styles.containerText}>
            <View style={styles.cardText}>
                <Text style={styles.title}>🔐 Sobre o App</Text>
                <Text style={styles.paragraph}>
                Bem-vindo ao nosso app de criptografia! Nosso objetivo é disseminar o uso da criptografia, tornando-a acessível para todos. 
                Além de educar sobre segurança digital, o app permite que você criptografe seus dados de forma anônima, sem necessidade de login e com suporte a uso offline.
                </Text>
                <Text style={styles.listItem}>✔️ Temos como um dos pilares nosso a promoção e educação da Segurança de Informação através da facilitaçao do criptografia</Text>
            </View>

            <View style={styles.subCardText}>
                <Text style={styles.title}>🔑 Proteja Seus Dados com Facilidade</Text>
                <Text style={styles.paragraph}>
                    Nosso app permite que qualquer pessoa criptografe seus dados de maneira simples e rápida, sem necessidade de conhecimentos técnicos avançados.
                </Text>
                <Text style={styles.subtitle}>✅ Funcionalidades Principais</Text>
                <Text style={styles.listItem}>✔️ Várias criptografia de texto</Text>
                <Text style={styles.listItem}>✔️ Uso anônimo – sem necessidade de cadastro</Text>
                <Text style={styles.listItem}>✔️ Funciona offline – proteção de dados a qualquer momento</Text>
            </View>

        </View>
        


    </>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
        display: 'flex',
        flexDirection: "row",
        top: 60,
        gap: 35,
        left: 25,
  },
  boxIcons: {
        display: 'flex',
        width: 61,
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 9,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        backgroundColor: '#000000',
        borderRadius: 12,
        top: 8,
        borderColor: '#000000',
        borderWidth: 1
  },
  titleText: {
    fontSize: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 12,
  },
  containerText: {
    padding: 15,
  },
  cardText: {
    marginTop: 60,
    padding: 15,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
  },
  subCardText: {
    marginTop: 15,
    padding: 15,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },

});

export default SobreApp;