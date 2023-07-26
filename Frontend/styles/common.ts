import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputView: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    width: '60%',
  },
});

export default common;
