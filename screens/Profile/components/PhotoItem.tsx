import React from 'react';
import { Text, View, Image, Pressable, TextInput } from 'react-native';

import { useDispatch , useSelector } from 'react-redux';
import * as constants from '../../../redux/constants';

import PhotoActions from './PhotoActions';
import { Photo } from './PhotoActions';

import styles from '../assets/styles/PhotoItem.js';

export type Props = {
    item: Photo,
    editPhoto: Function
};

const PhotoItem: React.FC<Props> = ({item, editPhoto}) => {
    const dispatch = useDispatch()

    const saveChanges = () => {
        dispatch({type: constants.EDIT_PHOTO, payload: {...item, editTitle: false}});
    }

    return (
        <View style={styles.photoContainer}>
            <Image source={{ uri: item.image }} style={styles.photo} />
            <View style={styles.photoDetails}>
                {item.editTitle && (
                    <View style={styles.photoEdit}>
                        <TextInput style={styles.photoLabelEdit} value={item.title} onChangeText={(text) => editPhoto({...item, title: text})} />
                        <Pressable style={styles.saveButton} onPress={() => saveChanges()}><Text>Save</Text></Pressable>
                    </View>
                )}
                {!item.editTitle && <Text style={styles.photoLabel}>{item.title}</Text>}
                <PhotoActions item={item} />
            </View>
        </View>
    );
}

export default PhotoItem;