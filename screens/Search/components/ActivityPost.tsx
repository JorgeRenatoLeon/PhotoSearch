
import { Dimensions, Pressable, Text, View, Image } from 'react-native';
import moment from 'moment';
import ScaledImage from '../../../components/ScaledImage';

import styles from '../assets/styles/ActivityPost.js';

const DotsMenu = require('../../../assets/img/dots.png');

export type Props = {
  post: Post;
};

export interface Post {
    user: string;
    userImage: string;
    created: string;
    location: string;
    content: string;
    image: string;
}

const ActivityPost: React.FC<Props> = ({post}) => {
    
    const formatTwitterDate =  (date) => {
      let systemDate = new Date(Date.parse(date))
      return moment(systemDate).fromNow()
    };

    return (
      <View style={styles.container}>
        <Pressable>
            <View style={styles.postUser}>
              <Image source={{ uri: post.userImage }} style={styles.userImage} />
              <View style={styles.userDetails}>
                <Text style={styles.user}>{post.user}</Text>
                <View style={styles.postDetails}>
                    <Text style={styles.textDetails}>{formatTwitterDate(post.created)} in {post.location}</Text>
                </View>
              </View>
              <Image source={DotsMenu} style={styles.dotsMenu} />
            </View>
            <View style={styles.postContent}>
            <Text style={styles.content}>{post.content}</Text>
            </View>
            <ScaledImage uri={post.image} width={Dimensions.get('window').width}/>
        </Pressable>
      </View>
    );
}

export default ActivityPost;