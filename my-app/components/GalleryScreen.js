import React from 'react';
import {StyleSheet, Text, View, Image, Button, ActivityIndicator, ListView, TouchableHighlight} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPage} from '../store/actions'

import ImageElement from './ImageElement'

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators({ fetchPage }, dispatch)
  }
}

class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'Gallery',
  };

  componentDidMount() {
    this.props.pageActions.fetchPage(1);
  }

  _onPressButton({ id }) {
    this.props.navigation.navigate('Image', { id })
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={{
          flex:       1,
          paddingTop: 20
        }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Text style={{alignSelf:'center'}}>Страница {this.props.currentPage}</Text>

        <ListView contentContainerStyle={styles.list}
          dataSource={this.props.data}
          renderRow={(rowData) =>
            <ImageElement
              name={rowData.name}
              user={rowData.user.username}
              uri ={rowData.image_url}
              onPress = {() => this._onPressButton({ id: rowData.image_url })}
            />}
        />
        <Button
          onPress={() => {
            this.props.pageActions.fetchPage(this.props.currentPage + 1);
          }}
          title={'Следующая'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});

export default connect(state => state, mapDispatchToProps)(GalleryScreen)