import { StyleSheet, Text, View } from 'react-native';
import Login from './layout/login';
import Signup from './layout/signup';
import Calendar from './layout/calendar';
import LoyaltyCards from './layout/loyaltycards';
import { ThemeProvider } from '@rneui/themed';
import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        {/* <Login /> */}
        {/* <Signup/> */}
        {/*<Calendar />*/}
        <LoyaltyCards />
      </View>
    </ThemeProvider>
  );
}
