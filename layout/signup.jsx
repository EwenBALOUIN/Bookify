import { View, StyleSheet } from 'react-native';
import Input from './../components/Input';
import Button from './../components/Button';
import Logo from './../components/Logo';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  return (
    <View
      View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
    >
      <Logo width="185" height="185" viewBox="0 0 185 185" containerStyle={styles.logo} />
      <Input placeholder="Email" secure={false} containerStyle={styles.EmailStyle} />
      <Input placeholder="Password" secure containerStyle={styles.inputStyle} />
      <Button
        label="Sign up"
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Calendar')}
      />
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
