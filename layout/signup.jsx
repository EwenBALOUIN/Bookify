import { View } from 'react-native';
import Input from './../components/input'
import Button from './../components/button'

export default () => {
  return (
      <View >
        <Input placeholder="SignUp" />
        <Input placeholder="Password"/>
        <Button/>
      </View>
  );

}
