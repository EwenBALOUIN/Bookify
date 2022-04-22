import { View, StyleSheet, ScrollView } from 'react-native';
import Title from '../container/title';
import { Text } from '@rneui/themed';
import Modal from './../container/modal';
import DeleteButton from './../components/DeleteButton';
import PlusButton from './../components/PlusButton';

export default () => {
  return (
    <View style={styles.contentView}>
      <Title text="Guillaume" />
      <ScrollView>
        <Modal style={styles.modalView} />
        <View style={styles.logoView}>
          <DeleteButton style={styles.iconStyle} />
          <PlusButton style={styles.iconStyle} />
        </View>
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
  logoView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  modalView: {
    marginTop: 20,
  },
  iconStyle: {
    marginTop: 40,
    marginRight: 10,
    marginLeft: 10,
  },
});
