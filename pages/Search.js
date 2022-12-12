
import { StyleSheet, Text, View } from 'react-native';

export default function Search() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
            <Text>SEARCH</Text>
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100vh',
    },
  });