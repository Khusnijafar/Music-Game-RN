import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Image, Alert   } from "react-native";
import { Root, Toast, Form, Item, Input, Label, Container, Button } from 'native-base';
import { connect } from "react-redux";
import { login } from "../public/redux/action/user";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async () => {
       await this.props.dispatch(login({
           email: this.state.email,
           password: this.state.password
       }))
         .then((response) => {
             AsyncStorage.setItem('token', response.action.payload.data.result.token.toString())
             AsyncStorage.setItem('id_user', response.action.payload.data.result.id_user.toString())
             AsyncStorage.setItem('fullname', response.action.payload.data.result.fullname.toString())
             Alert.alert("Login Berhasil")
             this.props.navigation.navigate('Home')
         })
         .catch((err) => {
            console.warn(err)
            Alert.alert("Gagal Login")
        })
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
                            <Input keyboardType="email-address" onChangeText={(email) => this.setState({ email })} value={this.state.email} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} value={this.state.password} />
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

const mapStateToProps = state => {
    return {
      user: state.user
    };
};

export default connect(mapStateToProps)(Login);


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