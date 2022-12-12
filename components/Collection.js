
import { StyleSheet, Image, Pressable, Text, View } from 'react-native';

export default function Collection({collectionImage, collectionTitle, changeCollection}) {
    return (
      <View style={styles.container} className="hover-effect-lighten">
        <Pressable onPress={() => changeCollection(collectionTitle)}>
            <Image style={styles.image} source={collectionImage} />
            <Text style={styles.title}>{collectionTitle}</Text>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        width: 84,
    },
    image : {
        width: 84,
        height: 84,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 5,
    },
    title: {
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 19,
        fontStyle: 'italic',
        width: 'fit-content',
        alignSelf: 'flex-start',
        textAlign: 'center',
    }
  });