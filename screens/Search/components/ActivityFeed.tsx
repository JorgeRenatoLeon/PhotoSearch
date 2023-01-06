
import React from 'react'
import { Text, View, FlatList } from 'react-native';
import ActivityPost, { Post } from './ActivityPost';

import styles from '../assets/styles/ActivityFeed.js'

export type Props = {
    posts: Array<Post>;
};

const ActivityFeed: React.FC<Props> = ({posts}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Activity Feed</Text>
        <FlatList 
            data={posts}
            renderItem={({item}) => <ActivityPost post={item} />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.postsContainer}
        />
      </View>
    );
}

export default ActivityFeed;