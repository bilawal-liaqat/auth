import React, {Component} from 'react';
import { View } from 'react-native';
import { Button, Header } from  './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

 componentWillMount(){

  firebase.initializeApp({
    apiKey: 'AIzaSyCgni_zsIazhbUTbbx8ypgMB2VdeURQG2',
    authDomain: 'authentication-d7054.firebaseapp.com',
    databaseURL: 'https://authentication-d7054.firebaseio.com',
    projectId: 'authentication-d7054',
    storageBucket: 'authentication-d7054.appspot.com',
    messagingSenderId: '811956573810'
  });
 }


  render(){
    return (
      <View>
        <Header headerText= "Authentication App"> </Header>
        <LoginForm />
      
      </View>
    );
  }

}

export default App;
