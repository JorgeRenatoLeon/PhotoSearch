import { StyleSheet, Dimensions } from 'react-native'

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Kalam',
        color: 'white',
    },
    container: {
        display: 'flex',
        flex: 1,
    },
    image: {
        minHeight: ScreenHeight,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flex: 1,
    },
});

export default styles;