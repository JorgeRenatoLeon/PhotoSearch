import { StyleSheet, Dimensions } from 'react-native'

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        position: 'relative',
    },
    feed: {
        height: ScreenHeight - 125,
        maxHeight: ScreenHeight - 125,
        overflowY: 'auto',
        overflowX: 'hidden',
        maxWidth: ScreenWidth,
    }
});

export default styles;