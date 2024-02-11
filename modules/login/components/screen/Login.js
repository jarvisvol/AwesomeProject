import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from '../parts/Background.js';
import TextInput from '../../../common/TextInput.js';
import { Button } from 'react-native-paper';

export default function Login() {
  const [loginDetail, setLoginDetail] = useState({ email: { value: '', error: false }, password: { value: '', error: false } });

  const submitHandler = () => {
    console.log(loginDetail);
  }

  return (
    <Background>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={loginDetail.email.value}
        onChangeText={(text) => setLoginDetail({ ...loginDetail, email: { value: text, error: '' } })}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      
      <TextInput
        label="Password"
        returnKeyType="done"
        value={loginDetail.password.value}
        onChangeText={(text) => setLoginDetail({ ...loginDetail, password: { value: text, error: '' } })}
        secureTextEntry
      />
      <Button type='elevated' mode='contained' onPress={() => submitHandler()}>Login</Button>
    </Background>
  )
}

const style = StyleSheet.create({
  loginBtn:{
    width:30
  }
})
