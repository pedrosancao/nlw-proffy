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
