import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
    },
    postUser: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10,
    },
    userDetails: {
        display: 'flex',
        flexDirection: 'column',
    },
    user: {
        fontSize: 8,
        lineHeight: 16,
        fontWeight: "700",
    },
    postDetails: {
        display: 'flex',
        flexDirection: 'row',
    },
    textDetails: {
        fontSize: 8,
        lineHeight: 13,
        fontWeight: '300',
    },
    dotsMenu: {
        width: 20,
        height: 20,
        marginLeft: 'auto',
    },
    postContent: {
        alignItems: 'baseline',
    },
    content: {
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 16,
        fontStyle: 'italic',
        textAlign: 'left',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
    },
});

export default styles;