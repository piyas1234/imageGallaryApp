import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

 const Loading =()=> {
 
    
    return (
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>loading...</Text>
      </AnimatedLoader>
    );
  }

export default Loading;

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});