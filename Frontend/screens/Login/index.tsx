import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import common from '../../styles/common';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackType } from '../../App';

type IProps = NativeStackScreenProps<RootStackType, 'Login'>;

const Login = (props: IProps) => {
  const { navigation } = props;

  const signIn = () => {};

  const goToCreateUser = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={common.container}>
      <Text style={common.header}>Shop And Mall</Text>
      <View style={common.inputView}>
        <TextInput placeholder="Enter Username" />
      </View>
      <View style={common.inputView}>
        <TextInput placeholder="Enter Password" secureTextEntry />
      </View>
      <View>
        <Button title="SignIn" onPress={signIn} />
      </View>
      <View>
        <Button title="Create User" onPress={goToCreateUser} />
      </View>
    </View>
  );
};

export default Login;
