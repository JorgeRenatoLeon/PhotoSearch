
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Collection from './Collection';

const WeddingImage = require('../../../assets/img/wedding.png');
const OutdoorsImage = require('../../../assets/img/outdoors.png');
const PortraitsImage = require('../../../assets/img/portraits.png');
const PetsImage = require('../../../assets/img/pets.jpg');
const ChristmasImage = require('../../../assets/img/christmas.jpg');
const TravelImage = require('../../../assets/img/travel.jpg');
const Halloween = require('../../../assets/img/halloween.jpg');
const ProductsImage = require('../../../assets/img/products.jpg');

import styles from '../assets/styles/MyCollections.js'

export type Props = {
    changeCollection: Function;
};

const MyCollections: React.FC<Props> = ({changeCollection}) => {

    const collections = [
        {title: 'Wedding', image: WeddingImage},
        {title: 'Outdoors', image: OutdoorsImage},
        {title: 'Portraits', image: PortraitsImage},
        {title: 'Pets', image: PetsImage},
        {title: 'Travel', image: TravelImage},
        {title: 'Christmas', image: ChristmasImage},
        {title: 'Products', image: ProductsImage},
        {title: 'Halloween', image: Halloween},
    ]

    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Collections</Text>
        <FlatList 
            data={collections}
            renderItem={({item}) =>
                <Collection collectionTitle={item.title} collectionImage={item.image} changeCollection={changeCollection}
            />}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            style={styles.collectionsContainer}
        />
      </View>
    );
}

export default MyCollections