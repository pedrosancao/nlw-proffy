import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 60,
    backgroundColor: '#8257E5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: 160,
    marginVertical: 40,
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
  },
});
