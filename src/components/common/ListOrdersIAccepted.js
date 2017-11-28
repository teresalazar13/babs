import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { listActiveOrdersIAccepted } from '../../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

import ItemReceived from './ItemReceived';


class ListOrdersIAccepted extends Component<{}> {

  componentWillMount() {
    const token = this.props.user.token;
    this.props.listActiveOrdersIAccepted(token);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ activeOrdersIAccepted }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(activeOrdersIAccepted);
  }

  renderRow(order) {
    const { title, price, createdBy, place, phone, endDate } = order;
    const titleUpper = title.toUpperCase();
    const address = place.address;
    const createdByUsername = createdBy.username;
    const endDateDay = endDate.substring(0, 10);
    const endDateTime = endDate.substring(11, endDate.length - 5);

    return (
      <ItemReceived
        title={titleUpper}
        address={address}
        price={price}
        phone={phone}
        createdByUsername={createdByUsername}
        endDateDay={endDateDay}
        endDateTime={endDateTime}
      />
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        style={{ alignSelf: 'stretch' }}
        scrollEnabled={false}
      />
    );
  }
}


const mapStateToProps = (state) => {
  const { user } = state.auth;
  const activeOrdersIAccepted = _.map(state.activeOrdersIAccepted, (val, uid) => {
    return { ...val, uid };
  });
  return { user, activeOrdersIAccepted };
};

export default connect(mapStateToProps, {
  listActiveOrdersIAccepted
})(ListOrdersIAccepted);
