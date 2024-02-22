import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from '../parts/Background.js';
import TextInput from '../../../common/TextInput.js';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from '../../store/action-types.js'

export default function Login({ userLogin, statusOfActions, loginData }) {

  const [loginDetail, setLoginDetail] = useState({ email: { value: '', error: false }, password: { value: '', error: false } });

  useEffect(() => {
    switch (statusOfActions) {
      case types.USER_LOGIN_SUCCESS:
        const storeToken = async () => {
          await AsyncStorage.setItem('accessToken', loginData.access_token);
        };
        storeToken();
        break;
      default:
        break;
    }
  }, [statusOfActions])

  const submitHandler = () => {
    userLogin({email:loginDetail.email.value , password: loginDetail.password.value});
  }

  const seeToken = async() => {
    const toki =  await AsyncStorage.getItem('accessToken');
    console.log(toki,"l");
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
      <Button type='elevated' mode='contained' onPress={() => { submitHandler(); }}>Login</Button>
      <Button type='elevated' mode='contained' onPress={() => seeToken()}>dfhdg</Button>
    </Background>
  )
}

const style = StyleSheet.create({
  loginBtn: {
    width: 30
  }
})
