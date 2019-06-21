import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, AsyncStorage, FlatList, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import RepositoryItems from './repositoriesItems';
import api from '../../service/api';
import '../../config/ReactoTronConfig';

export default class Home extends Component {
  state = {
    urlRepo: '',
    dataRepository: [],
    error: false,
    loading: false,
    refresh: false,
  }

  componentDidMount() {
    this.loadRepository();
  }

  addStorege = async (response, dataRepo) => {
    if (dataRepo === null) {
      await AsyncStorage.setItem('@GitIssues:Repository', JSON.stringify([response]));
    } else {
      await AsyncStorage.setItem('@GitIssues:Repository', JSON.stringify([...dataRepo, response]));
    }
  }

  checkRepositoryExist = async (url) => {
    const request = await api.get(`/repos/${url}`);
    return request;
  }

  addList = async () => {
    const { urlRepo, dataRepository } = this.state;

    this.setState({ loading: true });

    try {
      const { data } = await this.checkRepositoryExist(urlRepo);
      await this.addStorege(data, dataRepository);
      this.loadRepository();
      this.setState({ error: false });
    } catch (err) {
      this.setState({ error: true });
    }

    this.setState({ loading: false });
  }

  loadRepository = async () => {
    const dataRepository = JSON.parse(await AsyncStorage.getItem('@GitIssues:Repository'));

    this.setState({ dataRepository });
  }

  renderListItem = ({ item }) => <RepositoryItems data={item} />;

  renderList = (dataRepository, refresh) => (
    <FlatList
      data={dataRepository}
      keyExtractor={() => String(Math.random())}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepository}
      refreshing={refresh}
    />
  );

  renderError = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.error}>Repositório Inesistente, tente outro :)</Text>
    </View>
  );

  render() {
    const {
      urlRepo, dataRepository, refresh, loading, error,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GitIssues</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo Repositório"
            underlineColorAndroid="transparent"
            value={urlRepo}
            onChangeText={item => this.setState({ urlRepo: item })}
          />
          <TouchableOpacity style={styles.button} onPress={this.addList}>
            <Icon name="plus" size={20} />
          </TouchableOpacity>
        </View>
        {error === true ? this.renderError() : null}

        <View style={styles.separetor} />

        {loading === false ? this.renderList(dataRepository, refresh) : <ActivityIndicator />}
      </View>
    );
  }
}
