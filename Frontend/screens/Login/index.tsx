import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Login: React.FC = () => {
  return (
    <View>
      <View>
        <TextInput placeholder="Username" />
      </View>
      <View>
        <TextInput placeholder="Password" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
