import React, {useContext, useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavbarContext} from '../Global/Context';
const TopNav = () => {
  const {sildeNav, setSildeNav, search, setSearch}: any = useContext(NavbarContext);
  const [input, setInput] = useState('')
  console.log(search);

  return (
    <View style={styles.main}>
      <MaterialIcons
        color="white"
        onPress={() => setSildeNav(!sildeNav)}
        size={50}
        name="menu"
      />
      <TextInput
        onChangeText={text => setInput(text)}
        placeholderTextColor="white"
        placeholder="#Search Image..."
        style={styles.input}
      />
       <TouchableOpacity onPress={()=>setSearch(input)}>
       <MaterialIcons color="white" size={50} name="search" />
       </TouchableOpacity>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#b300ff',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderColor: 'white',
    width: '75%',
    borderRadius: 5,
    shadowColor: 'white',
    elevation: 5,
  },
});
