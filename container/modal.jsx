import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';

export default () => {
  return (
    <View style={styles.contentView}>
      <Input placeholder="Nom" secure={false} />
      <Input placeholder="BirthDate" secure={false} />
      <Input placeholder="PhoneNumber" secure={false} />
      <Input placeholder="Notes" secure={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    display: 'flex',
    borderRadius: '5%',
    flexDirection: 'column',
    margin: '15%',
    backgroundColor: 'white',
    shadowColor: '#969696',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    padding: '5%',
  },
});
