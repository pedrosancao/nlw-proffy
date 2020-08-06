import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#8257E5',
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    paddingHorizontal: 30,
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    marginTop: 40,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#9871F5',
  },
  buttonSecondary: {
    backgroundColor: '#04D361',
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#FFF',
  },
  totalConnections: {
    maxWidth: 200,
    marginTop: 40,
    paddingHorizontal: 30,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
    color: '#D4C2FF',
  },
});
