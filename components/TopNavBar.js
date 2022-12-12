
import { StyleSheet, Image, Pressable, Text, View } from 'react-native';

const LogoImage = require('../assets/logo.png');
const MenuImage = require('../assets/menu.png');

export default function BottomCard() {
    return (
      <View style={styles.container}>
        <Image source={LogoImage} style={styles.image}/>
        <Text style={styles.title}>PhotoSearch</Text>
        <Pressable onPress={() => alert('Open Menu')} style={styles.menuButton}>
            <Image source={MenuImage} style={styles.menuImage}/>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 15,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    title: {
        color: '#AB7E57',
        width: 'fit-content',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '22px',
    },
    menuButton: {
        marginLeft: 'auto',
    },
    menuImage: {
        width: 20,
        height: 20,
    }
  });