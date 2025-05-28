import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Sugestao() {
  const [expandido, setExpandido] = useState(false);
  const [expandido2, setExpandido2] = useState(false);
  const [expandido3, setExpandido3] = useState(false);

  return (
    <>
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
    
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setExpandido(!expandido)} style={styles.menu}>
                <Text style={styles.menuTexto}>1º Introdução à Criptografia: Protegendo Informações no Mundo Digital</Text>
                <Feather 
                name={expandido ? "chevron-down" : "chevron-right"} // Muda o ícone dinamicamente
                size={24} 
                color="black" 
                />
            </TouchableOpacity>

            {/* barra visual para dividir conteudo*/}
            <View style={styles.divider} />

            {expandido && (
                <ScrollView style={styles.containerScroll}>
                        <Text style={styles.titleScroll}>Introdução à Criptografia</Text>
                        <Text style={styles.paragraphScroll}>
                            A criptografia é uma técnica essencial para proteger dados e garantir que apenas pessoas autorizadas possam acessá-los.
                            Ela transforma informações comuns em códigos indecifráveis sem a chave correta, sendo amplamente utilizada em áreas como
                            comunicação, segurança bancária e proteção de arquivos.
                        </Text>

                        <Text style={styles.subtitleScroll}>Por que a criptografia é importante?</Text>
                        <Text style={styles.paragraphScroll}>
                            Em um mundo onde a troca de informações ocorre constantemente pela internet, proteger dados contra acessos não autorizados
                            é fundamental. A criptografia impede que hackers, empresas ou governos tenham acesso a informações privadas sem permissão.
                        </Text>

                        <Text style={styles.subtitleScroll}>Como funciona?</Text>
                        <Text style={styles.listItemScroll}>🔹 <Text style={styles.boldScroll}>Codificação:</Text> os dados originais são convertidos em um formato criptografado.</Text>
                        <Text style={styles.listItemScroll}>🔹 <Text style={styles.boldScroll}>Chave de acesso:</Text> apenas quem possui a chave correta pode decifrar os dados.</Text>
                        <Text style={styles.listItemScroll}>🔹 <Text style={styles.boldScroll}>Decodificação:</Text> quando autorizado, os dados retornam ao formato original.</Text>

                        <Text style={styles.subtitleScroll}>Exemplo prático</Text>
                        <Text style={styles.paragraphScroll}>
                            Imagine que você queira enviar uma mensagem secreta para um amigo. Em vez de escrever “Encontro às 19h”, você pode codificar
                            a mensagem em algo como “1A3C4G5X”. Seu amigo, com a chave correta, consegue transformar esse código de volta na frase original.
                            Esse mesmo princípio é utilizado em aplicativos de mensagens como WhatsApp e Telegram, garantindo que suas conversas permaneçam privadas.
                        </Text>
                        <Text style={styles.paragraphScroll}></Text>
                </ScrollView>
            )}

            <TouchableOpacity onPress={() => setExpandido2(!expandido2)} style={styles.menu}>
                <Text style={styles.menuTexto}>2º Casos de Uso da Criptografia no Dia a Dia: Protegendo Informações a Todo Momento</Text>
                <Feather 
                name={expandido ? "chevron-down" : "chevron-right"} // Muda o ícone dinamicamente
                size={24} 
                color="black" 
                />
            </TouchableOpacity>

            {/* barra visual para dividir conteudo*/}
            <View style={styles.divider} />

            {expandido2 && (
                <ScrollView style={styles.containerScroll}>
                    {/* Tópico 1 - Segurança em Transações Bancárias */}
                    <Text style={styles.titleScroll}>🔒 Segurança em Transações Bancárias</Text>
                    <Text style={styles.paragraphScroll}>
                        Quando você realiza um pagamento online ou acessa o aplicativo do seu banco, a criptografia impede que terceiros 
                        interceptem seus dados financeiros, garantindo transações seguras.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Exemplo prático</Text>
                    <Text style={styles.paragraphScroll}>
                        Ao pagar com cartão de crédito em um site confiável, seus dados são criptografados antes de serem transmitidos, 
                        impedindo que hackers tenham acesso às informações bancárias.
                    </Text>

                    {/* Tópico 2 - Privacidade em Mensagens e Chamadas */}
                    <Text style={styles.titleScroll}>📩 Privacidade em Mensagens e Chamadas</Text>
                    <Text style={styles.paragraphScroll}>
                        Aplicativos como WhatsApp e Telegram utilizam criptografia de ponta a ponta para garantir que apenas o remetente e 
                        o destinatário possam acessar o conteúdo da conversa.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Exemplo prático</Text>
                    <Text style={styles.paragraphScroll}>
                        Mesmo que alguém tente interceptar suas mensagens durante a transmissão, verá apenas códigos indecifráveis, 
                        mantendo sua privacidade protegida.
                    </Text>

                    {/* Tópico 3 - Proteção de Senhas e Acessos */}
                    <Text style={styles.titleScroll}>🔑 Proteção de Senhas e Acessos</Text>
                    <Text style={styles.paragraphScroll}>
                        Senhas nunca são armazenadas em seu formato original. Elas passam por um processo de **hashing**, garantindo que 
                        apenas quem tem a chave correta consiga autenticá-las.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Exemplo prático</Text>
                    <Text style={styles.paragraphScroll}>
                        Quando você salva sua senha no navegador ou em um serviço online, ela é criptografada e protegida, evitando que 
                        seja facilmente descoberta em caso de vazamento de dados.
                    </Text>

                    {/* Tópico 4 - Segurança de Arquivos e Documentos Pessoais */}
                    <Text style={styles.titleScroll}>📂 Segurança de Arquivos e Documentos</Text>
                    <Text style={styles.paragraphScroll}>
                        A criptografia protege documentos armazenados na nuvem ou no computador, impedindo acessos não autorizados e 
                        garantindo a confidencialidade dos dados.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Exemplo prático</Text>
                    <Text style={styles.paragraphScroll}>
                        Um profissional que trabalha com informações sigilosas pode criptografar arquivos antes de enviá-los por e-mail, 
                        garantindo que apenas destinatários autorizados possam abri-los.
                    </Text>

                    {/* Tópico 5 - Navegação Segura na Internet */}
                    <Text style={styles.titleScroll}>🌐 Navegação Segura na Internet</Text>
                    <Text style={styles.paragraphScroll}>
                        Sites que utilizam **HTTPS** garantem que suas informações não sejam interceptadas por terceiros, protegendo dados 
                        sensíveis como senhas e informações bancárias.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Exemplo prático</Text>
                    <Text style={styles.paragraphScroll}>
                        Ao acessar um site de compras confiável, o protocolo HTTPS criptografa seus dados, impedindo que hackers consigam 
                        visualizar suas informações de login e pagamento.
                    </Text>
                </ScrollView>

            )}

             <TouchableOpacity onPress={() => setExpandido3(!expandido3)} style={styles.menu}>
                <Text style={styles.menuTexto}>3º Boas práticas para proteger dados e evitar vulnerabilidades comuns</Text>
                <Feather 
                name={expandido ? "chevron-down" : "chevron-right"} // Muda o ícone dinamicamente
                size={24} 
                color="black" 
                />
            </TouchableOpacity>

            

            {expandido3 && (
                <ScrollView style={styles.containerScroll}>
                    {/* Título Principal */}
                    <Text style={styles.titleScroll}>🔐 Dicas de Segurança: Proteja Seus Dados</Text>
                    <Text style={styles.paragraphScroll}>
                        A segurança digital é essencial para evitar fraudes, invasões e vazamentos de informações. Pequenas ações podem 
                        fortalecer a proteção dos seus dados e manter sua privacidade intacta. Confira as melhores práticas para evitar vulnerabilidades:
                    </Text>

                    {/* Tópico 1 - Senhas Fortes e Únicas */}
                    <Text style={styles.titleScroll}>🔑 Use Senhas Fortes e Únicas</Text>
                    <Text style={styles.paragraphScroll}>
                        Senhas fáceis podem ser descobertas rapidamente por hackers. Prefira senhas longas, misturando letras, números e símbolos.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Dica</Text>
                    <Text style={styles.paragraphScroll}>
                        Utilize gerenciadores de senhas para armazená-las com segurança e evite repetir a mesma senha em diferentes serviços.
                    </Text>

                    {/* Tópico 2 - Autenticação de Dois Fatores */}
                    <Text style={styles.titleScroll}>📡 Ative a Autenticação de Dois Fatores (2FA)</Text>
                    <Text style={styles.paragraphScroll}>
                        O 2FA adiciona uma camada extra de proteção ao exigir uma segunda verificação, como um código enviado para seu celular.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Dica</Text>
                    <Text style={styles.paragraphScroll}>
                        Ative a autenticação em todos os serviços importantes, como redes sociais, e-mails e bancos.
                    </Text>

                    {/* Tópico 3 - Cuidado com Links e E-mails Suspeitos */}
                    <Text style={styles.titleScroll}>🚫 Cuidado com Links e E-mails Suspeitos</Text>
                    <Text style={styles.paragraphScroll}>
                        Ataques de **phishing** enganam usuários para roubar informações, enviando links falsos que parecem legítimos.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Dica</Text>
                    <Text style={styles.paragraphScroll}>
                        Passe o mouse sobre links antes de clicar e veja o endereço real para identificar tentativas de fraude.
                    </Text>

                    {/* Tópico 4 - Atualização de Dispositivos e Apps */}
                    <Text style={styles.titleScroll}>🔒 Mantenha Dispositivos e Apps Atualizados</Text>
                    <Text style={styles.paragraphScroll}>
                        Atualizações corrigem falhas de segurança que podem ser exploradas por hackers.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Dica</Text>
                    <Text style={styles.paragraphScroll}>
                        Ative as atualizações automáticas no celular e computador para garantir que esteja sempre protegido.
                    </Text>

                    {/* Tópico 5 - Sites Seguros HTTPS */}
                    <Text style={styles.titleScroll}>🌐 Navegue em Sites Seguros (HTTPS)</Text>
                    <Text style={styles.paragraphScroll}>
                        Sites com **HTTPS** criptografam os dados, impedindo que sejam interceptados por terceiros.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Dica</Text>
                    <Text style={styles.paragraphScroll}>
                        Antes de inserir qualquer informação pessoal, verifique se o site tem o cadeado 🔒 na barra de endereço.
                    </Text>

                    {/* Tópico 6 - Criptografia de Arquivos */}
                    <Text style={styles.titleScroll}>📂 Criptografe Arquivos Importantes</Text>
                    <Text style={styles.paragraphScroll}>
                        Utilize ferramentas de criptografia para evitar que documentos sejam acessados por pessoas não autorizadas.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Dica</Text>
                    <Text style={styles.paragraphScroll}>
                        No Windows e macOS, há opções de criptografia embutidas que protegem seus arquivos com senha.
                    </Text>

                    {/* Tópico 7 - Redes Wi-Fi Seguras */}
                    <Text style={styles.titleScroll}>🔎 Use Redes Wi-Fi Seguras</Text>
                    <Text style={styles.paragraphScroll}>
                        Evite conectar-se a redes públicas sem proteção. Redes abertas podem permitir que hackers capturem suas informações.
                    </Text>
                    <Text style={styles.subtitleScroll}>✅ Dica</Text>
                    <Text style={styles.paragraphScroll}>
                        Se precisar acessar uma rede pública, utilize **VPN** para criptografar seus dados durante a navegação.
                    </Text>
                </ScrollView>
            )}
        </View>

    </>
  );
}

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
  container: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    top: 70,
  },
  titulo: {
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  tituloTexto: {
    fontSize: 18,
    fontWeight: "bold",
  },
  conteudo: {
    marginTop: 5,
    fontSize: 16,
    color: "#333",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  menuTexto: {
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: 300,
  },



  containerScroll: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    flex: 1,
    paddingBottom: 500,
  },
  titleScroll: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  subtitleScroll: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 16,
    marginBottom: 8,
  },
  paragraphScroll: {
    fontSize: 18,
    color: '#444',
    textAlign: 'justify',
    marginBottom: 12,
  },
  listItemScroll: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  boldScroll: {
    fontWeight: 'bold',
  },
  divider: {
        backgroundColor: '#B7B7B7',
        width: 382,
        height: 2,
        left: 12,
        marginTop: 10,
  },
});