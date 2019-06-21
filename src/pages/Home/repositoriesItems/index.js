import React, { } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

import '../../../config/ReactoTronConfig';

const RepositoriesItems = ({ data, navigation }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Issues', { title: data.name, full_name: data.full_name })}>
    <Image style={styles.img} source={{ uri: data.owner.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.subTitle}>{data.owner.login}</Text>
    </View>
    <Icon style={styles.icon} name="angle-right" size={30} />
  </TouchableOpacity>
);

RepositoriesItems.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoriesItems);
