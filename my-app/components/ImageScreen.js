import React from 'react';
import {StyleSheet, Text, View, Image, Button, ActivityIndicator, ListView, TouchableHighlight} from 'react-native';

export default class ImageScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: `${navigation.state.params.id}`,
  // });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Image source={{ uri: params.id }} style={{ flex: 1, }} resizeMode="contain"/>
    );
  }
}


