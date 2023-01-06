import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4DFCA',
        padding: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 15,
    },
    userDetails: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    name: {
        fontFamily: 'Kalam',
        fontSize: 20,
        fontWeight: 'bold',
    },
    username: {
        fontFamily: 'Kalam',
        fontSize: 15,
        marginBottom: 10,
    },
    accountDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    accountSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontFamily: 'Kalam',
        fontSize: 12,
        fontWeight: '400',
    },
    quantity: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    quantityLabel: {
        fontFamily: 'Kalam',
        fontSize: 15,
        fontWeight: 'bold',
    },
    editButton: {
        backgroundColor: '#AB7E57',
        textAlign: 'center',
        borderRadius: 5,
        padding: 5,
        width: 130,
    },
    editButtonText: {
        fontFamily: 'Jua',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
    },
});

export default styles;