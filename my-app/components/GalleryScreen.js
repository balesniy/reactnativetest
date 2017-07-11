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
    return (
      <View style={{ flex: 1 }}>
        <ListView contentContainerStyle={styles.list}
                  dataSource={this.props.data}
                  onEndReached={() => this.props.pageActions.fetchPage(this.props.currentPage + 1)}
                  renderRow={(rowData) =>
                    <ImageElement
                      name={rowData.name}
                      user={rowData.user.username}
                      uri={rowData.image_url}
                      onPress={() => this._onPressButton({ id: rowData.image_url })}
                    />}
        />
        {this.props.loading ?
         <View style={{ paddingBottom: 10 }}>
           <ActivityIndicator />
         </View>
          : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
    flexDirection:  'row',
    flexWrap:       'wrap'
  },
});

export default connect(state => state, mapDispatchToProps)(GalleryScreen)