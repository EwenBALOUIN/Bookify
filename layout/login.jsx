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
      <Logo width="185" height="185" viewBox="0 0 185 185" />
      <Input placeholder="Email" secure={false} />
      <Input placeholder="Password" secure />
      <Button label="Login" />
    </View>
  );
};
