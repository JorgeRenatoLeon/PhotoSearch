import { StyleSheet } from 'react-native';
  
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
    titleContainer:{
      alignItems: 'baseline',
    },
    title: {
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