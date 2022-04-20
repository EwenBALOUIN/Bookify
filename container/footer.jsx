import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import { Tab, Text, TabView } from '@rneui/themed';
import Login from './../layout/login';
import SignUp from './../layout/signup';

const iconFa = <IconFA name="calendar" size={30} color="#FFFFFF" />;
const iconFeather = <IconFeather name="users" size={30} color="#FFFFFF" />;

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Login"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="SignUp"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item>
          <Login />
        </TabView.Item>
        <TabView.Item>
          <SignUp />
        </TabView.Item>
      </TabView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    flexDirection: 'column',
  },
});
