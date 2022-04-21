import { StyleSheet, Text, View } from 'react-native';
import Login from './layout/login';
import Signup from './layout/signup';
import Calendar from './layout/calendar';
import Modal from './container/modal';
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
        {/* <Modal /> */}
        <LoyaltyCards />
      </View>
    </ThemeProvider>
  );
}
