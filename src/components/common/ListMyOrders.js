import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { listMyActiveOrders } from '../../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

import ItemRequested from './ItemRequested';


class ListMyOrders extends Component<{}> {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    const token = this.props.user.token;
    this.props.listMyActiveOrders(token);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ myActiveOrders }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(myActiveOrders);
  }

  renderRow(order) {
    const { title, price, createdBy, place, phone, endDate, _id, navigate } = order;
    const titleUpper = title.toUpperCase();
    const address = place.address;
    const createdByUsername = createdBy.username;
    const endDateDay = endDate.substring(0, 10);
    const endDateTime = endDate.substring(11, endDate.length - 5);
    const token = this.props.user.token;

    return (
      <ItemRequested
        title={titleUpper}
        address={address}
        price={price}
        phone={phone}
        createdByUsername={createdByUsername}
        endDateDay={endDateDay}
        endDateTime={endDateTime}
        token={token}
        _id={_id}
        navigate={navigate}

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
  const myActiveOrders = _.map(state.myActiveOrders, (val, uid) => {
    return { ...val, uid };
  });
  return { user, myActiveOrders };
};

export default connect(mapStateToProps, {
  listMyActiveOrders
})(ListMyOrders);
