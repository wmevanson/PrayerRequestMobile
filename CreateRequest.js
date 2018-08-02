import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import request from './request.js';

class CreateRequest extends React.Component {
  constructor(props) {
    super(props);
    this.requests = this.props.prayerRequests;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { fullname: '',
                   requestdate: new Date(),
                   requesttitle: '',
                   prayerrequest: '',
                   answereddate: ''
                 };
  }

  handleSubmit(event) {
    console.log('handle submit');
    let therequest = new request(this.state.fullname,
                                 new Date(),
                                 this.state.requesttitle,
                                 this.state.prayerrequest);
    this.requests.push(therequest);
    this.props.handler(event, this.requests);
    event.preventDefault();
  }

  render() {
    return (
      <Card>
        <View style={styles.container}>
          <FormLabel>Request For</FormLabel>
          <FormInput onChangeText={(fullname) => this.setState({fullname})}
          value={this.state.fullname}/>
          <FormLabel>Request Title</FormLabel>
          <FormInput onChangeText={(requesttitle) => this.setState({requesttitle})}
          value={this.state.requesttitle}/>
          <FormLabel>Full Request</FormLabel>
          <FormInput
          multiline={true}
          maxLength={500}
          onChangeText={(prayerrequest) => this.setState({prayerrequest})}
          value={this.state.prayerrequest}/>
          <View style={{flex:0.03}}/>
          <Button
            medium
            onPress={this.handleSubmit}
            title='Request Submit' />
        </View>
      </Card>
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

export {CreateRequest};
