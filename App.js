import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CreateRequest } from './CreateRequest'
import './request.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestItemsList = [];
    this.state = {
      requests: [],
      date: new Date()
    };
  }

  handleSubmit(e, requestItemsList) {
    this.setState({
      requests: requestItemsList
    });
    if (requestItemsList.length > 0) {
      console.log('handleSubmit ' + requestItemsList.length);
    }
    e.preventDefault();
  }

  render() {
    return (
      <View style={styles.container}>
        <CreateRequest prayerRequests={this.state.requests}
                       handler = {this.handleSubmit}>
        </CreateRequest>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
