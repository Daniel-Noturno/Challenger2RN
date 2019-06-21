import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
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
    color: colors.regular,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
