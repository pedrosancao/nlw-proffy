import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginBottom: 16,
    overflow: 'hidden',
    backgroundColor:'#FFF',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 8,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEE'
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264D',
    fontSize: 20,
  },
  subject: {
    marginTop: 4,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6A6180',
  },
  profileText: {
    marginHorizontal: 24,
    fontSize: 14,
    lineHeight: 24,
    color: '#6A6180',
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
  },
  bio: {
    marginTop: 12,
    fontFamily: 'Poppins_400Regular',
  },
  footer: {
    marginTop: 24,
    backgroundColor: '#FAFAFC',
    borderTopColor: '#E6E6F0',
    borderTopWidth: 1,
    padding: 24,
    alignItems: 'center',
  },
  cost: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 14,
  },
  costValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257E5',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  buttonFavorite: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  buttonFavoriteActive: {
    backgroundColor: '#E33D3D',
  },
  buttonFavoriteInactive: {
    backgroundColor: '#8257E5',
  },
  buttonContact: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginLeft: 8,
    flexDirection: 'row',
    flexGrow: 1,
    borderRadius: 8,
    backgroundColor: '#04D361',
  },
  contactText: {
    marginLeft: 16,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFF',
  },
  tmp: {
  },
});
