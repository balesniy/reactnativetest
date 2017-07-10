import React from 'react';
import store from './store/store'
import {Provider} from 'react-redux';
import NavigationContainer from './components/NavigationContainer'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    );
  }
}
export default App

