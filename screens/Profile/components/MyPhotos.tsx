
import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';

import { useSelector } from 'react-redux';

import PhotoItem from './PhotoItem';

import styles from '../assets/styles/MyPhotos.js';
import { Photo } from './PhotoActions';

export type Props = {
};

const MyPhotos: React.FC<Props> = () => {

    const photos = useSelector((state: any) => state.photos.items);

    const [photosShowed, setPhotosShowed] = React.useState(photos);

    const editPhoto = (newPhoto: Photo) => {
        const photosEdited = [...photosShowed.map(photo => {
            if (photo.id === newPhoto.id) {
                return newPhoto;
            }
            return photo;
        })];
        setPhotosShowed(photosEdited);
    }

    useEffect(() => {
        setPhotosShowed(photos);
    }, [photos]);

    return (
        <Text style={styles.baseText}>
            <View style={styles.container} >
                <Text style={styles.title}>My Photos</Text>
                <FlatList
                    data={photosShowed}
                    renderItem={({ item }) => (
                        <PhotoItem item={item} editPhoto={editPhoto}/>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </Text>
    );
}

export default MyPhotos;