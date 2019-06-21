import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  header: {
    backgroundColor: colors.white,
    height: 50 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
    margin: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 30,
    width: metrics.screamWidth - 70,
    paddingHorizontal: metrics.basePadding / 2,
  },
  button: {
    marginVertical: metrics.baseMargin / 2,
  },
  separetor: {
    marginHorizontal: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    borderWidth: 1,
    borderColor: colors.separetor,
  },
  errorContainer: {
    alignItems: 'center',
    backgroundColor: colors.danger,
    padding: metrics.basePadding * 0.75,
    marginBottom: metrics.baseMargin * 2,
  },
  error: {
    color: colors.light,
    fontWeight: 'bold',
  },
});

export default styles;
