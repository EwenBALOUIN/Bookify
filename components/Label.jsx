import { Text, useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export default (props) => {
  const { theme } = useTheme();

  return (
    <Text style={styles.text} h1Style={{ color: theme.colors.primary }}>
      {' '}
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    padding: 5,
  },
});
