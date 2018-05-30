import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { Button , Card , CardSection, Input} from './common';


class LoginForm extends Component{
state = {email: '', password : ''};
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
                    onChangeText = {password => this.setState( { password})} 
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>



            </Card>

        );
    }
}


export default LoginForm;