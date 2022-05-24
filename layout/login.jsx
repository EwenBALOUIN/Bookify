import React, { useState } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import Input from './../components/Input';
import Button from './../components/Button';
import Logo from './../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { credentials } from '../mock/customer.json';

export default () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const checkCredentials = () => {
    const user = credentials.find((user) => user.username == login);
    if (user && user.password == password) {
      navigation.navigate('Home', { params: { user: user.id } });
    }
  };
  return (
    <View
      View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
    >
      <Logo width="185" height="185" viewBox="0 0 185 185" containerStyle={styles.logo} />
      <Input
        placeholder="Email"
        secure={false}
        containerStyle={styles.EmailStyle}
        onChangeText={(newLogin) => setLogin(newLogin)}
      />
      <Input
        placeholder="Password"
        secure
        containerStyle={styles.inputStyle}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Button label="Login" containerStyle={styles.buttonStyle} onPress={checkCredentials} />
      <Text
        label="Login"
        containerStyle={styles.textStyle}
        onPress={() => navigation.navigate('SignUp')}
      >
        S'enregister
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  EmailStyle: {
    maxWidth: '55%',
    paddingTop: 125,
  },
  inputStyle: {
    maxWidth: '55%',
    paddingTop: 5,
  },
  buttonStyle: {
    marginTop: 6,
  },
});
