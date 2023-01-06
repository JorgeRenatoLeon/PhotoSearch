
import { StyleSheet, Text, View } from 'react-native';

import TopNavBar from '../../components/TopNavBar';
import BottomMenu from '../../components/BottomMenu'
import { ImageBackground } from 'react-native-web';

import MapView from '../../assets/img/MapView.png';

export default function Map({ navigation }) {

    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
            <TopNavBar />
            <View style={styles.feed} >
                <ImageBackground source={MapView} style={styles.image} resizeMode="cover"/>
            </View>
            <BottomMenu navigation={navigation}/>
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Kalam'
    },
    container: {
        width: '100%',
        height: '100vh',
        position: 'relative',
    },
    feed: {
        height: 'calc(100vh - 130px)',
        maxHeight: 'calc(100vh - 130px)',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%',
    },
    image: {
        height: 'calc(100vh - 130px)',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
  });