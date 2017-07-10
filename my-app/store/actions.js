import {createAction} from 'redux-actions';
import {ListView} from 'react-native';

export const fetchPage = createAction('FETCH_PAGE', async id => {
  try {
    const result = await fetch(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${id}`);
    const responseJson = await result.json();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return ds.cloneWithRows(responseJson.photos)
  } catch (e) {
    console.error(e);
  }
});