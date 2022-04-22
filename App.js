import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './layout/login';
import SignUpScreen from './layout/signup';
import CalendarScreen from './layout/calendar';
import CustomerScreen from './layout/customer';
import LoyaltyCardsScreen from './layout/loyaltycards';
import Modal from './container/modal';
import { ThemeProvider } from '@rneui/themed';
import theme from './styles/theme';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" options={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Customer"
              component={CustomerScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoyaltyCards"
              component={LoyaltyCardsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}
