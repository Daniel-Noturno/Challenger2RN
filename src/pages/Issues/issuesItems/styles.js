import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius * 2,
  },
  img: {
    width: 45,
    height: 45,
    marginRight: metrics.baseMargin,
    borderRadius: 22,
  },
  info: {
    flex: 1,
  },
  title: {
    color: colors.darker,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.regular,
    fontSize: 14,
  },
  icon: {
    color: colors.light,
    marginVertical: metrics.baseMargin / 2,
    marginLeft: metrics.baseMargin,
  },
});

export default styles;
