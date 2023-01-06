import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  baseText: {
      fontFamily: 'Kalam',
      color: '#fff',
  },
  container: {
    color: '#fff',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    padding: 40,
    alignItems: 'baseline'
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
  button: {
    minWidth: 200,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#AB7E57',
    alignSelf: 'center',
  },
  buttonLabel: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '600',
  }
});

export default styles;