import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavbarContext} from '../Global/Context';

const SideNav = () => {
  const {sildeNav, setSildeNav}: any = useContext(NavbarContext);
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text
          onPress={() => {
            navigator.navigate('Home');
            setSildeNav(!sildeNav);
          }}
          style={styles.text}>
          +Home
        </Text>
        <Text
          onPress={() => {
            navigator.navigate('About');
            setSildeNav(!sildeNav);
          }}
          style={styles.text}>
          +About
        </Text>
        <Text
          onPress={() => {
            navigator.navigate('Login');
            setSildeNav(!sildeNav);
          }}
          style={styles.text}>
          +Accounts
        </Text>
      </View>
    </View>
  );
};

export default SideNav;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
  },
  main: {
    width: '60%',
    height: '100%',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    letterSpacing: 5,
    padding: 8,
    color: 'gray',
    fontWeight: 'bold',
    backgroundColor: '#afff',
    marginTop: 10,
    elevation: 5,
  },
});
