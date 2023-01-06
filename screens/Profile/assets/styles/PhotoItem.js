import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    photoContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    photo: {
        width: 75,
        height: 75,
        marginRight: 15,
        borderRadius: 10,
    },
    photoDetails: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    photoInformation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    photoLabel: {
        fontFamily: 'Kalam',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 12,
    },
    photoEdit: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    photoLabelEdit: {
        fontFamily: 'Kalam',
        fontSize: 14,
        fontWeight: '400',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        marginRight: 15,
    },
    saveButton: {
        fontFamily: 'Kalam',
        fontSize: 14,
        fontWeight: '400',
        backgroundColor: '#AB7E57',
        textAlign: 'center',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    photoSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 18,
        height: 18,
        marginRight: 5,
    },
    label: {
        fontFamily: 'Kalam',
        fontSize: 12,
        fontWeight: '400',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'space-between',
    },
    closeButton: {
        fontFamily: 'Kalam',
        position: 'absolute',
        top: 10,
        right: 10,
        borderRadius: 5,
        padding: 5,
    },
});

export default styles;