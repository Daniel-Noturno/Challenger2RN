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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxButtom: {
    backgroundColor: '#CCC',
    margin: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    paddingVertical: metrics.basePadding / 2.5,
    borderRadius: metrics.baseRadius * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttom: {
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  textButtom: {
    color: colors.darker,
    fontSize: 12,
    fontWeight: 'bold',
  },
  textButtomTransparent: {
    color: colors.darkTransparent,
    fontSize: 12,
    fontWeight: 'bold',
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
