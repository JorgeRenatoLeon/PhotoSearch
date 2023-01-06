
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native';

import styles from '../assets/styles/Collection.js';

export type Props = {
  collectionImage: any;
  collectionTitle: string;
  changeCollection: Function;
};

const Collection: React.FC<Props> = ({collectionImage, collectionTitle, changeCollection}) => {

  return (
    <Pressable style={styles.container} onPress={() => changeCollection(collectionTitle)}>
      <Image style={styles.image} source={collectionImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{collectionTitle}</Text>
      </View>
    </Pressable>
  );
}

export default Collection 