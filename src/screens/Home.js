import React, { Component } from "react";
import { StyleSheet, Text, Image, TouchableOpacity  } from "react-native";
import { Container, View, Button } from "native-base";
import {  } from "react-native-gesture-handler";
var Sound = require('react-native-sound');
// import { connect } from "react-redux";


class Home extends Component {

    music = () => {
    const lagu = require('../musicdb/Cymbals/drumsatu.wav')
    const sound = new Sound(lagu, (error) => {

        if (error) {
          // do something
        }
        // play when loaded
        sound.play(() => sound.release())
    });
    }

  render() {
    return (
        <Container>
            <View style={styles.container}>
                <View>
                  <Button onPress={() => this.props.navigation.openDrawer()} style={styles.navbar}>
                    <Image source={require('../images/spongebob.png')} style={{position: 'absolute', width: 40, height: 40, left: 20, top: 8, borderRadius: 50, backgroundColor: '#FFFAFA' }}/>
                  </Button>
                  {/* <Image source={require('../images/crown.png')} style={{ position: 'absolute', left: 310, top: 10}} /> */}
                </View>
                  <Image source={require('../images/gambarbottom.png')} style={{position: 'absolute', width: 209, height: 233, top: 333, left: 0}}/>
                  <Image source={require('../images/walk.png')} style={{position: 'absolute', width: 219, height: 233, top: 150, left: 140}}/>
                <TouchableOpacity style={styles.buttonSatu} onPress={this.music.bind(this)}>
                    <Text style={styles.buttonDua}>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTiga} activeOpacity={0.4} onPress={this.music.bind(this)}>
                    <Text style={styles.buttonEmpat}>
                    </Text>
                </TouchableOpacity>           
                <TouchableOpacity style={styles.buttonLima} onPress={this.music.bind(this)}>
                    <Text style={styles.buttonEnam}>
                    </Text>            
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTujuh} onPress={this.music.bind(this)}>
                    <Text style={styles.buttonDelapan}>
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  navbar : {
    position: 'absolute',
    width: 411,
    height: 52,
    left: 0,
    top: 0,
    backgroundColor: '#87CEFA',
  },
  buttonSatu : {
   position: 'absolute',
   backgroundColor: '#D3D3D3',
   borderRadius: 60,
   top: 200,
   width: 85,
   height: 85,
   left: 65,
   justifyContent: 'center',
   alignItems: 'center'
  },
  buttonDua : {
   backgroundColor: '#A9A9A9',
   borderRadius: 60,
   width: 40,
   height: 40,
  },
  buttonTiga : {
    position: 'absolute',
    backgroundColor: '#D3D3D3',
    borderRadius: 60,
    top: 200,
    width: 85,
    height: 85,
    left: 210,
    justifyContent: 'center',
    alignItems: 'center'
   },
   buttonEmpat : {
    backgroundColor: '#A9A9A9',
    borderRadius: 60,
    width: 40,
    height: 40,
   },
   buttonLima : {
    position: 'absolute',
    backgroundColor: '#87CEFA',
    borderRadius: 60,
    top: 350,
    width: 120,
    height: 120,
    left: 200,
    justifyContent: 'center',
    alignItems: 'center'
   },
   buttonEnam : {
    backgroundColor: '#1E90FF',
    borderRadius: 60,
    width: 60,
    height: 60,
   },
   buttonTujuh : {
    position: 'absolute',
    backgroundColor: '#87CEFA',
    borderRadius: 60,
    top: 350,
    width: 120,
    height: 120,
    left: 40,
    justifyContent: 'center',
    alignItems: 'center'
   },
   buttonDelapan : {
    backgroundColor: '#1E90FF',
    borderRadius: 60,
    width: 60,
    height: 60,
   },
});


