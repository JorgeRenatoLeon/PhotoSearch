import { StyleSheet, Dimensions } from 'react-native'

let ScreenHeight = Dimensions.get("window").height;
  
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: ScreenHeight,
        position: 'relative',
    },
    feed: {
        height: ScreenHeight - 130,
        maxHeight: ScreenHeight - 130,
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%',
    },
    image: {
        height: ScreenHeight - 130,
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
});

export default styles;