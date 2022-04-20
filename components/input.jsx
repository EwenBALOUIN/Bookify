import { Input } from '@rneui/themed';

export default (props) => {
  return <Input placeholder={props.placeholder} secureTextEntry={props.secure} />;
};
