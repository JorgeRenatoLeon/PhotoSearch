
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import TopNavBar from '../components/TopNavBar';
import MyCollections from '../components/MyCollections';
import ActivityFeed from '../components/ActivityFeed';

const UserImage = require('../assets/user.png');

import { getRandomPhotos, getPhotosByCollection } from '../api/photos';

export default function Search() {

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

    const changeCollection = (collection) => {
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
    }

    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
            <TopNavBar />
            <MyCollections changeCollection={changeCollection}/>
            <ActivityFeed posts={posts}/>
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    baseText: {
      fontFamily: '"Comic Sans MS", "Comic Sans", cursive;'
    },
    container: {
        width: '100%',
        minHeight: '100vh',
    },
  });