import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';
import IssuesItems from './issuesItems';
import Filter from './Filter';
import api from '../../service/api';
import '../../config/ReactoTronConfig';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    colorFilter: 'all',
    dataIssues: [],
    loading: false,
    refresh: false,
    error: false,
  }

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async (value = 'all') => {
    const { navigation } = this.props;

    this.setState({ loading: true, error: false, colorFilter: value });

    try {
      const { data } = await api.get(`/repos/${navigation.getParam('full_name')}/issues?state=${value}`);
      this.setState({ dataIssues: data });
    } catch (err) {
      this.setState({ error: true });
    }

    this.setState({ loading: false });
  }

  renderListItem = ({ item }) => <IssuesItems data={item} />;

  renderList = (dataIssues, refresh) => (
    <FlatList
      data={dataIssues}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadIssues}
      refreshing={refresh}
    />
  );

  renderError = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.error}>Erro na Busca das Issues</Text>
      <Text style={styles.error}>Tente novamente :)</Text>
    </View>
  );

  render() {
    const { navigation } = this.props;
    const {
      dataIssues, refresh, loading, error, colorFilter,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon style={styles.icon} name="angle-left" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{navigation.getParam('title')}</Text>
          <View />
        </View>
        <Filter colorFilter={colorFilter} loadIssues={this.loadIssues} />

        {error === true ? this.renderError() : null}

        {loading === false ? this.renderList(dataIssues, refresh) : <ActivityIndicator />}
      </View>
    );
  }
}
