
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import TopNavBar from '../../components/TopNavBar';
import MyCollections from './components/MyCollections';
import ActivityFeed from './components/ActivityFeed';
import BottomMenu from '../../components/BottomMenu'

import styles from './assets/styles/Search.js';

const UserImage = require('../../assets/img/user.png');

import { getRandomPhotos, getPhotosByCollection } from '../../api/photos';

export type Props = {
    navigation: Object;
};

const Search: React.FC<Props> = ({ navigation }) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getRandomPhotos()
        .then(response => {
            console.log(response)
            const newPosts = response.data.map(photo => {
                return {
                    image: photo.urls.full,
                    user: photo.user.name,
                    created: photo.created_at,
                    location: photo.user.location ? photo.user.location : 'Cerro Nutibara',
                    content: photo.description ? photo.description : 'From my recent cretive photoshoot of the city',
                    userImage: photo.user['profile_image'] ? photo.user['profile_image'].large : UserImage
                }
            })
            console.log(newPosts)

            setPosts(newPosts)
        })
        .catch(error => {
            console.warn(error)
        })
    }, []);

    const changeCollection = useCallback((collection) => {
        setPosts([])
        getPhotosByCollection(collection.toLowerCase())
        .then(response => {
            console.log(response)
            const newPosts = response.data.results.map(photo => {
                return {
                    image: photo.urls.regular,
                    user: photo.user.name,
                    created: photo.created_at,
                    location: photo.user.location ? photo.user.location : 'Cerro Nutibara',
                    content: photo.description ? photo.description : 'From my recent cretive photoshoot of the city',
                    userImage: photo.user['profile_image'] ? photo.user['profile_image'].large : UserImage
                }
            })
            console.log(newPosts)

            setPosts(newPosts)
        })
        .catch(error => {
            console.warn(error)
        })
    }, []);

    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
            <TopNavBar />
            <View style={styles.feed} >
                <MyCollections changeCollection={changeCollection}/>
                <ActivityFeed posts={posts}/>
            </View>
            <BottomMenu navigation={navigation}/>
        </Text>
      </View>
    );
}

export default Search;