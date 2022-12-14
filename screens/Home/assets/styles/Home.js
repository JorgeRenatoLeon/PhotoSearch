import { StyleSheet, Dimensions } from 'react-native'

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
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