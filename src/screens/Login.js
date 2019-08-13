import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Image   } from "react-native";
import { Root, Toast, Form, Item, Input, Label, Container, Button } from 'native-base';
import axios from 'axios';
// import { connect } from "react-redux";
// import { login } from "../public/redux/action/user";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    onChangeTextEmail = email => this.setState({ email })
    onChangeTextPassword = password => this.setState({ password })

    handleSubmit = () => {
        // alert('halo')
       let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email === '' || this.state.password === '') {
            Toast.show({
                text: 'Email or Password is required',
                buttonText: "Okay",
                type: 'danger',
                duration: 3000
            })
        } else if (this.state.email < 6 || this.state.email === "") {
            Toast.show({
                text: 'Invalid email',
                buttonText: "Okay",
                type: 'danger',
                duration: 3000
            })
        } else if (regex.test(this.state.email) === false) {
            Toast.show({
                text: "Incorrect email format",
                buttonText: "Okay",
                type: "danger",
                duration: 3000
            })
        } else {
        Toast.show({
            text: "Login failed",
            position: "top",
            type: "danger",
            duration: 3000
        })
        }
        let dataLogin = {
        email: this.state.email,
        password: this.state.password
        }
        let headers = {'authorization':'khusni', 'Content-Type': 'application/json'} 

        axios.post('http://192.168.6.196:3002/users/login', dataLogin, {headers})
        .then(res => {
            AsyncStorage.setItem('token', JSON.stringify(res.data.result.token))
            AsyncStorage.setItem('id_user', JSON.stringify(res.data.result.id_user))
        console.log(res);
        Toast.show({
            text: "Login successful",
            position: "top",
            type: "success",
            duration: 3000
        })
        this.clear()
        AsyncStorage.getItem('token')
        .then((res) => {
            token = res
        })        
        this.props.navigation.navigate('Home')
        })
        .catch(err => console.log(err));

    }
        
    clear = () => {
        this.SearchInput._root.clear();
      }
    render() {
        return(
            <Container>
            <View style={styles.container}>
                <Image source={require('../images/Vector.png')} style={{ position: 'absolute', width: 400, height: 236, left: -29, top: -37 }}/>
                <Image source={require('../images/Login.png')} style={{ position: 'absolute', width: 125, height: 49, left: 45, top: 51}} />
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Masuk sebagai tamu?</Text>
                        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Home')}><Text style={styles.signupButton}> klik disini!</Text></TouchableOpacity>
                    </View>
                    <Item floatingLabel>
                        <Label>Username</Label>
                            <Input keyboardType="email-address" onChangeText={this.onChangeTextEmail} getRef={input => {
      this.SearchInput = input;
    }}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={this.onChangeTextPassword}/>
                    </Item>
                    <TouchableOpacity style={styles.button} onPress={() => {this.handleSubmit()}}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Dont have an account yet?</Text>
                        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Register')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
                    </View>
            </View>
            </Container>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//       user: state.user.user
//     };
// };

// export default connect(mapStateToProps)(Login);

export default Login

const styles = StyleSheet.create({
container : {
backgroundColor:'#FFFAFA',
flex: 1,
alignItems:'center',
justifyContent :'center'
},
inputBox: {
width:300,
backgroundColor:'rgba(255, 255,255,0.2)',
borderRadius: 15,
paddingHorizontal:16,
fontSize:16,
color:'#ffffff',
marginVertical: 10
},
button: {
width: 80,
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
paddingVertical:16,
paddingBottom: 40,
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