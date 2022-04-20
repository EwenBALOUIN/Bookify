import { StyleSheet, Text, View } from 'react-native';
import Login from './layout/login';
import Signup from './layout/signup';
import Calendar from './layout/calendar';
import { ThemeProvider } from '@rneui/themed';
import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Login />
        {/* <Signup/> */}
        {/* <Calendar/> */}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
