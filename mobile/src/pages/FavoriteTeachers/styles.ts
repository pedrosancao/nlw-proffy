import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f7',
  },
  teacherList: {
    flexBasis: 1,
    marginTop: -60,
    marginHorizontal: 12,
  },
  emptyResult: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    marginBottom: 16,
    paddingHorizontal: '20%',
    overflow: 'hidden',
    backgroundColor:'#f8f8fc',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 8,
  },
  emptyResultText: {
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    color: '#9C98A6',
  },
});
