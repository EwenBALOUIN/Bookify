import {Button} from '@rneui/themed'

export default (props) =>{ return(
<Button
  title={props.label}
  titleStyle={{ fontWeight: '700' }}
  buttonStyle={{
    backgroundColor: 'rgba(92, 99,216, 1)',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
  }}
  containerStyle={{
    width: 200,
    height: 45,
    marginHorizontal: 50,
    marginVertical: 10,
  }}
/>)}
