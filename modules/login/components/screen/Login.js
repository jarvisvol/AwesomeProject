import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextBase, View } from 'react-native';
import Background from '../parts/Background.js';
import TextInput from '../../../common/TextInput.js';
import { Button } from 'react-native-paper';
import * as types from '../../store/action-types.js'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function Login({ userLogin, statusOfActions, loginData, isLoading, navigation }) {

  const [loginDetail, setLoginDetail] = useState({ email: { value: '', error: false }, password: { value: '', error: false } });

  // useEffect(() => {
  //   switch (statusOfActions) {
  //     // case types.USER_LOGIN_SUCCESS:
  //     //   const storeToken = async () => {
  //     //     await AsyncStorage.setItem('accessToken', loginData.access_token);
  //     //   };
  //     //   storeToken();
  //       navigation.navigate('Home');
  //       break;
  //     default:
  //       break;
  //   }
  // }, [statusOfActions])

  const submitHandler = () => {
    userLogin({ email: loginDetail.email.value, password: loginDetail.password.value });
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
      <Text style={{fontSize: 13, color: 'blue', marginTop: 10}}>Or</Text>
      <Button type='elevated' onPress={() => { navigation.navigate('Register')  }}> <Text style={{textDecorationLine: 'underline'}}>Register</Text> </Button>
      <View
        style={{ alignItems: 'center',marginTop:10 }}
      >
        <ActivityIndicator animating={isLoading} color={MD2Colors.blueGrey400} />
        <Button type='elevated' onPress={() => { () =>apiHandler() }}> <Text style={{textDecorationLine: 'underline'}}>see api</Text> </Button>
      </View>
    </Background>
  )
}
