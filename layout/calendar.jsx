import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';

import Login from './login';
import Signup from './signup';

const CalendarScreen = () => {
  return <Login />;
};

const CustomerScreen = () => {
  return <Signup />;
};

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Calendar') {
              return <IconFa name="calendar" size={30} color={'black'} />;
            } else if (route.name === 'Users') {
              return <IconFeather name="users" size={30} color={'black'} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Users" component={CustomerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
