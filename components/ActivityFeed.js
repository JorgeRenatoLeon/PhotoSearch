
import { StyleSheet, Text, View } from 'react-native';
import ActivityPost from './ActivityPost';

export default function ActivityFeed({posts}) {

    const postsComponents = posts.map((post, index) => {
        return (
            <ActivityPost post={post} key={index} />
        )
    }) 

    return (
      <View style={styles.container}>
        <div style={styles.header}>
            <Text style={styles.title}>Activity Feed</Text>
        </div>
        <div style={styles.postsContainer}>
            {postsComponents}
        </div>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    header: {
        width: 'calc(100% - 30px)',
        backgroundColor: '#F4DFCA',
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 5,
    },
    title: {
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 22,
        fontStyle: 'italic',
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