import { View, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import { Text } from '@rneui/themed';

export default () => {
  return (
      <View style={styles.contentView}>
        <Logo width="20%" height="20%" viewBox="0 0 185 185" />
        <Text style={styles.titleText}>  Vos rendez-vous</Text>
      </View>
  );
};
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    flex: 1,
    fontSize: '1.6em',
    fontWeight : 'bold'
    
  },
})
