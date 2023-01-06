import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: "column",
        padding: 15,
        backgroundColor: '#F4DFCA',
    },
    title: {
        fontFamily: 'Kalam',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 22,
        fontStyle: 'italic',
        marginBottom: 10,
    },
    collectionsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        overflowX: 'auto',
        paddingBottom: 10,
    }
});

export default styles;