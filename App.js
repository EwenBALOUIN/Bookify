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
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme} style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        {/* <Login /> */}
        {/* <Signup/> */}
        <Calendar />
        {/* <Modal /> */}
        {/* <LoyaltyCards /> */}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
