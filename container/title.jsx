import { View, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import { Text } from '@rneui/themed';

export default (props) => {
  return (
    <View style={styles.contentView}>
      <Logo width="32px" height="32px" viewBox="0 0 185 185" />
      <Text style={styles.titleText}>{props.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#393E40',
    paddingLeft: 15,
    includeFontPadding: true,
  },
});
