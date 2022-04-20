import { View, StyleSheet } from 'react-native';
import Title from '../container/title';
import Footer from '../container/footer';
import { Text } from '@rneui/themed';

export default () => {
  return (
    <View style={styles.contentView}>
      <Title />
      <Text h2> Nicolas B est votre prochain client</Text>
      <Footer />
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
