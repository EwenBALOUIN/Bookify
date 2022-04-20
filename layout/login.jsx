import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Logo from '../components/Logo';

export default () => {
  return (
    <View style={styles.contentView}>
      <Logo width="185" height="185" viewBox="0 0 185 185" />
      <Input placeholder="Login" />
      <Input placeholder="Password" />
      <Button label="Login" />
    </View>
  );
};
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
