import { View, StyleSheet } from 'react-native';
import Logo from './../components/Logo';
import { Text, useTheme } from '@rneui/themed';
import theme from './../styles/theme';

export default (props) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.contentView}>
      <Logo width="32px" height="32px" viewBox="0 0 185 185" />
      <Text style={styles.titleText}>{props.text}</Text>
    </View>
  );
};
const makeStyles = (theme) =>
  StyleSheet.create({
    contentView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: theme.colors.darkGrey,
      paddingLeft: 15,
      includeFontPadding: true,
    },
  });
