import { View, StyleSheet } from 'react-native';
import Title from './../container/title';

export default () => {
  return (
    <View style={styles.contentView}>
      <Title text="Vos clients" />
    </View>
  );
};
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: '10%',
    backgroundColor: 'white',
  },
});
