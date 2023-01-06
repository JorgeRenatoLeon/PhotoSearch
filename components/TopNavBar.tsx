
import { Image, Pressable, Text, View } from 'react-native';

const LogoImage = require('../assets/img/logo.png');
const MenuImage = require('../assets/img/menu.png');

import styles from '../styles/TopNavBar.js';

export type Props = {
};

const TopNavBar: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.image}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>PhotoSearch</Text>
      </View>
      <Pressable style={styles.menuButton}>
          <Image source={MenuImage} style={styles.menuImage}/>
      </Pressable>
    </View>
  );
}

export default TopNavBar