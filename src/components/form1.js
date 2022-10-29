import React from 'react';
import {View, TextInput, Button, Text, ActivityIndicator} from 'react-native';

class Form extends React.Component {
  state = {isLoading: false};

  componentDidMount() {
    console.log('mounting');
  }

  componentDidUpdate() {
    console.log('updating');
  }

  componentWillUnmount() {
    console.log('unmounting');
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Enter your username" />
        <Button
          title="DONE"
          onPress={() => {
            this.setState({isLoading: true});
            //fetch data
            setTimeout(() => {
              this.setState({isLoading: false});
            }, 3000);
          }}
        />
        {this.state.isLoading ? <ActivityIndicator /> : null}
      </View>
    );
  }
}

export default Form;
