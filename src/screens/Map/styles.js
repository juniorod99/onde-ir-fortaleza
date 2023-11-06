import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 40,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 48,
    padding: 16,
    margin: 24,
  },
  title: {
    fontSize: 20,
    color: '#000000',
  },
  back: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
});

export default styles;
