import GalleryScreen from './GalleryScreen'
import ImageScreen from './ImageScreen'
import {StackNavigator} from 'react-navigation';

export default StackNavigator({
  Gallery: { screen: GalleryScreen},
  Image:   { screen: ImageScreen },
});