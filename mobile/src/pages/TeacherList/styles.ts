import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f7',
  },
  buttonToggleFilters: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: '#9871F5',
  },
  filtersContainer: {
    marginBottom: 12,
  },
  inputGroupItem: {
    flexGrow: 1,
    marginBottom: 12,
  },
  label: {
    color: '#D4C2FF',
    fontFamily: 'Poppins_400Regular',
  },
  input: {
    marginTop: 2,
    height: 54,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 7,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSubmitFilter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    flexDirection: 'row',
    flexGrow: 1,
    borderRadius: 8,
    backgroundColor: '#04D361',
  },
  buttonSubmitFilterText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFF',
  },
  teacherList: {
    flexBasis: 1,
    marginTop: -60,
    marginHorizontal: 12,
  },











  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    maxWidth: 180,
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
  },
  text: {
    maxWidth: 240,
    marginTop: 24,
    fontFamily: 'Archivo_400Regular',
    color: '#D4C2FF',
    fontSize: 16,
    lineHeight: 26,
  },
  buttonConfirm: {
    marginVertical: 40,
    paddingVertical: 24,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#04D361',
  },
  textConfirm: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#FFF',
  },
});
