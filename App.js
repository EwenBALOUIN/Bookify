import { StyleSheet, Text, View } from 'react-native';
import Login from './layout/login';
import Signup from './layout/signup';
import Calendar from './layout/calendar';
import Modal from './container/modal';
import LoyaltyCards from './layout/loyaltycards';
import { ThemeProvider } from '@rneui/themed';
import theme from './styles/theme';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        {/* <Login /> */}
        {/* <Signup/> */}
        <Calendar />
        {/* <Modal /> */}
        {/* <LoyaltyCards /> */}
      </View>
    </ThemeProvider>
  );
}
