import { StyleSheet, Dimensions } from 'react-native'

let ScreenWidth = Dimensions.get("window").width;
  
const styles = StyleSheet.create({
    container: {
        width: ScreenWidth,
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
    titleContainer:{
      alignItems: 'baseline',
    },
    title: {
        fontFamily: 'Kalam',
        color: '#AB7E57',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
    },
    menuButton: {
        marginLeft: 'auto',
    },
    menuImage: {
        width: 20,
        height: 20,
    }
});

export default styles;