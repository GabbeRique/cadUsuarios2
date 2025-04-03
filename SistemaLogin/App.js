import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

 function Login() {
  return (
    <View style={styles.container}>
      <Avatar
        size={64}
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        containerStyle={{ backgroundColor: '#6733b9' }}
      />
      
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu email" />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>

      
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      
    </View>
  );
}

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu email" />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
 function EsqueceuSenha() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a senha</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu email" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    color: 'black',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
});
