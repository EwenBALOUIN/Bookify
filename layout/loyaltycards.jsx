import { View, StyleSheet } from 'react-native';
import Title from './../container/title';

export default () => {
  return (
    <View style={styles.contentView}>
      <Title />
    </View>
  );
};
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '10%',
  },
});
