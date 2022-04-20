import { Input } from '@rneui/themed';

export default (props) => {
  return (
    <Input
      containerStyle={{
        width: 200,
        height: 45,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      placeholder={props.placeholder}
      secureTextEntry={props.secure}
    />
  );
};
