
import { Pressable, Text, View } from 'react-native';
import { Navigation } from '../../../components/BottomMenu.js';

import styles from '../assets/styles/BottomCard.js'

export type Props = {
  navigation: Navigation;
};

const BottomCard: React.FC<Props> = ({navigation}) => {
  return (
    <Text style={styles.baseText}>
      <View style={styles.container}>
        <Text style={styles.titleText}>PhotoSearch</Text>
        <Text style={styles.text}>Find your best photographer in the city</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Search')}>
          <Text style={styles.buttonLabel}>Search</Text>
        </Pressable>
      </View>
    </Text>
  );
}

export default BottomCard