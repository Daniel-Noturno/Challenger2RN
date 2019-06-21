import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Filter = ({ colorFilter, loadIssues }) => (
  <View style={styles.boxButtom}>
    <TouchableOpacity style={styles.buttom} onPress={() => loadIssues('all')}>
      <Text style={[styles.textButtomTransparent, colorFilter === 'all' && styles.textButtom]}>Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttom} onPress={() => loadIssues('open')}>
      <Text style={[styles.textButtomTransparent, colorFilter === 'open' && styles.textButtom]}>Abertas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttom} onPress={() => loadIssues('closed')}>
      <Text style={[styles.textButtomTransparent, colorFilter === 'closed' && styles.textButtom]}>Fechadas</Text>
    </TouchableOpacity>
  </View>
);

Filter.propTypes = {
  colorFilter: PropTypes.string.isRequired,
  loadIssues: PropTypes.func.isRequired,
};

export default Filter;
