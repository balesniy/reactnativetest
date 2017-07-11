import {ListView} from 'react-native';

export default {
  loading:     true,
  currentPage: 0,
  data:        new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
  _data:       []
};