import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Kalam'
      },
      container: {
          width: '100%',
          height: '100vh',
          position: 'relative',
      },
      feed: {
          height: 'calc(100vh - 125px)',
          maxHeight: 'calc(100vh - 125px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          maxWidth: '100%',
      }
});

export default styles;