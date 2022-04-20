import { View, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import Label from '../components/Label';

export default () => {
  return (
    <View style={styles.contentView}>
      <Logo width="18" height="18" />
      <Label />
    </View>
  );
};
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
