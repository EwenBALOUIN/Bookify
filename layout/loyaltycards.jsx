import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Title from './../container/title';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, SearchBar, useTheme } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { customers } from '../mock/customer.json';

import React, { useState } from 'react';

export default ({ clicked }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [customerState, setCustomerState] = useState([]);

  const updateSearch = (search) => {
    setCustomerState(
      customers.filter(
        (customer) => customer.firstName.includes(search) || customer.lastName.includes(search)
      )
    );
    setSearch(search);
  };

  return (
    <View style={styles.contentView}>
      <Title text="Vos clients" />
      <SearchBar
        platform="default"
        containerStyle={{
          margin: 15,
          alignSelf: 'center',
          width: '50%',
          backgroundColor: '#FFFFFF',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
          shadowColor: '#969696',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          borderRadius: 15,
        }}
        inputContainerStyle={{
          flexDirection: 'row',
          width: '95%',
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          alignItems: 'center',
          shadowColor: '#969696',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.4,
          shadowRadius: 10,
        }}
        inputStyle={{
          fontSize: 20,
          marginLeft: 10,
          width: '90%',
        }}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onChangeText={updateSearch}
        value={search}
        onClearText={() => console.log(onClearText())}
        placeholder=""
        placeholderTextColor="#888"
        cancelButtonTitle="Cancel"
        cancelButtonProps={{}}
        onCancel={() => console.log(onCancel())}
      />

      <ScrollView>
        {search.length == 0 &&
          customers.map((customer) => (
            <Pressable
              key={customer.id}
              onPress={() => navigation.navigate('Customer', { params: { user: customer.id } })}
            >
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.primaryGradient]}
                stop={{ x: 0.1, y: 0.01 }}
                style={styles.card}
              >
                <Text style={styles.nameText}>{customer.firstName}</Text>
                <Text style={styles.nameText}>{customer.lastName}</Text>
                <Text style={styles.pointText}>{customer.points} Pts</Text>
              </LinearGradient>
            </Pressable>
          ))}
        {search.length > 0 &&
          customerState.map((customer) => (
            <Pressable
              key={customer.id}
              onPress={() => navigation.navigate('Customer', { params: { user: customer.id } })}
            >
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.primaryGradient]}
                stop={{ x: 0.1, y: 0.01 }}
                style={styles.card}
              >
                <Text style={styles.nameText}>{customer.firstName}</Text>
                <Text style={styles.nameText}>{customer.lastName}</Text>
                <Text style={styles.pointText}>{customer.points} Pts</Text>
              </LinearGradient>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: '10%',
    backgroundColor: 'white',
  },
  card: {
    display: 'flex',
    borderRadius: 15,
    flexDirection: 'column',
    marginTop: '3%',
    marginLeft: '15%',
    marginRight: '15%',
    shadowColor: '#969696',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    padding: '5%',
  },
  pointText: {
    fontFamily: 'Poppins_700Bold',
    paddingTop: '20%',
    paddingLeft: '75%',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  nameText: {
    fontFamily: 'Poppins_700Bold',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    alignSelf: 'center',
    width: '50%',
    backgroundColor: '#FFFFFF',
  },
});
