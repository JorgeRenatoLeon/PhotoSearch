import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import { useDispatch } from 'react-redux';
import * as constants from '../../../redux/constants';

import ShareModal from './ShareModal';

import styles from '../assets/styles/PhotoItem.js';

const ShareIcon = require('../../../assets/svg/share.svg');
const EditIcon = require('../../../assets/svg/edit.svg');
const DeleteIcon = require('../../../assets/svg/delete.svg');

export type Props = {
    item: Photo
};

export type Photo = {
    id: number,
    title: string,
    image: string,
    editTitle: boolean
};

const PhotoActions: React.FC<Props> = ({item}) => {
    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = React.useState(false);

    const deletePhoto = (id: number) => {
        dispatch({type: constants.DELETE_PHOTO, payload: id});
    }

    const editPhoto = () => {
        dispatch({type: constants.EDIT_PHOTO, payload: {...item, editTitle: item.editTitle ? false : true}});
    }

    return (
        <View style={styles.photoInformation}>
            <View style={styles.photoSection}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Image source={ShareIcon} style={styles.icon} />
                </Pressable>
                <Text style={styles.label}>Share</Text>
            </View>
            <View style={styles.photoSection}>
                <Pressable onPress={() => editPhoto()}>
                    <Image source={EditIcon} style={styles.icon} />
                </Pressable>
                <Text style={styles.label}>Edit</Text>
            </View>
            <View style={styles.photoSection}>
                <Pressable onPress={() => deletePhoto(item.id)}>
                    <Image source={DeleteIcon} style={styles.icon} />
                </Pressable>
                <Text style={styles.label}>Delete</Text>
            </View>
            <ShareModal item={item} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
}

export default PhotoActions;