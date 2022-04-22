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
      <Logo width="185" height="185" viewBox="0 0 185 185" containerStyle={styles.logo} />
      <Input placeholder="Email" secure={false} containerStyle={styles.inputStyle} />
      <Input placeholder="Password" secure containerStyle={styles.inputStyle} />
      <Button label="Login" containerStyle={styles.buttonStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    maxWidth: '55%',
    paddingTop: 5,
  },
  buttonStyle: {
    marginTop: 5,
  },
});
