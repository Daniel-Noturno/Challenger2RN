import React, { } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';
import '../../../config/ReactoTronConfig';

const IssuesItems = ({ data }) => (
  <TouchableOpacity style={styles.container} onPress={() => {}}>
    <Image style={styles.img} source={{ uri: data.user.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{data.title}</Text>
      <Text style={styles.subTitle}>{data.user.login}</Text>
    </View>
    <Icon style={styles.icon} name="angle-right" size={30} />
  </TouchableOpacity>
);

IssuesItems.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

export default IssuesItems;
