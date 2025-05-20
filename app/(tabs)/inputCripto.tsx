import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Criptografia() {

    const [texto, setTexto] = useState("Nome Criptografia");
    const [selecionado, setSelecionado] = useState("Cesar");

    const [textoOriginal, setTextoOriginal] = useState('');
    const [textoCriptografado, setTextoCriptografado] = useState('');

    const chave = 3; // Cifra de César com chave 3

    const cifraCesar = (texto: string, chave: number) => {
    return texto
      .split('')
      .map(char => {
        if (/[a-z]/i.test(char)) {
          const base = char === char.toUpperCase() ? 65 : 97;
          return String.fromCharCode(((char.charCodeAt(0) - base + chave) % 26) + base);
        }
        return char;
      })
      .join('');
  };

  const handleChange = (texto: string) => {
    setTextoOriginal(texto);
    const criptografado = cifraCesar(texto, chave);
    setTextoCriptografado(criptografado);
  };

    return(
        <View style={styles.containerPage}>
            {/* Header  */}
            <View style={styles.containerHeader}>
                <TouchableOpacity onPress={() => router.back()} style={styles.boxIcons}>
                    <Feather name="home" size={24} color="white"/>                
                </TouchableOpacity>
            
                <Text style={styles.titleText}>CRIPTA</Text>

                <TouchableOpacity onPress={() => router.back()} style={styles.boxIcons}>
                    <Feather name="settings" size={24} color="white"/>                
                </TouchableOpacity>
            </View>

            {/* barra visual para dividir conteudo*/}
            <View style={styles.divider} />

            <TextInput
                style={styles.nomeCripto}
                value={texto}
                onChangeText={setTexto}
            />

            <Text style={styles.placeHolder}>Selecione o tipo de criptografia</Text>

            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={selecionado}
                    onValueChange={(itemValue) => setSelecionado(itemValue)}
                    style={styles.pickerInner}
                >
                    <Picker.Item label="Cesar" value="Cesar"/>
                    <Picker.Item label="Vigenère" value="Vigenère"/>
                    <Picker.Item label="Eyme" value="Eyme"/>
                </Picker>
            </View>

            <Text style={styles.toolTip}>Você escolheu a criptografia: {selecionado}</Text>

            <View style={styles.container}>
                <Text style={styles.label}>Digite seu texto:</Text>
                <TextInput
                    style={styles.input}
                    value={textoOriginal}
                    onChangeText={handleChange}
                    placeholder="Digite aqui"
                />

                <Text style={styles.label}>Texto criptografado:</Text>
                <Text style={styles.resultado}>{textoCriptografado}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPage: {
        display: "flex",
        flex: 1,
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
    containerHeader: {
        display: 'flex',
        flexDirection: "row",
        top: 60,
        gap: 35,
        left: 25,
    },
    titleText: {
        fontSize: 50,
    },
    divider: {
        backgroundColor: '#B7B7B7',
        width: 382,
        height: 2,
        left: 12,
        marginTop: 80,
    },
    nomeCripto: {
        color: '#00000',
        fontSize: 30,
        left: 15,
    },
    placeHolder: {
        fontSize: 20,
        color: "#1e1e1e",
        left: 20,
        top: 20,
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 12,
        width: 327,
        height: 70,
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 20,
        overflow: 'hidden',
    },
    pickerInner: {
        width: '100%',
        height: '100%',
    },
    container: {
    padding: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 16,
        height: 100,
        width: '100%',
        borderRadius: 8,
        marginTop: 8,
    },
    resultado: {
        marginTop: 8,
        fontSize: 18,
        color: '#444',
    },
    toolTip: {
        fontSize: 15,
        color: "#1e1e1e",
        left: 20,
    },
});