import { View, StyleSheet } from 'react-native';
import Title from './../container/title';
import SearchBar from './../components/Searchbar';
import { Text } from '@rneui/themed';

export default () => {
  return (
    <View style={styles.contentView}>
      <Title text="Vos clients" />
      <SearchBar />
      <View style={styles.card}>
        <Text style={styles.nameText}>Guillaume Charpentier</Text>
        <Text style={styles.pointText}>116 Pts</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.nameText}>Guillaume Charpentier</Text>
        <Text style={styles.pointText}>116 Pts</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.nameText}>Guillaume Charpentier</Text>
        <Text style={styles.pointText}>116 Pts</Text>
      </View>
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
  card: {
    flex: 3,
    display: 'flex',
    borderRadius: 15,
    flexDirection: 'column',
    margin: '15%',
    backgroundColor: '#6C0263',
    shadowColor: '#969696',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    padding: '5%',
  },
  pointText: {
    paddingTop: '30%',
    paddingLeft: '75%',
    color: '#ffffff',
  },
  nameText: {
    color: '#ffffff',
  },
});
