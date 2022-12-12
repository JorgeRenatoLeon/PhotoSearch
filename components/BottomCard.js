
import { StyleSheet, Pressable, Text, View } from 'react-native';

const BackgroundImage = require('../assets/appBackground.png');

export default function BottomCard({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>PhotoSearch</Text>
        <Text style={styles.text}>Find your best photographer in the city</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Search')}>
          <Text style={styles.buttonLabel}>Search</Text>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      color: 'white',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      display: 'flex',
      justifyContent: 'center',
      padding: 40,
    },
    titleText: {
      width: 'fit-content',
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    text: {
      fontStyle: 'italic',
      width: 'fit-content',
      textAlign: 'center',
      alignSelf: 'center',
      marginBottom: 30,
      fontSize: 16,
    },
    button: {
      width: 'fit-content',
      minWidth: 200,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: '#AB7E57',
      alignSelf: 'center',
    },
    buttonLabel: {
      width: 'fit-content',
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: 25,
      fontWeight: 600,
    }
  });