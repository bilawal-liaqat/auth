import React, {Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button , Card , CardSection, Input, Spinner} from './common';


class LoginForm extends Component{
state = {email: '', password : '', error: '', loading: false};


    onButtonPress(){
        const { email , password} = this.state;
        console.log(email);
        console.log(password);
        this.setState({ error: '', loading: true});
 
        firebase.auth().signInWithEmailAndPassword(email , password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });

    }

    onLoginFail(){
        this.setState({
            loading: false,
            error: 'Authentication failed.'
        });
    }
    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }


    renderButton(){
        if(this.state.loading){
            return <Spinner size= "small" />;
        }

        return (
            <Button onPress= { this.onButtonPress.bind(this)}>
            Login
            </Button>
        );

    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    lable = "Email"
                    placeholder = "user@gmail.com"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                     />
                </CardSection>    

               

                <CardSection>
                    <Input
                    lable= "Password"
                    placeholder = "password"
                    secureTextEntry
                    value = {this.state.password}
                    onChangeText = {password => this.setState( { password: password})} 
                    />
                </CardSection>
                <Text
                style = {styles.errorTextStyle}
                >
                {this.state.error}
                </Text>
                <CardSection>
                   {this.renderButton()}
                </CardSection>



            </Card>

        );
    }
}





const styles = {

    errorTextStyle: {
        fontSize : 20,
        alignSelf: 'center',
        color: 'red'

    }
};


export default LoginForm;