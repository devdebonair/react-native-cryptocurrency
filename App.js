import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, CryptoContainer } from './src/components';
import Store from './src/Store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <View style={styles.header}>
            <Header  />
          </View>
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 20
  }
});
