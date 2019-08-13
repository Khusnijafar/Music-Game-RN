import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Toast, Item, Label, Input, Container, Root } from 'native-base'
import axios from 'axios'

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            email: '',
            password: ''
        }
    }
    onChangeTextFullname = fullname => this.setState({ fullname })
    onChangeTextEmail = email => this.setState({ email })
    onChangeTextPassword = password => this.setState({ password })

    handleSubmit = () => {
        let regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.fullname === '') {
            Toast.show({
                text: 'Name is required',
                buttonText: "Okay",
                duration: 3000
            })
        } else if (this.state.email === '') {
            Toast.show({
                text: 'Email is required',
                buttonText: "Okay",
                duration: 3000
            })
        } else if (regex.test(this.state.email) === false) {
            Toast.show({
                text: 'Email format is incorrect',
                buttonText: "Okay",
                duration: 3000
            })
        } else if (this.state.password === '') {
            Toast.show({
                text: 'Password is required',
                buttonText: "Okay",
                duration: 3000
            })
        } else  if (
            this.state.fullname !== "" &&
            this.state.email !== "" &&
            this.state.password !== ""
        ){
            Toast.show({
                text: 'Registrasi berhasil',
                duration: 3000
            })
        }
        let dataRegister = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password
            }
            let headers = {'authorization':'khusni', 'Content-Type': 'application/json'} 

            axios.post('http://192.168.6.196:3002/users/register/', dataRegister, {headers})
            .then(res => {
            console.log(res);
            this.props.navigation.navigate('Login')
            })
            .catch(err => console.warn(err));
    }
    render() {
    return(
        <Container>
        <View style={styles.container}>
            <Image source={require('../images/Vector.png')} style={{ position: 'absolute', width: 400, height: 236, left: -29, top: -37 }}/>
                <Text style={{fontSize: 50, color: '#FFFAFA', paddingBottom: 100}}>Register</Text>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input style={styles.inputBox} keyboardType="default" onChangeText={this.onChangeTextFullname}/>
                    </Item>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input style={styles.inputBox} keyboardType="email-address" onChangeText={this.onChangeTextEmail}/>
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input style={styles.inputBox} secureTextEntry={true} onChangeText={this.onChangeTextPassword}/>
                </Item>
                    <TouchableOpacity style={styles.button}  onPress={() => this.handleSubmit()}>
                        <Text style={styles.buttonText} >Register</Text>
                    </TouchableOpacity>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Login')}><Text style={styles.signupButton}> Sign in</Text>
                        </TouchableOpacity>
                </View>
        </View>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
container : {
backgroundColor:'#FFFAFA',
flex: 1,
alignItems:'center',
justifyContent :'center'
},
inputBox: {
width:300,
paddingHorizontal:16,
fontSize:16,
color:'#000000',
marginVertical: 10
},
button: {
width:90,
backgroundColor:'#4169E1',
borderRadius: 10,
marginVertical: 10,
paddingVertical: 13
},
buttonText: {
fontSize:16,
fontWeight:'500',
color:'#ffffff',
textAlign:'center'
},
signupTextCont : {
flexGrow: 1,
alignItems:'flex-end',
justifyContent :'center',
paddingVertical:20,
flexDirection:'row'
},
signupText: {
color:'#2F4F4F',
fontSize:16
},
signupButton: {
color:'#2F4F4F',
fontSize:16,
fontWeight:'500'
}
});