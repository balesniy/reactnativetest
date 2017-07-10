import React from 'react';
import {StyleSheet, Text, View, Image, Button, ActivityIndicator, ListView, TouchableHighlight} from 'react-native';

export default (props) =>
  <TouchableHighlight onPress={props.onPress}>
    <View style={styles.container}>
      <Image source={{ uri: props.uri }} style={styles.image}/>
      <Text>{props.name}</Text>
      <Text>{props.user}</Text>
    </View>
  </TouchableHighlight>

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width:  120,
    height: 200
  },
  image: {
    width: 100,
    height: 100,
  }
});




