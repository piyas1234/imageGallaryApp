import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavbarContext} from './../../Global/Context';

const Pagination = () => {
  const {pagination, setPagination,setSearch}: any = useContext(NavbarContext);
  console.log(pagination);

  const onPressHandler = (count: number) => {
      setSearch('')
    count > 0 && setPagination(count);
  };

  return (
    <View style={styles.main}>
      <Button onPress={() => onPressHandler(pagination - 1)} title="privious" />
      <Button
        onPress={() => onPressHandler(pagination)}
        title={`${pagination}`}
      />
      <Button
        onPress={() => onPressHandler(pagination + 1)}
        title={`${pagination + 1}`}
      />
      <Button
        onPress={() => onPressHandler(pagination + 2)}
        title={`${pagination + 2}`}
      />
      <Button
        onPress={() => onPressHandler(pagination + 3)}
        title={`${pagination + 3}`}
      />
      <Button
        onPress={() => onPressHandler(pagination + 4)}
        title={`${pagination + 4}`}
      />
      <Button
        onPress={() => onPressHandler(pagination + 5)}
        title={`${pagination + 5}`}
      />

      <Button onPress={() => onPressHandler(pagination + 1)} title="Next" />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
