
import { StyleSheet, Image, Pressable, Text, View } from 'react-native';

const HomeIcon = require('../assets/home.svg');
const LocationIcon = require('../assets/location.svg');
const ChatIcon = require('../assets/chat.svg');
const BellIcon = require('../assets/bell.svg');
const UserIcon = require('../assets/user.svg');


export default function BottomCard({ navigation }) {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Search')}>
            <Image source={HomeIcon} style={styles.image}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Map')}>
            <Image source={LocationIcon} style={styles.image}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={ChatIcon} style={styles.image}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={BellIcon} style={styles.image}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={UserIcon} style={styles.image}/>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#F4DFCA',
    },
    image: {
        width: 25,
        height: 25,
    },
  });