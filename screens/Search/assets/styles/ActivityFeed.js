import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    header: {
        width: '100%',
        backgroundColor: '#F4DFCA',
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 22,
        fontStyle: 'italic',
        fontFamily: 'Kalam',
        marginBottom: 10,
    },
    postsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingTop: 15,
        paddingBottom: 15,
    }
});

export default styles;