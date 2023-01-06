import { FlatList, Pressable, Image } from 'react-native';

const HomeIcon = require('../assets/img/home.png');
const LocationIcon = require('../assets/img/location.png');
const CameraIcon = require('../assets/img/camera.png');
const BellIcon = require('../assets/img/bell.png');
const UserIcon = require('../assets/img/user-icon.png');

import styles from '../styles/BottomMenu.js';

export type Props = {
    navigation: Navigation;
};

export interface Navigation {
    navigate: Function;
}

const BottomCard: React.FC<Props> = ({ navigation }) => {
    const menu = [
        {key: 'Search', icon: HomeIcon},
        {key: 'Map', icon: LocationIcon},
        {key: 'Home-1', icon: CameraIcon},
        {key: 'Home-2', icon: BellIcon},
        {key: 'Profile', icon: UserIcon},
    ]

    return (
        <FlatList
            data={menu}
            horizontal={true}
            renderItem={({item}) => (
                <Pressable onPress={() => navigation.navigate(item.key.includes('Home') ? 'Home' : item.key)} style={styles.iconButton}>
                    <Image source={item.icon} style={styles.image} />
                </Pressable>
            )}
            contentContainerStyle={styles.menuContainer}
        />
    );
  }

  export default BottomCard;