import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {

  const handlerLogin = () => {
      //TODO ta faltando a logica de validação
      router.push('/(tabs)/inputCripto');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>CRIPTA</Text>

      <TouchableOpacity style={styles.buttonEntrar} onPress={() => {handlerLogin()}}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.buttonSobre}>
              <Text>Sobre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSugestao}>
              <Text style={styles.textSugestao}>Sugestão</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: '900',
    fontSize: 64,
    top: 350,
    left: 100,
  },
  container: {
    flex: 1,
  },
  buttonEntrar: {
    width: 70,
    height: 40,
    backgroundColor: '#71E05B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 500,
    left: 175,
    borderWidth: 1,
    borderColor: '#00000',
    boxShadow: '0px 4px 4px 0px #868684',
  },
  buttonSobre: {
    width: 70,
    height: 40,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 10,
    left: 40,
    borderWidth: 1,
    borderColor: '#00000',
    boxShadow: '0px 4px 4px 0px #868684',
  },
  buttonSugestao: {
    width: 96,
    height: 40,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 10,
    marginLeft: 50,
    borderWidth: 1,
    borderColor: '#FB0000',
    boxShadow: '0px 4px 4px 0px #868684',
  },
  textSugestao: {
    color: '#ffff',
  },
  rowButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
