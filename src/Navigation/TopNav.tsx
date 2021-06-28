import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavbarContext} from '../Global/Context';
const TopNav = () => {
  const {sildeNav, setSildeNav}: any = useContext(NavbarContext);
  console.log(sildeNav);
  return (
    <View style={styles.main}>
      <MaterialIcons
        color="white"
        onPress={() => setSildeNav(!sildeNav)}
        size={50}
        name="menu"
      />
      <TextInput
        placeholderTextColor="white"
        placeholder="#Search Image..."
        style={styles.input}
      />
      <MaterialIcons color="white" size={50} name="search" />
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
