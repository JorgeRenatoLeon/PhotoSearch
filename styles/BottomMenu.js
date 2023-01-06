import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menuContainer: {
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
    iconButton: {
        margin: 'auto'
    },
    image: {
        width: 25,
        height: 25,
        opacity: 1,
        color: 'black'
    },
});

export default styles;