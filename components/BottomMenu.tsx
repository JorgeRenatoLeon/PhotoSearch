import { StyleSheet, Image, Pressable, View } from 'react-native';

const HomeIcon = require('../assets/svg/home.svg');
const LocationIcon = require('../assets/svg/location.svg');
const ChatIcon = require('../assets/svg/chat.svg');
const BellIcon = require('../assets/svg/bell.svg');
const UserIcon = require('../assets/svg/user.svg');

import styles from '../styles/BottomCard.js';

export type Props = {
    navigation: Navigation;
};

export interface Navigation {
    navigate: Function;
}

const BottomCard: React.FC<Props> = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Search')}>
            <Image source={HomeIcon} style={styles.image}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Map')}>
            <Image source={LocationIcon} style={styles.image}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={ChatIcon} style={styles.image}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={BellIcon} style={styles.image}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Profile')}>
            <Image source={UserIcon} style={styles.image}/>
        </Pressable>
      </View>
    );
  }

  export default BottomCard;