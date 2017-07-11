import {createAction} from 'redux-actions';

export const fetchPage = createAction('FETCH_PAGE', async id => {
  try {
    const result = await fetch(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${id}`);
    const responseJson = await result.json();
    return responseJson.photos
  } catch (e) {
    console.error(e);
  }
});