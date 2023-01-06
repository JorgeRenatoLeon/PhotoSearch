import { StyleSheet, Dimensions } from "react-native";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Kalam',
        maxHeight: ScreenHeight,
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width: ScreenWidth,
        maxHeight: ScreenHeight,
        position: 'relative',
    },
    feed: {
        height: ScreenHeight - 125,
        maxHeight: ScreenHeight - 125,
        overflowY: 'auto',
        overflowX: 'hidden',
        maxWidth: ScreenWidth,
        width: ScreenWidth,
    }
});

export default styles;