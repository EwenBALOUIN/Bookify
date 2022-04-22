import { View, StyleSheet, ScrollView, TouchableHighlight, Text } from 'react-native';
import { useState } from 'react';
import Title from '../container/title';
import Modal from './../container/modal';
import DeleteButton from './../components/DeleteButton';
import PlusButton from './../components/PlusButton';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.contentView}>
      <Title text="Guillaume" />
      <ScrollView style={styles.scrollView}>
        <Modal style={styles.modalView} />
        <View style={styles.logoView}>
          <DeleteButton style={styles.iconStyle} />
          <PlusButton style={styles.iconStyle} />
        </View>
        <Text> {count || null}</Text>
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
  scrollView: {
    paddingTop: 10,
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
