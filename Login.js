import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight } from 'react-native';import App from './App';
 {/*Feito o import dos elementos usados na aplicação */}

 class Login extends React.Component {
    render() {
      return (

    <View>
        <View style={[s.formGroup]}>
            <Text style={[s.formLabelText]} for="InputNome">Nome</Text>     {/*Feito o input do nome */}
            <TextInput editable style={[s.formControl]} id="InputNome" /> 
        </View>

        <View style={[s.formGroup]}>
            <Text style={[s.formLabelText]} for="InputEmail">E-mail</Text>    {/*Feito o input do email */}
            <TextInput editable style={[s.formControl]} id="InputEmail" /> 
        </View>

    <View style={[s.formGroup]}>
            <Text style={[s.formLabelText]} for="InputImc">IMC</Text>         {/*Feito o input do imc */}
            <TextInput editable style={[s.formControl]} id="InputImc" />
        </View>
        <TouchableHighlight style={[s.btnTouchable]} onPress={() => alert('Enviado')}> {/*Aviso que o form foi enviado */}
            <View style={[s.btn, s.btnPrimary]}>
                <Text style={[s.btnText, s.btnPrimatyText]}>Enviar</Text>

            </View>
        </TouchableHighlight>                {/*realça quando é tocado o botão*/}
    </View>
    
      )}
}










