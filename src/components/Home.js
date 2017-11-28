import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ListView } from 'react-native';
import { listOthersActiveOrders, acceptOrder } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

import Header from './common/Header';
import Item from './common/Item';
import ItemReceived from './common/ItemReceived';
import Navbar from './common/Navbar';
import ListMyOrders from './common/ListMyOrders';
import ListOrdersIAccepted from './common/ListOrdersIAccepted';


class Home extends Component<{}> {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    const token = this.props.user.token;
    this.props.listOthersActiveOrders(token);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  componentDidUpdate() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigateHome);
    if (this.props.navigateHome == true) {
      navigate('Home');
    }
  }

  createDataSource({ othersActiveOrders }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(othersActiveOrders);
  }

  renderRow(order) {
    const { title, place, price, phone, createdBy, endDate, _id } = order;
    const titleUpper = title.toUpperCase();
    const address = place.address;
    const createdByUsername = createdBy.username;
    const endDateDay = endDate.substring(0, 10);
    const endDateTime = endDate.substring(11, endDate.length - 5);
    const token = this.props.user.token;

    return (
       <Item
        title={titleUpper}
        address={address}
        price={price}
        phone={phone}
        createdByUsername={createdByUsername}
        endDateDay={endDateDay}
        endDateTime={endDateTime}
        _id = {_id}
        token = {token}
       />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollViewStyle}>
          <View style={styles.listContainer}>
            <ListOrdersIAccepted
              props={this.props}
            />

            <ListMyOrders
              props={this.props}
            />

            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
              style={{ alignSelf: 'stretch' }}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
        <Navbar
          navigation={this.props.navigation}
          selectedTab="2"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },

  scrollViewStyle: {
    flex: 1,
  },

  listContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 25
  },
});

const mapStateToProps = (state) => {
  const { user } = state.auth;
  const { navigateHome } = state.acceptOrder;
  const othersActiveOrders = _.map(state.othersActiveOrders, (val, uid) => {
    return { ...val, uid };
  });
  return { user, othersActiveOrders, navigateHome };
};

export default connect(mapStateToProps, {
  listOthersActiveOrders
})(Home);
