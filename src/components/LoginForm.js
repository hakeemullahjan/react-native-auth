import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card, CardSection, Button, Input, Spinner} from './common';
import {loginUser} from '../config/firebase';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      isLoading: false,
    };
  }

  async _loginUser() {
    const {email, password, isLoading} = this.state;
    this.setState({error: '', isLoading: true});
    let a = await loginUser(email, password);
    a.message ? this.onLoginSuccess() : this.onLoginFail();
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      isLoading: false,
      error: '',
    });
  }
  onLoginFail() {
    this.setState({error: 'Authentication Failed', isLoading: false});
  }

  renderButton() {
    if (this.state.isLoading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this._loginUser.bind(this)}>Log In</Button>;
  }

  render() {
    const {email, password, error} = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            value={email}
            onChangeText={email => this.setState({email})}
            label="Email"
            placeholder="user@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            value={password}
            onChangeText={password => this.setState({password})}
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        {!!error && <Text style={styles.errorTextStyle}>{error}</Text>}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});
export default LoginForm;
