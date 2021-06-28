import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {View, TouchableOpacity, Image} from 'react-native';
import CachedImage from 'react-native-image-cache-wrapper';
interface ImageCartProps {
  item: {
    id:String;
    title: String;
    url_s: String;
  };
}
const ImageCart = (props: ImageCartProps) => {
  const {url_s , title , id} = props.item;
  const navigator = useNavigation();
 
  return (
    // <Pressable>
    <TouchableOpacity
      onPress={() => navigator.navigate('Detail',{id:id})}
      style={styles.container}>
      <View style={styles.main}>
        <CachedImage style={styles.image} source={{uri: url_s}} />
      </View>
    </TouchableOpacity>
    // </Pressable>
  );
};

export default ImageCart;
const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  main: {
    borderWidth: 5,
    borderColor: 'white',
    width: '100%',
    height: 200,
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: '100%',
    width: '100%',
  },
});
