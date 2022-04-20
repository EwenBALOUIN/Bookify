import { View, StyleSheet } from 'react-native';
import Logo from '../components/Logo'

export default () => {
  return (
      <View style={styles.contentView}>
        <Logo width="30%" height="30%" viewBox="0 0 185 185" />
        <Logo width="30%" height="30%" viewBox="0 0 185 185" />
      </View>
  );

}
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
})