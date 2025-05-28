import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { cifraCesar, cifraEyme, cifraVigenere } from '../../utils/cifras';



const FimCripto = () => {

  const { escolhaCripto, texto } = useLocalSearchParams(); // Pega o valor da URL
  const textoFormatado = Array.isArray(texto) ? texto.join(' ') : texto;
  const [textoCriptografado, setTextoCriptografado] = useState(textoFormatado);

  const copiarTexto = () => {
    Clipboard.setStringAsync(textoCriptografado);
  };

  const deletarTexto = () => {
     setTextoCriptografado('');
  };

  const exportarPDF = async () => {
  const options = {
    html: `<h1>Texto Criptografado</h1><p>${textoCriptografado}</p>`,
    fileName: 'texto_criptografado',
    directory: 'Documents',
  };

  const file = await RNHTMLtoPDF.convert(options);
   alert(`PDF salvo em: ${file.filePath}`);
  };


  useEffect(() => {
    let resultado = '';

    switch (escolhaCripto) {
      case "Cesar":
        resultado = cifraCesar(textoFormatado, 3);
        break;
      case "Vigenère":
        resultado = cifraVigenere(textoFormatado, "chave");
        break;
      case "Eyme":
        resultado = cifraEyme(textoFormatado);
        break;
      default:
        resultado = "Tipo de criptografia inválido!";
    }

    setTextoCriptografado(resultado);
  }, [escolhaCripto, textoFormatado]); // Executa apenas quando `escolhaCripto` ou `textoFormatado` mudam


  return (

    <View>
      <View style={styles.containerHeader}>
          <TouchableOpacity onPress={() => router.back()} style={styles.boxIcons}>
            <Feather name="home" size={24} color="white"/>                
          </TouchableOpacity>
            
          <Text style={styles.titleText}>CRIPTA</Text>
      </View>
      
      <Text style={styles.resultado1}>Cifra escolhida: {escolhaCripto}</Text>

      <Text style={styles.resultado2}>Texto Recebido: {textoCriptografado}</Text>

      <View style={styles.containerButtons}>
       <TouchableOpacity onPress={copiarTexto} style={styles.button}>
         <Feather name="copy" size={24} color="black"/> 
         <Text style={styles.buttonText}>Copiar</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={deletarTexto} style={styles.button}>
         <Feather name="trash-2" size={24} color="black"/>
         <Text style={styles.buttonText}>Deletar</Text>
       </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={exportarPDF} style={styles.buttonPDF}>
        <Text style={styles.buttonText}>Exportar PDF</Text>
      </TouchableOpacity>

    </View>
  );
};

export default FimCripto;

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
  resultado1: {
        marginTop: 80,
        color: '#444',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 18,
        left: 20,
        width: 350,
        borderRadius: 8,
    },
  resultado2: {
        marginTop: 20,
        color: '#444',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 18,
        left: 20,
        width: 350,
        borderRadius: 8,
    },
    button: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
        backgroundColor: "#B5B9B5",
        width: 120,
        borderRadius: 12,
        height: 60,
        top: 40,
        left: 30,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#00000',
        boxShadow: '0px 4px 4px 0px #868684',
    },
    buttonPDF: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
        backgroundColor: "#B5B9B5",
        width: 160,
        borderRadius: 12,
        height: 60,
        top: 80,
        left: 30,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#00000',
        boxShadow: '0px 4px 4px 0px #868684',
    },
    buttonText: {
        fontSize: 24,
    },
    containerButtons: {
      display: 'flex',
      flexDirection: 'row',
      gap: 80,
    }

});