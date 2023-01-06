
import { View } from 'react-native'

import TopNavBar from '../../components/TopNavBar';
import BottomMenu, { Navigation } from '../../components/BottomMenu'
import { ImageBackground } from 'react-native-web';

import styles from './assets/styles/Map';

const MapView = require('./assets/img/MapView.png');

export type Props = {
  navigation: Navigation;
};

const Map: React.FC<Props> = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TopNavBar />
        <View style={styles.feed} >
            <ImageBackground source={MapView} style={styles.image} resizeMode="cover"/>
        </View>
        <BottomMenu navigation={navigation}/>
      </View>
    );
}

export default Map;