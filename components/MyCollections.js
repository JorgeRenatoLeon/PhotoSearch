
import { StyleSheet, Text, View } from 'react-native';
import Collection from './Collection';

const WeddingImage = require('../assets/wedding.png');
const OutdoorsImage = require('../assets/outdoors.png');
const PortraitsImage = require('../assets/portraits.png');
const PetsImage = require('../assets/pets.jpg');
const ChristmasImage = require('../assets/christmas.jpg');
const TravelImage = require('../assets/travel.jpg');
const Halloween = require('../assets/halloween.jpg');
const ProductsImage = require('../assets/products.jpg');

export default function MyCollections({changeCollection}) {

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

    const collectionsComponents = collections.map((collection, index) => {
        return (
            <Collection collectionTitle={collection.title} collectionImage={collection.image} key={index} changeCollection={changeCollection}/>
        )
    }) 

    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Collections</Text>
        <div style={styles.collectionsContainer}>
            {collectionsComponents}
        </div>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        padding: 15,
        backgroundColor: '#F4DFCA',
    },
    title: {
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 22,
        fontStyle: 'italic',
        marginBottom: 10,
    },
    collectionsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        overflowX: 'auto',
        paddingBottom: 10,
    }
  });