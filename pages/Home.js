
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import BottomCard from '../components/BottomCard';

const BackgroundImage = require('../assets/appBackground.png');

export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
            <ImageBackground source={BackgroundImage} style={styles.image} resizeMode="cover">
                <BottomCard navigation={navigation}/>
            </ImageBackground>
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    baseText: {
      fontFamily: '"Comic Sans MS", "Comic Sans", cursive;'
    },
    container: {
        width: '100%',
    },
    image: {
        minHeight: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
  });