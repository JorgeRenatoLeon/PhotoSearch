
import { ImageBackground, Text, View } from 'react-native';
import BottomCard, { Navigation } from './components/BottomCard';

import styles from './assets/styles/Home.js'

const BackgroundImage = require('../../assets/img/appBackground.png');

export type Props = {
    navigation: Navigation;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.image} resizeMode="cover">
          <BottomCard navigation={navigation}/>
      </ImageBackground>
    </View>
  );
}

export default Home