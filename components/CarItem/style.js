import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 10,
    color: '#5c5e62',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonsContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 50,
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
});

export default styles;