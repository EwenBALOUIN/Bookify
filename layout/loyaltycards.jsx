import { View, StyleSheet } from 'react-native';
import Title from './../container/title';
import SearchBar from './../components/searchbar';

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
