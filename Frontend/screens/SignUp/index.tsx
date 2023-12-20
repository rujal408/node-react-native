import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { RootStackType } from '../../App';
import common from '../../styles/common';
import axios from 'axios';
import env from '../../constants/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

type IProps = NativeStackScreenProps<RootStackType, 'SignUp'>;

const SignUp = (props: IProps) => {
  const { navigation } = props;
  const [info, setInfo] = useState({ name: '', email: '', username: '', password: '' });

  const createUser = async () => {
    try {
      const res = await axios.post(`${env.BASE_URL}/users`, info);
      const { data } = res;
      AsyncStorage.setItem('token', data.token);
      navigation.navigate('Dashboard');
    } catch (err) {}
  };

  const handleChange = (n: string) => {
    return (val: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setInfo((th) => ({ ...th, [n]: val }));
    };
  };

  return (
    <View style={common.container}>
      <Text style={common.header}>Shop And Mall</Text>
      <View style={common.inputView}>
        <TextInput onChange={handleChange('name')} placeholder="Enter Fullname" />
      </View>
      <View style={common.inputView}>
        <TextInput onChange={handleChange('email')} placeholder="Enter Email" />
      </View>
      <View style={common.inputView}>
        <TextInput onChange={handleChange('username')} placeholder="Enter Username" />
      </View>
      <View style={common.inputView}>
        <TextInput
          onChange={handleChange('password')}
          placeholder="Enter Password"
          secureTextEntry
        />
      </View>
      <View>
        <Button title="SignUp" onPress={createUser} />
      </View>
    </View>
  );
};

export default SignUp;
