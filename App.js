// imports que são necessários para iniciar oprojeto, estilo, texto, views, botões
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

//classe que já vem por defaut ao gerar o expo init
export default class App extends React.Component {
  // aqui pegamos todos os parametros(peso, altura, info e resultado) e setamos para calcumaIMC
  constructor(props) {
    super(props)
    this.state = { peso: '', altura: '', info: '-', resultado: 0.0 }
    this.calculaIMC = this.calculaIMC.bind(this)
  }

  //Função CalculaIMC: Lógica do programa, usando if/else, considerando os tipos de IMC.
  // Usei Let, pois quero que as varieveis sejam restritas da classe, após finalizar o bloco, ela some.
  
  calculaIMC() {
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    if (s.resultado < 18.5) {
      s.info = 'Menor que 18,5, seu quadro é de: Baixo Peso'
    } else if (s.resultado < 24.9) {
      s.info = 'Entre 18,5 e 24,9, seu quadro é: Normal'
    } else if (s.resultado < 29.9) {
      s.info = 'Entre 25,0 e 29,9, você está com: Sobrepeso'
    } else if (s.resultado < 39.9) {
      s.info = 'Entre 30,0 e 39,9, tome cuidado, você está com: Obesidade'
    } else if (s.resultado > 39.9) {
      s.info = 'Maior que 40,0, você está com: Obesidade Grave'
    }
    this.setState(s)
  }
  //botão que limpa os valores, aqui temos uma função, que sempre vai trazer os componetes vazios ou zerados, conforme abaixo.
  clear = () => {
    this.setState({
      peso: '',
      altura: '',
      resultado: 0.0,
      info: '-'
    })
  }
  //classe render, nela, estou pedindo que retorno uma view, que será a pagina que será
  // a imagem do app, botões, textos. Precisamos criar um formulario, para o usuartio preencher os dadose enviar como se fosse agendar uma consulta.
  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>Altura (m)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          placeholder="Exemplo: 1.75 - use pontos para separar"
          keyboardType={'numeric'}
        />
        <Text style={styles.text}>Peso (kg)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          placeholder="Exemplo: 68.8 - use pontos para separar"
          keyboardType={'numeric'}
        />
        <Separator />
        <Button
          onPress={this.calculaIMC}
          title="Calcula"
          color="green"
          accessibilityLabel="Clique aqui para calcular seu IMC"
        />
        <Separator />
        <Button
          onPress={this.clear}
          title="Limpa"
          color="red"
          accessibilityLabel="Botão para limpar os valores"
        />
        <Separator />
        <Button
          onPress={this.calculaIMC}
          title="Envie seus dados"
          color="blue"
          accessibilityLabel="Agende sua consulta com nosso Time!"
        />
        <Separator />
        <Text style={styles.input}>
          Seu IMC é: {this.state.resultado.toFixed(2)} {this.state.info}
        </Text>
      </View>
    )
  }
}

const Separator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 18
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  textInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 20,
    margin: 10,
    borderRadius: 20
  }
})
