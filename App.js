import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './layout/login';
import SignUpScreen from './layout/signup';
import CustomerScreen from './layout/customer';
import LoyaltyCardsScreen from './layout/loyaltycards';
import CalendarScreen from './layout/calendar';
import { ThemeProvider } from '@rneui/themed';
import theme from './styles/theme';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Calendar') {
            return <IconFa name="calendar" size={30} color={'#ffffff'} />;
          }
          if (route.name === 'User') {
            return <IconFeather name="users" size={30} color={'#ffffff'} />;
          }
        },
        headerShown: false,
        tabBarActiveBackgroundColor: '#6c0263',
        tabBarInactiveBackgroundColor: '#6c0263',
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            backgroundColor: '#6c0263',
            padding: 5,
          },
        ],
      })}
    >
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="User" component={LoyaltyCardsScreen} />
    </Tab.Navigator>
  );
};

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
              name="Customer"
              component={CustomerScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}
