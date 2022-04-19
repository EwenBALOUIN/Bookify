import { View } from 'react-native';
import Input from './../components/input'
import Button from './../components/button'
import Logo from './../components/logo'

export default () => {
  return (
      <View >
        <Logo />
        <Input placeholder="Login" />
        <Input placeholder="Password"/>
        <Button label="Login" />
      </View>
  );

}
