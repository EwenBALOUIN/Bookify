import { View, StyleSheet, ScrollView } from 'react-native';
import Title from './../container/title';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from './../components/Searchbar';
import { Text } from '@rneui/themed';

export default () => {
  return (
    <View style={styles.contentView}>
      <Title text="Vos clients" />
      <SearchBar />
      <ScrollView>
        <LinearGradient
          colors={['#6C0263', '#6c02639d']}
          stop={{ x: 0.1, y: 0.01 }}
          style={styles.card}
        >
          <Text style={styles.nameText}>Guillaume</Text>
          <Text style={styles.nameText}>Charpentier</Text>
          <Text style={styles.pointText}>116 Pts</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#6C0263', '#6c02639d']}
          stop={{ x: 0.1, y: 0.01 }}
          style={styles.card}
        >
          <Text style={styles.nameText}>Guillaume</Text>
          <Text style={styles.nameText}>Charpentier</Text>
          <Text style={styles.pointText}>116 Pts</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#6C0263', '#6c02639d']}
          stop={{ x: 0.1, y: 0.01 }}
          style={styles.card}
        >
          <Text style={styles.nameText}>Guillaume</Text>
          <Text style={styles.nameText}>Charpentier</Text>
          <Text style={styles.pointText}>116 Pts</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#6C0263', '#6c02639d']}
          stop={{ x: 0.1, y: 0.01 }}
          style={styles.card}
        >
          <Text style={styles.nameText}>Guillaume</Text>
          <Text style={styles.nameText}>Charpentier</Text>
          <Text style={styles.pointText}>116 Pts</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#6C0263', '#6c02639d']}
          stop={{ x: 0.1, y: 0.01 }}
          style={styles.card}
        >
          <Text style={styles.nameText}>Guillaume</Text>
          <Text style={styles.nameText}>Charpentier</Text>
          <Text style={styles.pointText}>116 Pts</Text>
        </LinearGradient>
      </ScrollView>
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
    display: 'flex',
    borderRadius: 15,
    flexDirection: 'column',
    marginTop: '3%',
    marginLeft: '15%',
    marginRight: '15%',
    shadowColor: '#969696',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    padding: '5%',
  },
  pointText: {
    fontFamily: 'Poppins_700Bold',
    paddingTop: '20%',
    paddingLeft: '75%',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  nameText: {
    fontFamily: 'Poppins_700Bold',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
