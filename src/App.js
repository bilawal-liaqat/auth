import React, {Component} from 'react';
import { View , Text } from 'react-native';
import { Button, Header } from  './components/common'
class App extends Component {

  render(){
    return (
      <View>
        <Header headerText= "Authentication App"> </Header>
        <Text>Auth app using React</Text>
      
      </View>
    );
  }

}

export default App;
