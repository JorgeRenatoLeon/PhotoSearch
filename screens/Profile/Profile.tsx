
import React from 'react';
import { Text, View } from 'react-native';

import TopNavBar from '../../components/TopNavBar';
import BottomMenu, { Navigation } from '../../components/BottomMenu';
import UserInformation from './components/UserInformation';
import MyPhotos from './components/MyPhotos';

import styles from './assets/styles/Profile.js';

const UserImage = require('../../assets/img/user.png');

export type Props = {
    navigation: Navigation;
};

const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopNavBar />
      <View style={styles.feed} >
        <UserInformation />
        <MyPhotos />
      </View>
      <BottomMenu navigation={navigation}/>
    </View>
  );
}

export default Profile;