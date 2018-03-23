import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { fetchCoinData } from '../actions/fetchCoinData'
import CoinCard from './coinCard';
import Spinner from 'react-native-loading-spinner-overlay';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.fetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map((coin, index) => {
      return (
        <CoinCard 
          key={index}
          coin_name={coin.name}
          symbol={coin.symbol}
          price_usd={coin.price_usd}
          percent_change_24h={coin.percent_change_24h}
          percent_change_7d={coin.percent_change_7d} />
      );
    });
  }

  render() {
    const { crypto } = this.props;
    if(crypto.isFetching) {
      return (
        <View>
          <Spinner visible={crypto.isFetching} textContent="Loading..." textStyle={{ color: "#253145" }} animation="fade" />
        </View>
      );
    }
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 10
  }
};

const mapStateToProps = (state) => {
  const { crypto } = state;
  return { crypto }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoinData: () => {
      dispatch(fetchCoinData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer);