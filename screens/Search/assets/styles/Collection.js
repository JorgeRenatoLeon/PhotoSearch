import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 84,
        marginRight: 10,
    },
    image : {
        width: 84,
        height: 84,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 5,
    },
    titleContainer: {
        alignItems: 'baseline',
    },
    title: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 19,
        fontStyle: 'italic',
        alignSelf: 'flex-start',
        textAlign: 'center',
    }
});

export default styles;