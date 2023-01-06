
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import styles from '../assets/styles/UserInformation.js';

const CameraIcon = require('../../../assets/svg/camera.svg');
const LikeIcon = require('../../../assets/svg/like.svg');
const FollowersIcon = require('../../../assets/svg/followers.svg');

export type Props = {
};

const UserInformation: React.FC<Props> = () => {

    const user = {
        name: 'John Doe',
        username: 'johndoe',
        userImage: 'https://i.pravatar.cc/150?img=1',
        photos: 100,
        score: 1000,
        followers: 1000
    }

    return (
        <Text style={styles.baseText}>
            <View style={styles.container} >
              <Image source={{ uri: user.userImage }} style={styles.userImage} />
              <View style={styles.userDetails}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.username}>@{user.username}</Text>
                <View style={styles.accountDetails}>
                    <View style={styles.accountSection}>
                        <Text style={styles.label}>Photos</Text>
                        <View style={styles.quantity}>
                            <Image source={CameraIcon} style={styles.icon} />
                            <Text style={styles.quantityLabel}>{user.photos}</Text>
                        </View>
                    </View>
                    <View style={styles.accountSection}>
                        <Text style={styles.label}>Score</Text>
                        <View style={styles.quantity}>
                            <Image source={LikeIcon} style={styles.icon} />
                            <Text style={styles.quantityLabel}>{user.score}</Text>
                        </View>
                    </View>
                    <View style={styles.accountSection}>
                        <Text style={styles.label}>Followers</Text>
                        <View style={styles.quantity}>
                            <Image source={FollowersIcon} style={styles.icon} />
                            <Text style={styles.quantityLabel}>{user.followers}</Text>
                        </View>
                    </View>
                </View>
                <Pressable style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </Pressable>
              </View>
            </View>
        </Text>
    );
}

export default UserInformation;