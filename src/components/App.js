import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, Spinner, Card, CardSection} from './common';
import LoginForm from './LoginForm';
import {auth} from '../config/firebase';

export default class App extends Component {
  state = {
    loggedIn: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      user ? this.setState({loggedIn: true}) : this.setState({loggedIn: false});
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => auth.signOut()}>Log Out</Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;
      default:
        return (
          <View>
            <Text>{'\n'}</Text>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
