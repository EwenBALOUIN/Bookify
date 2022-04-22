import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconOcticons from 'react-native-vector-icons/Octicons';
import { useTheme } from '@rneui/themed';

export default () => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.contentView}>
      <View style={styles.inputView}>
        <IconFeather name="users" size={24} style={styles.iconStyle} />
        <Input placeholder="Name" secure={false} containerStyle={styles.input} />
      </View>
      <View style={styles.inputView}>
        <IconFa name="calendar" size={24} style={styles.iconStyle} />
        <Input placeholder="BirthDate" secure={false} containerStyle={styles.input} />
      </View>
      <View style={styles.inputView}>
        <IconFeather name="smartphone" size={24} style={styles.iconStyle} />
        <Input placeholder="PhoneNumber" secure={false} containerStyle={styles.input} />
      </View>
      <View style={styles.inputView}>
        <IconOcticons name="note" size={24} style={styles.iconStyle} />
        <Input placeholder="Notes" secure={false} containerStyle={styles.input} />
      </View>
    </View>
  );
};

const makeStyles = (theme) =>
  StyleSheet.create({
    contentView: {
      display: 'flex',
      borderRadius: 15,
      flexDirection: 'column',
      backgroundColor: 'white',
      shadowColor: '#969696',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.4,
      shadowRadius: 10,
      margin: '5%',
      padding: '2%',
      color: '#9A98A0',
    },
    inputView: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: '5%',
      paddingRight: '5%',
      // alignItems: 'center',
      // alignContent: 'center',
    },
    iconStyle: {
      alignItems: 'center',
      alignSelf: 'center',
      color: theme.colors.grey,
    },
    input: {
      width: '92%',
      paddingTop: 20,
      paddingLeft: 20,
      color: theme.colors.grey,
    },
  });
