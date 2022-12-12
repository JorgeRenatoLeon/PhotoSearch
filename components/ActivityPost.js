
import { Dimensions, StyleSheet, Pressable, Text, View, Image } from 'react-native';
import ScaledImage from './ScaledImage';

const DotsMenu = require('../assets/dots.png');

export default function ActivityPost({post}) {
    
    const formatTwitterDate =  (tdate) => {
        let systemDate = new Date(Date.parse(tdate))
        const thisDate = new Date()
        const userDate = new Date(thisDate.valueOf() + thisDate.getTimezoneOffset() * 60000)
        const a = navigator.userAgent
        if (a.match(/MSIE\s([^;]*)/)) {
          systemDate = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
        }
        const diff = Math.floor((userDate - systemDate) / 1000)

        if (diff < 5) { return 'just now' }
        if (diff < 60) { return `${diff}s ago` }
        if (diff <= 3540) { return `${Math.round(diff / 60)}m ago` }
        if (diff <= 86400) { return `${Math.round(diff / 3600)}h ago` }
        if (diff < 604800) { return `${Math.round(diff / 86400)}d ago` }
        if (diff <= 777600) { return '1w ago' }
        if (diff <= 12441600) { return `${Math.ceil(diff / 604800)}w ago` }
        return systemDate.toLocaleDateString()
    };

    return (
      <View style={styles.container}>
        <Pressable onPress={() => console.log('pressed')}>
            <div style={styles.postUser}>
                <Image source={post.userImage} style={styles.userImage} />
                <div style={styles.userDetails}>
                    <Text style={styles.user}>{post.user}</Text>
                    <div style={styles.postDetails}>
                        <Text style={styles.textDetails}>{formatTwitterDate(post.created)} in {post.location}</Text>
                    </div>
                </div>
                <Image source={DotsMenu} style={styles.dotsMenu} />
            </div>
            <Text style={styles.content}>{post.content}</Text>
            <ScaledImage uri={post.image} width={Dimensions.get('window').width}/>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    postUser: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
        fontWeight: 700,
    },
    postDetails: {
        display: 'flex',
        flexDirection: 'row',
    },
    textDetails: {
        fontSize: 8,
        lineHeight: 13,
        fontWeight: 300,
    },
    dotsMenu: {
        width: 20,
        height: 20,
        marginLeft: 'auto',
    },
    content: {
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 16,
        fontStyle: 'italic',
        width: 'fit-content',
        alignSelf: 'flex-start',
        textAlign: 'left',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
    },
  })