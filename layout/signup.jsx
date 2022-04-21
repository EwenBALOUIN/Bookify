import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Logo from '../components/Logo';

export default () => {
  return (
    <View
      View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
    >
      <Logo width="185" height="185" />
      <Input placeholder="SignUp" />
      <Input placeholder="Password" />
      <Button label="Sign up" />
    </View>
  );
};
