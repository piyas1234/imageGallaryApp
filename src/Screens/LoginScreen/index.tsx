import {useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import TopNav from '../../Navigation/TopNav';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <TopNav />
      <View style={styles.main}>
        <Text style={styles.loginbox}>Login</Text>
        <TextInput placeholder="Enter Your Email" style={styles.input} />
        <TextInput placeholder="Enter Your Password" style={styles.input} />
        <View style={styles.input}>
          <Button title="Login" />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '30%',
    backgroundColor: 'white',
    paddingVertical: 50,
    borderRadius: 10,
    margin: 20,
  },
  loginbox: {
    backgroundColor: 'tomato',
    padding: 10,
    margin: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor: '#fdde',
    margin: 15,
  },

  button: {
    width: 100,
    borderRadius: 5,
    alignItems: 'center',
  },
});
